/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_API_URL_FILM: string;
   readonly VITE_API_URL_STAFF: string;
   readonly VITE_API_X_API_KEY_DEV: string;
   readonly VITE_API_X_API_KEY_PROD: string;
}

interface ImportMeta {
   readonly env: ImportMetaEnv;
}
