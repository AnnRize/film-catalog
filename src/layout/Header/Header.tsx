import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.scss";

export const Header = () => {
   const location = useLocation();
   return (
      <div className={style.header}>
         <nav className={style.navbar}>
            <ul>
               <li>
                  <Link to={"/"}>Главная</Link>
               </li>
               <li>
                  <Link
                     to={"catalog"}
                     onClick={(e) => {
                        if (location.pathname === "/catalog") {
                           e.preventDefault();
                        }
                     }}
                  >
                     Каталог
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};
