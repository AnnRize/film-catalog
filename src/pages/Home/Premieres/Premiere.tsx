import { Dispatch, RefObject } from "react";
import { IPremiereItem } from "types";
import style from "./Premiere.module.scss";

interface PremiereProps {
   premiere: IPremiereItem;
   currentFilm: IPremiereItem | undefined;
   setCurrentFilm: Dispatch<IPremiereItem>;
   sliderRef: RefObject<HTMLDivElement>;
}

export const Premiere = ({ premiere, currentFilm, setCurrentFilm, sliderRef }: PremiereProps) => {
   return (
      <div
         key={premiere.kinopoiskId}
         className={`${style.slide} ${premiere.kinopoiskId === currentFilm?.kinopoiskId && style.active}`}
         onClick={(e) => {
            setCurrentFilm(premiere);
            sliderRef.current?.scroll({
               left:
                  e.currentTarget.offsetLeft -
                  Math.floor(sliderRef.current.offsetWidth / 2) +
                  Math.floor(e.currentTarget.offsetWidth / 2),
            });
         }}
      >
         <img src={premiere.posterUrl} alt="" />
      </div>
   );
};
