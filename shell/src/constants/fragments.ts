import { Remote } from "@/model";
const fragments: Array<Remote> = [
  {
    name: "dashboard",
    entry: "http://localhost:3001/remoteEntry.js",
  },
  {
    name: "users",
    entry: "http://localhost:3002/remoteEntry.js",
  },
];

export default fragments;
