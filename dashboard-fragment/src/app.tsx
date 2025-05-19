import Stats from "./container/stats";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 h-full">
      <Stats />
    </div>
  );
}
