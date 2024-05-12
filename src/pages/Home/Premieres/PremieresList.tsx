import { Dispatch, RefObject } from "react";
import { IPremiereItem } from "types";
import { Premiere } from "./Premiere";

interface PremieresListProps {
   premieres: IPremiereItem[] | undefined;
   currentFilm: IPremiereItem | undefined;
   setCurrentFilm: Dispatch<IPremiereItem>;
   sliderRef: RefObject<HTMLDivElement>;
}

export const PremieresList = ({ premieres, currentFilm, setCurrentFilm, sliderRef }: PremieresListProps) => {
   return (
      <>
         {premieres?.map((premiere) => (
            <Premiere
               sliderRef={sliderRef}
               key={premiere.kinopoiskId}
               premiere={premiere}
               currentFilm={currentFilm}
               setCurrentFilm={setCurrentFilm}
            />
         ))}
      </>
   );
};
