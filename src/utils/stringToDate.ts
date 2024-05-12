export const stringToDate = (str: string) => {
   const date = new Date(str);
   return date.toLocaleString("ru-RU", { day: "numeric", month: "long", year: "numeric" });
};
