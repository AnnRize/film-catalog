import { ReactNode, useState } from "react";
import style from "./ExpandText.module.scss";
import { MyButton } from "interface";

interface ExpandTextProps {
   children: ReactNode;
   arrayLength: number;
   lineClamp?: number;
   limit?: number;
}

export const ExpandText = ({ children, arrayLength, lineClamp = 5, limit = 5 }: ExpandTextProps) => {
   const [isExpand, setIsExpand] = useState(false);

   return (
      <div className={style.container}>
         <div
            className={`${arrayLength > limit ? style.textWrapper : ""} ${isExpand ? style.expand : ""}`}
            style={{ WebkitLineClamp: lineClamp }}
         >
            {children}
         </div>
         {arrayLength > limit && (
            <MyButton className={style.dropdown} onClick={() => setIsExpand((e) => !e)}>
               {isExpand ? "Свернуть" : "Развернуть"}
            </MyButton>
         )}
      </div>
   );
};
