import { useMemo } from "react";
import { isUndefined } from "lodash";
import { Facts } from "./Facts";
import { AboutFilm } from "./AboutFilm";
import {
   FilmBoxOfficeType,
   IFilmBoxOffice,
   IFilmDistribution,
   IFilmFact,
   IFilmItem,
   IStaff,
   ProfessionKeyType,
} from "types";
import style from "./About.module.scss";

interface AboutProps {
   film: IFilmItem;
   boxOffice?: IFilmBoxOffice[];
   facts?: IFilmFact[];
   distributions?: IFilmDistribution[];
   staff?: IStaff[];
}

export const About = ({ film, boxOffice, facts, distributions, staff }: AboutProps) => {
   const getStaff = useMemo(() => {
      const staffArray: { type: ProfessionKeyType; label: string; staff: string }[] = [
         { type: "DIRECTOR", label: "Режиссер", staff: "" },
         { type: "WRITER", label: "Сценарий", staff: "" },
         { type: "PRODUCER", label: "Продюсер", staff: "" },
         { type: "OPERATOR", label: "Оператор", staff: "" },
         { type: "COMPOSER", label: "Композитор", staff: "" },
         { type: "DESIGN", label: "Художник", staff: "" },
         { type: "EDITOR", label: "Монтажер", staff: "" },
      ];

      for (const value of staffArray) {
         value.staff =
            staff
               ?.filter((staff) => staff.professionKey === value.type)
               .map((staff) => staff.nameRu || staff.nameEn)
               .join(", ") || "";
      }

      return staffArray;
   }, [staff]);

   const getBudget = useMemo(() => {
      const boxOfficeArray: { type: FilmBoxOfficeType; label: string; budget: string }[] = [
         { type: "BUDGET", label: "Бюджет", budget: "" },
         { type: "RUS", label: "Сборы в России", budget: "" },
         { type: "USA", label: "Сборы в США", budget: "" },
         { type: "WORLD", label: "Сборы в Мире", budget: "" },
      ];

      for (const value of boxOfficeArray) {
         const item = boxOffice?.find((boxOffice) => boxOffice.type === value.type);
         value.budget = !isUndefined(item) ? item?.symbol + item?.amount.toLocaleString() : "";
      }

      return boxOfficeArray;
   }, [boxOffice]);

   const getFacts = useMemo(() => {
      const factsArray = facts?.filter((fact) => fact.type === "FACT");
      const bloopersArray = facts?.filter((fact) => fact.type === "BLOOPER");

      return { factsArray, bloopersArray };
   }, [facts]);

   const getDistributions = useMemo(() => {
      const ruDist = distributions?.find((dist) => dist.type === "COUNTRY_SPECIFIC");
      const worldDist = distributions?.find((dist) => dist.type === "WORLD_PREMIER");

      return { ruDist, worldDist };
   }, [distributions]);

   const AboutFilmProps = {
      film,
      getStaff,
      getBudget,
      getDistributions,
   };

   return (
      <div className={style.info}>
         <section className={style.title}>
            <h1>{film?.nameRu || film?.nameEn || film?.nameOriginal}</h1>
            {film?.ratingAgeLimits && <p> {film?.ratingAgeLimits.replace("age", "") + "+"}</p>}
            {(film?.nameEn || film?.nameOriginal) && <p>{film?.nameEn || film?.nameOriginal}</p>}
         </section>

         <AboutFilm {...AboutFilmProps} />

         {film?.description && (
            <section className={style.description}>
               <h3>Описание</h3>
               <p>{film?.description}</p>
            </section>
         )}

         {facts && <Facts getFacts={getFacts} />}
      </div>
   );
};
