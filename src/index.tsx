import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./global.scss";

const queryClient = new QueryClient({
   defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
   <QueryClientProvider client={queryClient}>
      <HelmetProvider>
         <RouterProvider router={router} />
      </HelmetProvider>
   </QueryClientProvider>,
);
