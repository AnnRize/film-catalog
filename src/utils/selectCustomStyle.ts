import { StylesConfig } from "react-select";

export const customSelect: StylesConfig = {
   container: (baseStyles) => ({
      ...baseStyles,
   }),
   control: (baseStyles) => ({
      ...baseStyles,
      border: "none",
      boxShadow: "none",
      "&:hover": {
         cursor: "pointer",
      },
      borderRadius: "10px",
      fontSize: "1rem",
      background: "rgb(80, 80, 80)",
   }),
   indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
   }),
   dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
   }),
   menu: (baseStyles) => ({
      ...baseStyles,
      border: "none",
      background: "",
      borderRadius: "10px",
      overflow: "hidden",
   }),
   menuList: (baseStyles) => ({
      ...baseStyles,
      padding: "0",
   }),
   singleValue: (baseStyles) => ({
      ...baseStyles,
      color: "white",
      fontSize: "1rem",
      margin: "0",
   }),
   option: (baseStyles, state) => ({
      ...baseStyles,
      transition: ".1s linear",
      color: "white",
      fontSize: "1rem",
      backgroundColor: state.isSelected ? "gray" : "rgb(80, 80, 80)",
      "&:hover": {
         backgroundColor: "gray",
         cursor: "pointer",
      },
   }),
};
