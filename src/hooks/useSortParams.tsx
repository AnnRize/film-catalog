import { useSearchParams } from "react-router-dom";
import { FilmType, SortType } from "types";

export const useSortParams = () => {
   const [searchParams /* setSearchParams */] = useSearchParams();
   const type: FilmType | string = searchParams.get("type") || "ALL";
   const sort: SortType | string = searchParams.get("sort") || "NUM_VOTE";
   const ratingFrom = searchParams.get("ratingFrom") || "0";
   const ratingTo = searchParams.get("ratingTo") || "10";
   const yearFrom = searchParams.get("yearFrom") || "2000";
   const yearTo = searchParams.get("yearTo") || new Date().getFullYear().toString();
   const keyword = searchParams.get("keyword") || "";
   return { sort, type, ratingFrom, ratingTo, yearFrom, yearTo, keyword };
};
