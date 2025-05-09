import React from "react";

export type FragmentPropsType = {
  url: String;
  skeleton?: React.ReactElement;
};

export default function Fragment({ url, skeleton }: FragmentPropsType) {
  const Component = React.lazy(
    () =>
      // @ts-ignore
      import(url) as Promise<{
        default: React.ComponentType<any>;
      }>
  );
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
}
