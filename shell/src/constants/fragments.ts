import { Remote } from "@/model";
const fragments: Array<Remote> = [
  {
    name: "dashboard",
    entry: process.env.DASHBOARD_FRAGMENT_URL || "",
  },
  {
    name: "users",
    entry: process.env.USERS_FRAGMENT_URL || "",
  },
  {
    name: "products",
    entry: process.env.PRODUCTS_FRAGMENT_URL || "",
  },
];

export default fragments;
