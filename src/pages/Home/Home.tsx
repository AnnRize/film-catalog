import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { Error, GridContainer, LoadSpinner } from "components";
import { MyButton } from "interface";
import { FilmService } from "api";
import { OtherPremieresList } from "./OtherPremieresList";
import { PremieresList } from "./Premieres";
import { IPremiereItem, MonthType } from "types";
import style from "./Home.module.scss";

const Home = () => {
   const [currentFilm, setCurrentFilm] = useState<IPremiereItem>();
   const [otherPremieres, setOtherPremieres] = useState<IPremiereItem[]>();

   const ref = useRef<HTMLDivElement>(null);

   const {
      data: premieres,
      isLoading,
      isError,
   } = useQuery({
      queryKey: ["premiere"],
      queryFn: async () => {
         const res = await FilmService.getPremiers(new Date().getFullYear(), MonthType[new Date().getMonth()]);
         setCurrentFilm(res[0]);
         setOtherPremieres(res.slice(20));
         return res;
      },
      select: (data): IPremiereItem[] => {
         const top20 = data.slice(0, 20);
         return [...top20];
      },
   });

   if (isError) {
      return <Error />;
   }

   if (isLoading) {
      return <LoadSpinner />;
   }

   return (
      <>
         <Helmet>
            <title>Главная</title>
         </Helmet>

         <div className={style.container}>
            <div key={currentFilm?.kinopoiskId} className={style.aboutContainer}>
               <section className={style.about}>
                  <h3>{currentFilm?.nameRu || currentFilm?.nameEn}</h3>
                  <p>
                     {currentFilm?.countries.map((c) => c.country).join(", ")} |{" "}
                     {currentFilm?.genres.map((g) => g.genre).join(", ")}
                  </p>
                  <p>
                     {currentFilm?.year && currentFilm?.year + " г"}{" "}
                     {currentFilm?.duration && " | " + currentFilm?.duration + " мин."}
                  </p>
                  <Link to={`${currentFilm?.kinopoiskId}`}>
                     <MyButton>Подробнее</MyButton>
                  </Link>
               </section>
               <img className={style.backgroundImage} src={currentFilm?.posterUrl} alt="" />
            </div>

            <section className={style.premieres}>
               <h3>Топ 20 фильмов и сериалов месяца</h3>
               <div className={style.wrapper}>
                  <MyButton
                     className={style.scrollButtonLeft}
                     onClick={(e) => {
                        e.stopPropagation();
                        ref.current?.scrollBy({ left: Math.floor(-ref.current.offsetWidth / 2) });
                     }}
                  >
                     {"🡠"}
                  </MyButton>
                  <div ref={ref} className={style.sliderContainer}>
                     <div className={style.slider}>
                        <PremieresList
                           sliderRef={ref}
                           premieres={premieres}
                           currentFilm={currentFilm}
                           setCurrentFilm={setCurrentFilm}
                        />
                     </div>
                  </div>
                  <MyButton
                     className={style.scrollButtonRight}
                     onClick={(e) => {
                        e.stopPropagation();
                        ref.current?.scrollBy({ left: Math.floor(ref.current.offsetWidth / 2) });
                     }}
                  >
                     {"🡢"}
                  </MyButton>
               </div>
            </section>

            {otherPremieres && (
               <div className={style.otherPremieresContainer}>
                  <GridContainer>
                     <OtherPremieresList otherPremieres={otherPremieres} />
                  </GridContainer>
               </div>
            )}
         </div>
      </>
   );
};

export default Home;
