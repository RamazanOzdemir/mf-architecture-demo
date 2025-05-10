import { lazy, Suspense } from "react";
import loadFragment from "@/lib/load-fragment";
import useDynamicScript from "@/hooks/use-dynamic-scripts";

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
  const { ready, failed } = useDynamicScript(
    "http://localhost:3001/remoteEntry.js"
  );
  if (!ready && failed) {
    return <div>Failed to load remote entry</div>;
  }
  const Component = lazy(loadFragment(scope, module));

  return (
    <Suspense fallback={fallback || ""}>
      <Component {...params} />
    </Suspense>
  );
}
