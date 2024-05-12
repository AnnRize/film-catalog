import { ButtonHTMLAttributes, forwardRef } from "react";
import style from "./MyButton.module.scss";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const MyButton = forwardRef<HTMLButtonElement, MyButtonProps>(({ children, className, ...props }, ref) => {
   return (
      <button className={`${style.myButton} ${className}`} {...props} ref={ref}>
         {children}
      </button>
   );
});
