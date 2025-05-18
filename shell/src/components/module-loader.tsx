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
      debugger;
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
  console.log("ModuleLoader", scope, module, fallback);
  const Component = lazy(() => {
    return loadRemote(`${scope}/${module}`)
      .then((module: any) => {
        debugger;
        console.log("Module loaded:", module);
        return {
          default: module.default,
        };
      })
      .catch((error) => {
        console.error("Error loading module:", error);
        // Fallback to a dummy component if module is missing
        return { default: () => <h2>Module not found</h2> };
      });
  });

  return <System request={"dashboard/Main"} />;
}
