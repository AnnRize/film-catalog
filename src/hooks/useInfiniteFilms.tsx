import { useInfiniteQuery } from "@tanstack/react-query";
import { useSortParams } from "./useSortParams";
import { FilmService } from "api";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export const useInfiniteFilms = () => {
   const [totalPages, setTotalPages] = useState(0);
   const { sort, type, ...params } = useSortParams();
   const [ratingFrom] = useDebounce(params.ratingFrom, 1000);
   const [ratingTo] = useDebounce(params.ratingTo, 1000);
   const [yearFrom] = useDebounce(params.yearFrom, 1000);
   const [yearTo] = useDebounce(params.yearTo, 1000);
   const [keyword] = useDebounce(params.keyword, 1000);

   const { ...query } = useInfiniteQuery({
      queryKey: [sort, type, ratingFrom, ratingTo, yearFrom, yearTo, keyword],
      queryFn: async ({ pageParam = 1 }) => {
         const res = await FilmService.getFilms(type, pageParam, sort, ratingFrom, ratingTo, yearFrom, yearTo, keyword);
         setTotalPages(res.totalPages);
         return res;
      },
      initialPageParam: 1,
      getNextPageParam: (_lastPage, pages) => {
         if (pages.length < totalPages) {
            return pages.length + 1;
         } else {
            return undefined;
         }
      },
   });

   return { totalPages, ...query };
};
