import { stringToDate } from "utils";
import { IFilmEpisode } from "types";
import style from "./Episode.module.scss";

interface EpisodeProps {
   episode: IFilmEpisode;
}

export const Episode = ({ episode }: EpisodeProps) => {
   return (
      <li key={episode.episodeNumber} className={style.episode}>
         <h4 className={style.episodeTitle}>
            {episode.episodeNumber} серия <br /> {episode.nameRu || episode.nameEn}
         </h4>
         {episode.synopsis && <p className={style.episodeSynopsis}>{episode.synopsis}</p>}
         {episode.releaseDate && <p className={style.episodeReleaseDate}>{stringToDate(episode.releaseDate)}</p>}
      </li>
   );
};
