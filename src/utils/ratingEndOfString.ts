export const ratingEndOfString = (count: number) => {
   let mod = count % 100;
   const localeCount = count.toLocaleString();

   if (mod > 4 && mod < 20) {
      return localeCount + " оценок";
   } else {
      mod = count % 10;
      if (mod === 1) {
         return localeCount + " оценка";
      }
      if (mod >= 2 && mod <= 4) {
         return localeCount + " оценки";
      } else {
         return localeCount + " оценок";
      }
   }
};
