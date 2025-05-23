import { lazy, Suspense } from "react";
import { loadRemote } from "@module-federation/enhanced/runtime";

export type ModuleLoaderProps = {
  scope: string;
  module: string;
  fallback?: React.ReactNode;
};

const componentCache = new Map<string, React.LazyExoticComponent<any>>();

function getLazyComponent(request: string) {
  if (!componentCache.has(request)) {
    const LazyComp = lazy(() =>
      loadRemote(request)
        .then((mod: any) => {
          if (!mod || typeof mod !== "object" || !("default" in mod)) {
            return { default: () => <h2>The module not founded</h2> };
          }
          return { default: mod.default };
        })
        .catch(() => {
          return { default: () => <h2>Loading Failure</h2> };
        })
    );
    componentCache.set(request, LazyComp);
  }

  return componentCache.get(request)!;
}

export default function ModuleLoader({
  scope,
  module,
  fallback,
  ...params
}: ModuleLoaderProps) {
  const request = `${scope}/${module}`;
  const Component = getLazyComponent(request);

  return (
    <Suspense fallback={fallback || "Loading System"}>
      <Component {...params} />
    </Suspense>
  );
}
