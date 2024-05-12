import { createBrowserRouter } from "react-router-dom";
import { Layout } from "layout";
import { LazyHome, LazyCatalog, LazyFilmItem } from "pages";

export const router = createBrowserRouter([
   {
      path:"/",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <LazyHome />,
         },
         {
            path: ":id",
            element: <LazyFilmItem />,
         },
         {
            path: "catalog",
            element: <LazyCatalog />,
         },
         {
            path: "catalog/:id",
            element: <LazyFilmItem />,
         },
      ],
   },
]);
