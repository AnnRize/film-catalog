import { minToHours, ratingEndOfString, stringToDate } from "utils";
import { expect, test } from "vitest";

test("minToHours", () => {
   expect(minToHours(48)).toBe("0:48");
   expect(minToHours(175)).toBe("2:55");
});

test("ratingEndOfString", () => {
   expect(ratingEndOfString(1)).toBe("1 оценка");
   expect(ratingEndOfString(2)).toBe("2 оценки");
   expect(ratingEndOfString(4)).toBe("4 оценки");
   expect(ratingEndOfString(5)).toBe("5 оценок");
   expect(ratingEndOfString(20)).toBe("20 оценок");
   expect(ratingEndOfString(21)).toBe("21 оценка");
   expect(ratingEndOfString(22)).toBe("22 оценки");
   expect(ratingEndOfString(24)).toBe("24 оценки");
   expect(ratingEndOfString(25)).toBe("25 оценок");
   expect(ratingEndOfString(29)).toBe("29 оценок");
});

test("stringToDate", () => {
   expect(stringToDate("2020-05-04")).toBe("4 мая 2020 г.");
   expect(stringToDate("2024-12-01")).toBe("1 декабря 2024 г.");
});
