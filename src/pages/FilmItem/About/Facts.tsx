import { isUndefined } from "lodash";
import { ExpandText } from "components";
import { IFilmFact } from "types";
import style from "./Facts.module.scss";

interface FactsProps {
   getFacts: {
      factsArray: IFilmFact[] | undefined;
      bloopersArray: IFilmFact[] | undefined;
   };
}

export const Facts = ({ getFacts }: FactsProps) => {
   return (
      <div>
         {!isUndefined(getFacts?.factsArray) && getFacts?.factsArray?.length > 0 && (
            <section className={style.factsWrapper}>
               <h3>Факты о фильме</h3>
               <ul className={style.factsList}>
                  <ExpandText arrayLength={getFacts.factsArray.length}>
                     {getFacts.factsArray.map((fact, index) => (
                        <li key={index}>{fact.text.replace(/<.*?>|&.*?;/gi, "")}</li>
                     ))}
                  </ExpandText>
               </ul>
            </section>
         )}
         {!isUndefined(getFacts?.bloopersArray) && getFacts?.bloopersArray?.length > 0 && (
            <section className={style.factsWrapper}>
               <h3>Ошибки в фильме</h3>
               <ul className={style.factsList}>
                  <ExpandText arrayLength={getFacts.bloopersArray.length}>
                     {getFacts.bloopersArray.map((blooper, index) => (
                        <li key={index}>{blooper.text.replace(/<.*?>|&.*?;/gi, "")}</li>
                     ))}
                  </ExpandText>
               </ul>
            </section>
         )}
      </div>
   );
};
