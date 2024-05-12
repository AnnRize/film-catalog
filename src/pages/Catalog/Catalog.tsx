import { Helmet } from "react-helmet-async";
import { Error, FilmList, GridContainer, LoadSpinner, Modal, SortFilms } from "components";
import { useInfiniteFilms } from "hooks";
import { MyButton } from "interface";
import { useState } from "react";
import filterImg from "assets/filter.svg";
import style from "./Catalog.module.scss";

const Catalog = () => {
   const [isFilter, setIsFilter] = useState(false);
   const { data, isLoading, isError, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteFilms();

   if (isError) {
      return <Error />;
   }

   return (
      <>
         <Helmet>
            <title>Фильмы</title>
         </Helmet>

         <div className={style.container}>
            {isLoading && <LoadSpinner />}
            {data && (
               <div className={style.catalogWrapper}>
                  <GridContainer>
                     <FilmList pages={data.pages} pageParams={data.pageParams} />
                  </GridContainer>
                  {hasNextPage && (
                     <MyButton
                        className={style.nextPageButton}
                        disabled={!hasNextPage || isFetchingNextPage}
                        onClick={() => fetchNextPage()}
                     >
                        Загрузить ещё
                     </MyButton>
                  )}
               </div>
            )}
            <div className={style.sortWrapper}>
               <SortFilms />
            </div>
            <MyButton
               onClick={() => {
                  setIsFilter((e) => !e);
               }}
               className={style.filterButton}
            >
               <img src={filterImg} alt="" width={40} />
            </MyButton>
            <Modal active={isFilter} setActive={setIsFilter}>
               <SortFilms />
            </Modal>
         </div>
      </>
   );
};

export default Catalog;
