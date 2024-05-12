import { ReactNode } from "react";
import style from "./GridContainer.module.scss";

interface GridContainerProps {
   children: ReactNode;
}

export const GridContainer = ({ children }: GridContainerProps) => {
   return <div className={style.gridContainer}>{children}</div>;
};
