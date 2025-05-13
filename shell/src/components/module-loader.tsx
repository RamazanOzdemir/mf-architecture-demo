import { lazy, Suspense } from "react";
import loadFragment from "@/lib/load-fragment";
import useDynamicScript from "@/hooks/use-dynamic-scripts";
import { init, loadRemote } from "@module-federation/enhanced/runtime";

export type ModuleLoaderProps = {
  scope: string;
  module: string;
  fallback?: React.ReactNode;
};

export default function ModuleLoader({
  scope,
  module,
  fallback,
  ...params
}: ModuleLoaderProps) {
  init({
    name: "shell",
    remotes: [
      {
        name: scope,
        entry: `http://localhost:3001/remoteEntry.js`,
      },
    ],
  });

  const Component = lazy(() =>
    loadRemote(`${scope}/${module}`).then((module: any) => ({
      default: module.default,
    }))
  );

  return (
    <Suspense fallback={fallback || ""}>
      <Component {...params} />
    </Suspense>
  );
}
