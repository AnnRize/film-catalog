import { useQueries, useQuery } from "@tanstack/react-query";
import { FilmService, StaffService } from "api";
import { AdditionalInfoType } from "types";

const queryKeys = ["box_office", "facts", "distributions"];

export const useFilmData = (id: string) => {
   const { data: film } = useQuery({
      queryKey: [`film`, id],
      queryFn: async () => await FilmService.getFilmById(id!),
      enabled: !!id,
      retry: 2,
   });

   const { data: staff } = useQuery({
      queryKey: [`staff`, id],
      queryFn: async () => await StaffService.getFilmStaffById(id!),
      enabled: !!id && !!film,
      retry: 2,
   });

   const { data: seasons } = useQuery({
      queryKey: [`film/seasons`, id],
      queryFn: async () => await FilmService.getSeasons(id!),
      enabled: !!film?.serial,
      retry: 2,
   });

   const [{ data: boxOffice }, { data: facts }, { data: distributions }]: AdditionalInfoType = useQueries({
      queries: queryKeys.map((key) => ({
         queryKey: [`film/${key}`, id],
         queryFn: async () => await FilmService.getAdditionalInfo(id!, key),
         retry: 2,
      })),
   });

   return { film, staff, seasons, boxOffice, facts, distributions };
};
