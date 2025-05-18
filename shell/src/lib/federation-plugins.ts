import type { FederationRuntimePlugin } from "@module-federation/enhanced/runtime";

export const fallbackPlugin: () => FederationRuntimePlugin = function () {
  return {
    name: "fallback-plugin",
    errorLoadRemote(args) {
      if (args.lifecycle === "onLoad") {
        const fallback = "fallback";
        return fallback;
      } else if (args.lifecycle === "beforeRequest") {
        return args;
      }
    },
  };
};
