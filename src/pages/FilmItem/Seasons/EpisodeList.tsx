import { Episode } from "./Episode";
import { IFilmSeason } from "types";

interface EpisodeListProps {
   season: IFilmSeason;
}

export const EpisodeList = ({ season }: EpisodeListProps) => {
   return (
      <>
         {season.episodes.map((episode) => (
            <Episode key={episode.episodeNumber} episode={episode} />
         ))}
      </>
   );
};
