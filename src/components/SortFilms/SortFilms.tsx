import { useSearchParams } from "react-router-dom";
import style from "./SortFilms.module.scss";
import { FilmType, SortType } from "types";
import Select from "react-select";
import { customSelect } from "utils";
import { MyButton, MyInput } from "interface";
import { useSortParams } from "hooks";
import { MouseEventHandler, useRef } from "react";

type sortOptionsType = {
   value: SortType;
   label: string;
};

const sortOptions: sortOptionsType[] = [
   {
      value: "NUM_VOTE",
      label: "По кол-ву оценок",
   },
   {
      value: "RATING",
      label: "По рейтингу",
   },
   {
      value: "YEAR",
      label: "По дате выхода",
   },
];

type typeOptionsType = {
   value: FilmType;
   label: string;
};

const typeOptions: typeOptionsType[] = [
   {
      value: "ALL",
      label: "Все",
   },
   {
      value: "FILM",
      label: "Кино",
   },
   {
      value: "TV_SERIES",
      label: "Сериал",
   },
   {
      value: "MINI_SERIES",
      label: "Мини-сериал",
   },
   {
      value: "TV_SHOW",
      label: "ТВ Шоу",
   },
];

export const SortFilms = () => {
   const [, /* searchParams */ setSearchParams] = useSearchParams();
   const { sort, type, ratingFrom, ratingTo, yearFrom, yearTo, keyword } = useSortParams();

   const ratingFromRef = useRef<HTMLInputElement>(null);
   const ratingToRef = useRef<HTMLInputElement>(null);
   const yearFromRef = useRef<HTMLInputElement>(null);
   const yearToRef = useRef<HTMLInputElement>(null);
   const keywordRef = useRef<HTMLInputElement>(null);

   const setParams = (value: string, paramName: string) => {
      setSearchParams((params) => {
         if (value.length == 0) {
            params.delete(paramName);
         } else {
            params.set(paramName, value);
         }
         return params;
      });
   };

   const resetFilters: MouseEventHandler<HTMLButtonElement> = () => {
      setSearchParams((params) => {
         params.delete("sort");
         params.delete("type");
         params.delete("ratingFrom");
         params.delete("ratingTo");
         params.delete("yearFrom");
         params.delete("yearTo");
         params.delete("keyword");
         return params;
      });
      if (ratingFromRef.current) {
         ratingFromRef.current.value = "";
      }
      if (ratingToRef.current) {
         ratingToRef.current.value = "";
      }
      if (yearFromRef.current) {
         yearFromRef.current.value = "";
      }
      if (yearToRef.current) {
         yearToRef.current.value = "";
      }
      if (keywordRef.current) {
         keywordRef.current.value = "";
      }
   };

   return (
      <div className={style.filterContainer}>
         <div className={style.filter}>
            <section className={style.filterSection}>
               <h3>Тип:</h3>
               <Select
                  isSearchable={false}
                  options={typeOptions}
                  value={typeOptions.find((e) => e.value === type)}
                  styles={customSelect}
                  onChange={(e) => {
                     const { value } = e as typeOptionsType;
                     setSearchParams((params) => {
                        if (value === "ALL") {
                           params.delete("type");
                        } else {
                           params.set("type", value);
                        }
                        return params;
                     });
                  }}
                  isMulti={false}
               />
            </section>
            <section className={style.filterSection}>
               <h3>Сортировать:</h3>
               <Select
                  isSearchable={false}
                  options={sortOptions}
                  value={sortOptions.find((e) => e.value === sort)}
                  styles={customSelect}
                  onChange={(e) => {
                     const { value } = e as sortOptionsType;
                     setSearchParams((params) => {
                        if (value === "NUM_VOTE") {
                           params.delete("sort");
                        } else {
                           params.set("sort", value);
                        }
                        return params;
                     });
                  }}
                  isMulti={false}
               />
            </section>

            <section className={style.filterSection}>
               <h3>Рейтинг:</h3>
               <div className={style.inputContainer}>
                  <span>От</span>
                  <MyInput
                     ref={ratingFromRef}
                     className={style.input}
                     maxLength={2}
                     // value={ratingFrom}
                     type="text"
                     onChange={(e) => {
                        if (Number(e.target.value) > 10) {
                           e.target.value = "10";
                        }
                        setParams(e.target.value, "ratingFrom");
                     }}
                     placeholder={ratingFrom}
                  />
                  <span>До</span>
                  <MyInput
                     ref={ratingToRef}
                     className={style.input}
                     maxLength={2}
                     // value={ratingTo}
                     type="text"
                     onChange={(e) => {
                        if (Number(e.target.value) > 10) {
                           e.target.value = "10";
                        }
                        setParams(e.target.value, "ratingTo");
                     }}
                     placeholder={ratingTo}
                  />
               </div>
            </section>
            <section className={style.filterSection}>
               <h3>Год:</h3>
               <div className={style.inputContainer}>
                  <span>От</span>
                  <MyInput
                     ref={yearFromRef}
                     className={style.input}
                     maxLength={4}
                     // value={yearFrom}
                     type="text"
                     onChange={(e) => setParams(e.target.value, "yearFrom")}
                     placeholder={yearFrom}
                  />

                  <span>До</span>
                  <MyInput
                     ref={yearToRef}
                     className={style.input}
                     maxLength={4}
                     // value={yearTo}
                     type="text"
                     onChange={(e) => setParams(e.target.value, "yearTo")}
                     placeholder={yearTo}
                  />
               </div>
            </section>

            <section className={style.filterSection}>
               <MyInput
                  ref={keywordRef}
                  className={style.input}
                  maxLength={4}
                  value={keyword}
                  type="text"
                  onChange={(e) => setParams(e.target.value, "keyword")}
                  placeholder="Ключевое слово"
               />
            </section>

            <MyButton onClick={resetFilters}>Сбросить фильтр</MyButton>
         </div>
      </div>
   );
};
