import axios from "axios";
import { FilmType, IFilmItem, IFilmResponse, IFilmSeasonResponse, IPremiereResponse, SortType } from "types";

const films = axios.create({
   baseURL: import.meta.env.VITE_API_URL_FILM,
   headers: {
      "X-API-KEY": import.meta.env.PROD
         ? import.meta.env.VITE_API_X_API_KEY_PROD
         : import.meta.env.VITE_API_X_API_KEY_DEV,
   },
});

export const FilmService = {
   async getPremiers(year: string | number, month: string) {
      const res = await films.get<IPremiereResponse>("films/premieres", {
         params: {
            year: year,
            month: month,
         },
      });
      return res.data.items;
   },
   async getFilms(
      type: FilmType | string,
      page: number,
      sort: SortType | string,
      ratingFrom: string,
      ratingTo: string,
      yearFrom: string,
      yearTo: string,
      keyword: string,
   ) {
      const res = await films.get<IFilmResponse>("films", {
         params: {
            page: page,
            type: type,
            order: sort,
            ratingFrom: ratingFrom,
            ratingTo: ratingTo,
            yearFrom: yearFrom,
            yearTo: yearTo,
            keyword: keyword,
         },
      });

      return res.data;
   },
   async getFilmById(id: string | number) {
      const res = await films.get<IFilmItem>(`films/${id}`);
      return res.data;
   },
   async getAdditionalInfo(id: string | number, key: string) {
      const res = await films.get(`films/${id}/${key}`);
      return res.data.items;
   },

   async getSeasons(id: string | number) {
      const res = await films.get<IFilmSeasonResponse>(`films/${id}/seasons`);
      return res.data.items;
   },
};
