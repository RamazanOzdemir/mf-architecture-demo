import type { FederationRuntimePlugin } from "@module-federation/enhanced/runtime";

export const fallbackPlugin: () => FederationRuntimePlugin = function () {
  console.log("fallbackPlugin");
  return {
    name: "fallback-plugin",
    errorLoadRemote(args) {
      console.log("errorLoadRemote", args);
      debugger;
      if (args.lifecycle === "onLoad") {
        const fallback = "fallback";
        return fallback;
      } else if (args.lifecycle === "beforeRequest") {
        return args;
      }
    },
  };
};
