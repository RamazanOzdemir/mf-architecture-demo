import Layout from "@/containers/layout";
import Startup from "./startup";
import { Routes, Route } from "react-router";
import Main from "@/containers/main";
export default function App() {
  return (
    <Startup>
      <Main />
    </Startup>
  );
}
