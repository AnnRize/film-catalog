import axios from "axios";
import { IStaff } from "types";

const staff = axios.create({
   baseURL: import.meta.env.VITE_API_URL_STAFF,
   headers: {
      "X-API-KEY": import.meta.env.PROD
         ? import.meta.env.VITE_API_X_API_KEY_PROD
         : import.meta.env.VITE_API_X_API_KEY_DEV,
   },
});

export const StaffService = {
   async getFilmStaffById(id: string) {
      const res = await staff.get<IStaff[]>(`staff?filmId=${id}`);
      return res.data;
   },
};
