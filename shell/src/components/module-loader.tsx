import { lazy, Suspense } from "react";
import { loadRemote } from "@module-federation/enhanced/runtime";

export type ModuleLoaderProps = {
  scope: string;
  module: string;
  fallback?: React.ReactNode;
};

const System = ({ request }: { request: string }) => {
  if (!request) {
    return <h2>No system specified</h2>;
  }

  const Component = lazy(() =>
    loadRemote(request).then((mod: any) => {
      if (!mod || !mod.default) {
        // Fallback to a dummy component if module is missing
        return { default: () => <h2>Module not found</h2> };
      }
      return { default: mod.default };
    })
  );

  return (
    <Suspense fallback="Loading System">
      <Component />
    </Suspense>
  );
};

export default function ModuleLoader({
  scope,
  module,
  fallback,
  ...params
}: ModuleLoaderProps) {
  return <System request={`${scope}/${module}`} />;
}
