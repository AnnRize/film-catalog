import { ratingEndOfString } from "utils";
import { IFilmItem } from "types";
import style from "./Rating.module.scss";

interface OverallRatingProps {
   film: IFilmItem;
}

export const Rating = ({ film }: OverallRatingProps) => {
   return (
      <div className={style.ratingContainer}>
         {!(film?.ratingKinopoisk == null || film?.ratingImdb == null) && (
            <section className={style.ratingSection}>
               <h3>Общий рейтинг</h3>
               <div className={style.ratingKinopoisk}>
                  {film?.ratingKinopoisk !== null && (
                     <div className={style.ratingWrapper}>
                        <strong className={style.rating}>Кинопоиск: {film?.ratingKinopoisk}</strong>{" "}
                        <span className={style.voteCount}>{ratingEndOfString(film?.ratingKinopoiskVoteCount)}</span>
                     </div>
                  )}

                  {film?.ratingImdb !== null && (
                     <div className={style.ratingWrapper}>
                        <strong className={style.rating}>IMDb: {film?.ratingImdb}</strong>{" "}
                        <span className={style.voteCount}>{ratingEndOfString(film?.ratingImdbVoteCount)}</span>
                     </div>
                  )}
               </div>
            </section>
         )}

         {!(film?.ratingFilmCritics == null && film?.ratingRfCritics == null) && (
            <section className={style.ratingSection}>
               <h3>Рейтинг кинокритиков </h3>
               <div className={style.ratingKinopoisk}>
                  {film?.ratingFilmCritics !== null && (
                     <div className={style.ratingWrapper}>
                        <strong className={style.rating}>В мире: {film?.ratingFilmCritics}</strong>{" "}
                        <span className={style.voteCount}>{ratingEndOfString(film?.ratingFilmCriticsVoteCount)}</span>
                     </div>
                  )}
                  {film?.ratingRfCritics !== null && (
                     <div className={style.ratingWrapper}>
                        <strong className={style.rating}> В России: {film?.ratingRfCritics}</strong>{" "}
                        <span className={style.voteCount}>{ratingEndOfString(film?.ratingRfCriticsVoteCount)}</span>
                     </div>
                  )}
               </div>
            </section>
         )}
      </div>
   );
};
