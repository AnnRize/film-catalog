import { useNavigate } from "react-router-dom";
import { IPremiereItem } from "types";
import style from "./OtherPremiere.module.scss";

interface OtherPremiereProps {
   premiere: IPremiereItem;
}

export const OtherPremiere = ({ premiere }: OtherPremiereProps) => {
   const { countries, genres, kinopoiskId, nameRu, nameEn, posterUrl, year } = premiere;
   const nav = useNavigate();
   return (
      <article className={style.film} onClick={() => nav(`${kinopoiskId}`)}>
         <img src={posterUrl} alt="" loading="lazy" />
         <section className={style.filmInfo}>
            <h2 className={style.title}>
               {nameRu || nameEn}
               <br />({year})
            </h2>
            <p>{countries.map((country) => country.country).join(", ")}</p>
            <hr />
            <p>{genres.map((genre) => genre.genre).join(", ")}</p>
         </section>
      </article>
   );
};
