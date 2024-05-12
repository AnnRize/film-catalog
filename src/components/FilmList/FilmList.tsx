import { InfiniteData } from "@tanstack/react-query";
import React from "react";
import { FilmCard } from "components/FilmCard";
import { IFilmResponse } from "types";

export const FilmList = ({ pages }: InfiniteData<IFilmResponse>) => {
   return pages.map((group, i) => {
      return (
         <React.Fragment key={i}>
            {group?.items.map((film) => (
               <FilmCard key={film.kinopoiskId} film={film} />
            ))}
         </React.Fragment>
      );
   });
};
