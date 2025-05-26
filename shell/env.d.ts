// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    DASHBOARD_FRAGMENT_URL: string;
    USERS_FRAGMENT_URL: string;
    PRODUCTS_FRAGMENT_URL: string;
  }
}
