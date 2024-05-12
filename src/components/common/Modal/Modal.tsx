import { Dispatch, FC, ReactNode } from "react";
import style from "./Modal.module.scss";

interface IModal {
   setActive: Dispatch<boolean>;
   active: boolean | (() => boolean);
   children: ReactNode;
}

export const Modal: FC<IModal> = ({ children, active, setActive }) => {
   return (
      active && (
         <div className={style.modal} onMouseDown={() => setActive(false)}>
            <div className={style.modal__content} onMouseDown={(e) => e.stopPropagation()}>
               {children}
            </div>
         </div>
      )
   );
};
