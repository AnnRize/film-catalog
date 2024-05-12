import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { isUndefined } from "lodash";
import { MyButton } from "interface";
import { useFilmData } from "hooks";
import { Rating } from "./Rating";
import { Seasons } from "./Seasons";
import { About } from "./About";
import style from "./FilmItem.module.scss";

const FilmItem = () => {
   const { id } = useParams();
   const [isButton, setIsButton] = useState(false);

   const [pos, setPos] = useState({ x: 0, y: 0 });

   const { film, staff, seasons, boxOffice, facts, distributions } = useFilmData(id!);

   useEffect(() => {
      const scrollButton = () => {
         if (window.scrollY > 1500) {
            setIsButton(true);
         } else {
            setIsButton(false);
         }
      };

      window.addEventListener("scroll", scrollButton);

      return () => {
         window.removeEventListener("scroll", scrollButton);
      };
   }, []);

   return (
      <>
         <Helmet>
            <title>Главная</title>
         </Helmet>
         <div className={style.container}>
            {!isUndefined(film) && (
               <>
                  <div className={style.imgWrapper}>
                     <img
                        onMouseMove={(e) => {
                           if (window.innerWidth < 800) {
                              return;
                           }
                           const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
                           const maxDeg = 20;

                           const mouseX = e.clientX - left;
                           const mouseY = e.clientY - top;

                           const xm = mouseX / width - 0.5;
                           const ym = mouseY / height - 0.5;

                           const x = xm * maxDeg;
                           const y = ym * maxDeg;
                           setPos({ x: x, y: -y });
                        }}
                        onMouseLeave={() => {
                           setPos({ x: 0, y: 0 });
                        }}
                        style={{
                           transform: `rotateY(${pos.x}deg) rotateX(${pos.y}deg)`,
                        }}
                        src={film?.posterUrl}
                        alt=""
                        loading="lazy"
                     />
                     <Link className={style.kinopoiskLink} to={film.webUrl} target="_blank">
                        <MyButton className={style.button}>Перейти на Кинопоиск</MyButton>
                     </Link>
                  </div>

                  <Rating film={film} />
                  {seasons && <Seasons seasons={seasons} />}
                  <About film={film} boxOffice={boxOffice} facts={facts} distributions={distributions} staff={staff} />
               </>
            )}
         </div>
         {!!isButton && (
            <MyButton
               className={style.scrollTopButton}
               onClick={(e) => {
                  e.stopPropagation();
                  scrollTo({ top: 0 });
               }}
            >
               ↑ Наверх ↑
            </MyButton>
         )}
      </>
   );
};

export default FilmItem;
