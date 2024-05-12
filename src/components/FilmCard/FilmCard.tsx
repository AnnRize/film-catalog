import { useNavigate } from "react-router-dom";
import { IFilm } from "types";
import style from "./FilmCard.module.scss";

interface FilmCardProps {
   film: IFilm;
}

export const FilmCard = ({ film }: FilmCardProps) => {
   const { countries, genres, kinopoiskId, nameRu, nameEn, nameOriginal, posterUrl, ratingKinopoisk, year } = film;
   const nav = useNavigate();

   return (
      <article className={style.film} data-rating={ratingKinopoisk} onClick={() => nav(`${kinopoiskId}`)}>
         <img src={posterUrl} alt="" loading="lazy" />
         {ratingKinopoisk && (
            <div
               className={`${style.rating} ${
                  ratingKinopoisk >= 8 ? style.gold : ratingKinopoisk >= 7 ? style.green : style.grey
               }`}
            >
               <p>{ratingKinopoisk}</p>
            </div>
         )}
         <section className={style.filmInfo}>
            <h2 className={style.title}>
               {nameRu || nameEn || nameOriginal}
               <br />({year})
            </h2>
            <p>{countries.map((country) => country.country).join(", ")}</p>
            <hr />
            <p>{genres.map((genre) => genre.genre).join(", ")}</p>
         </section>
      </article>
   );
};
