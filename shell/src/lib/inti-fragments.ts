import fragments from "@/constants/fragments";
import { init } from "@module-federation/enhanced/runtime";
import { fallbackPlugin } from "./federation-plugins";

export const initFragments = () => {
  init({
    name: "shell",
    remotes: fragments,
    plugins: [fallbackPlugin()],
  });
};
