export const modules = [
  {
    name: "dashboard",
    path: "/",
    scope: "dashboard",
    module: "Main",
  },
  {
    name: "users",
    path: "/users/*",
    scope: "users",
    module: "Main",
  },
  {
    name: "products",
    path: "/products",
    scope: "products",
    module: "Main",
  },
];
