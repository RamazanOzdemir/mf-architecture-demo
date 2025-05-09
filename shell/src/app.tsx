import Layout from "@/containers/layout";
import React from "react";

const Fragment = React.lazy(
  () =>
    // @ts-ignore
    import("fragment/App") as Promise<{
      default: React.ComponentType<any>;
    }>
);

export default function App() {
  return (
    <Layout>
      <p>Shadcn components were added</p>
      <Fragment />
    </Layout>
  );
}
