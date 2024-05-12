import { UseQueryResult } from "@tanstack/react-query";

// -------------------------- Item --------------------------
export interface IFilm {
   // короткая информация
   countries: { country: string }[];
   genres: { genre: string }[];
   imdbId: string | null;
   kinopoiskId: number;
   nameEn: null;
   nameOriginal: string | null;
   nameRu: string;
   posterUrl: string;
   posterUrlPreview: string;
   ratingImdb: number | null;
   ratingKinopoisk: number;
   type: FilmType;
   year: number;
}

export interface IFilmBoxOffice {
   // бюджет
   type: FilmBoxOfficeType;
   amount: number;
   currencyCode: string;
   name: string;
   symbol: string;
}

export interface IFilmItem extends IFilm {
   // полная информация
   kinopoiskHDId: string;
   coverUrl: string;
   logoUrl: string;
   reviewsCount: number;
   ratingGoodReview: number;
   ratingGoodReviewVoteCount: number;
   ratingKinopoiskVoteCount: number;
   ratingImdbVoteCount: number;
   ratingFilmCritics: number;
   ratingFilmCriticsVoteCount: number;
   ratingAwait: number;
   ratingAwaitCount: number;
   ratingRfCritics: number;
   ratingRfCriticsVoteCount: number;
   webUrl: string;
   filmLength: number;
   slogan: string;
   description: string;
   shortDescription: string;
   editorAnnotation: string;
   isTicketsAvailable: boolean;
   productionStatus: ProductionStatusType;
   ratingMpaa: string;
   ratingAgeLimits: string;
   hasImax: boolean;
   has3D: boolean;
   lastSync: string;
   startYear: number;
   endYear: number;
   serial: boolean;
   shortFilm: boolean;
   completed: boolean;
}

export interface IFilmSeason {
   // сезон
   number: number;
   episodes: IFilmEpisode[];
}

export interface IFilmEpisode {
   // эпизод
   seasonNumber: number;
   episodeNumber: number;
   nameRu: string;
   nameEn: string;
   synopsis: string;
   releaseDate: string;
}

export interface IFilmFact {
   // факты
   text: string;
   type: FilmFactType;
   spoiler: boolean;
}

export interface IFilmDistribution {
   // прокат
   type: FilmDistributionType;
   subType: boolean;
   date: string;
   reRelease: boolean;
   country: { country: string };
   companies: { name: string }[];
}

export interface IPremiereItem {
   // премьера
   kinopoiskId: number;
   nameRu: string;
   nameEn: null;
   year: number;
   posterUrl: string;
   posterUrlPreview: string;
   countries: { country: string }[];
   genres: { genre: string }[];
   duration: number;
   premiereRu: string;
}

// -------------------------- Response --------------------------
export interface IPremiereResponse {
   total: number;
   items: IPremiereItem[];
}

export interface IFilmResponse {
   page: number;
   totalPages: number;
   items: IFilm[];
}

export interface IFilmBoxOfficeResponse extends ResponseTemplate<IFilmBoxOffice> {
   // бюджет ответ
}

export interface IFilmSeasonResponse extends ResponseTemplate<IFilmSeason> {
   // сезон ответ
}

export interface IFilmFactResponse extends ResponseTemplate<IFilmFact> {
   // факт ответ
}

export interface IFilmDistributionResponse extends ResponseTemplate<IFilmDistribution> {
   // прокат ответ
}

// -------------------------- Types --------------------------

type ProductionStatusType = "FILMING" | "PRE_PRODUCTION" | "COMPLETED" | "ANNOUNCED" | "UNKNOWN" | "POST_PRODUCTION";

export type FilmType = "FILM" | "TV_SERIES" | "MINI_SERIES" | "TV_SHOW" | "ALL";

type FilmDistributionType = "LOCAL" | "COUNTRY_SPECIFIC" | "PREMIERE" | "ALL" | "WORLD_PREMIER";

export type FilmBoxOfficeType = "BUDGET" | "RUS" | "USA" | "WORLD";

type FilmFactType = "FACT" | "BLOOPER";

export type SortType = "RATING" | "NUM_VOTE" | "YEAR";

export enum MonthType {
   "JANUARY",
   "FEBRUARY",
   "MARCH",
   "APRIL",
   "MAY",
   "JUNE",
   "JULY",
   "AUGUST",
   "SEPTEMBER",
   "OCTOBER",
   "NOVEMBER",
   "DECEMBER",
}
export type AdditionalInfoType = [
   UseQueryResult<IFilmBoxOffice[], Error>,
   UseQueryResult<IFilmFact[], Error>,
   UseQueryResult<IFilmDistribution[], Error>,
];

// -------------------------- Templates --------------------------

interface ResponseTemplate<T> {
   total: number;
   items: T[];
}
