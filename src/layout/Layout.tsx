import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LoadSpinner } from "components";
import { Header } from "./Header";
import style from "./Layout.module.scss";

export const Layout = () => {
   return (
      <div className={style.container}>
         <header className={style.header}>
            <Header />
         </header>

         <main className={style.main}>
            <Suspense fallback={<LoadSpinner />}>
               <Outlet />
            </Suspense>
         </main>
      </div>
   );
};
