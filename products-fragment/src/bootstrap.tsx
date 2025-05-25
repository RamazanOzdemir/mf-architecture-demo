import { createRoot } from "react-dom/client";
import App from "./app";
import "./styles/globals.css";

const domNode = document.getElementById("root");
if (!domNode) {
  throw new Error("Root element not found");
}
const root = createRoot(domNode);

root.render(<App />);
