import React from "react";
import { EpisodeList } from "./EpisodeList";
import { IFilmSeason } from "types";
import style from "./Seasons.module.scss";

interface SeasonsProps {
   seasons?: IFilmSeason[];
}

export const Seasons = ({ seasons }: SeasonsProps) => {
   return (
      <section className={style.seasonsContainer}>
         <h3>Сезоны</h3>
         {seasons?.map((season) => (
            <React.Fragment key={season.number}>
               <section className={style.season}>
                  <input type="checkbox" id={`${season.number}`} />
                  <label htmlFor={`${season.number}`}>
                     <h3 className={style.seasonTitle}>{season.number} сезон</h3>
                  </label>
                  <div className={style.wrapper}>
                     <ul className={style.episodeList}>
                        <EpisodeList season={season} />
                     </ul>
                  </div>
               </section>
            </React.Fragment>
         ))}
      </section>
   );
};
