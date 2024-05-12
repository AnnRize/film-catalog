import { minToHours, stringToDate } from "utils";
import { FilmBoxOfficeType, IFilmDistribution, IFilmItem, ProfessionKeyType } from "types";
import style from "./AboutFilm.module.scss";

interface AboutFilmProps {
   film: IFilmItem;
   getStaff: {
      type: ProfessionKeyType;
      label: string;
      staff: string;
   }[];
   getBudget: {
      type: FilmBoxOfficeType;
      label: string;
      budget: string;
   }[];
   getDistributions: {
      ruDist: IFilmDistribution | undefined;
      worldDist: IFilmDistribution | undefined;
   };
}

export const AboutFilm = ({ film, getStaff, getBudget, getDistributions }: AboutFilmProps) => {
   return (
      <section className={style.about}>
         <h3>О фильме</h3>
         {film?.year && (
            <div className={style.filmInfo}>
               <span>Год производства</span>
               {film?.year}
            </div>
         )}
         {film?.countries.length > 0 && (
            <div className={style.filmInfo}>
               <span>Страна</span>
               {film?.countries.map((country) => country.country).join(", ")}
            </div>
         )}
         {film?.genres.length > 0 && (
            <div className={style.filmInfo}>
               <span>Жанр</span>
               {film?.genres.map((genre) => genre.genre).join(", ")}
            </div>
         )}
         {film?.slogan && (
            <div className={style.filmInfo}>
               <span>Слоган</span> <i>"{film?.slogan}"</i>
            </div>
         )}

         {getStaff.map(
            (staff) =>
               staff.staff && (
                  <div key={staff.type} className={style.filmInfo}>
                     <span>{staff.label}</span>
                     {staff.staff}
                  </div>
               ),
         )}

         {getBudget.map(
            (budget) =>
               budget.budget && (
                  <div key={budget.type} className={style.filmInfo}>
                     <span>{budget.label}</span>
                     {budget.budget}
                  </div>
               ),
         )}

         {getDistributions.ruDist && (
            <div className={style.filmInfo}>
               <span>Премьера в России</span> {stringToDate(getDistributions.ruDist.date || "")}
            </div>
         )}
         {getDistributions.worldDist && (
            <div className={style.filmInfo}>
               <span>Премьера в Мире</span> {stringToDate(getDistributions.worldDist.date || "")}
            </div>
         )}

         {film?.ratingAgeLimits && (
            <div className={style.filmInfo}>
               <span>Возраст</span>
               {film?.ratingAgeLimits.replace("age", "")}+
            </div>
         )}
         {film?.ratingMpaa && (
            <div className={style.filmInfo}>
               <span>Рейтинг MPAA </span>
               {film?.ratingMpaa.toUpperCase()}
            </div>
         )}
         {film?.filmLength && (
            <div className={style.filmInfo}>
               <span>Время</span>
               {film?.filmLength} мин / {minToHours(film?.filmLength)}
            </div>
         )}
      </section>
   );
};
