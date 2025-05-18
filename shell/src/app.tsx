import Layout from "@/containers/layout";
import ModuleLoader from "./components/module-loader";
import Startup from "./startup";

export default function App() {
  return (
    <Startup>
      <Layout>
        <p>Shadcn components were added</p>
        <ModuleLoader
          scope="dashboard"
          module="Main"
          fallback={<div>Loading...</div>}
        />
      </Layout>
    </Startup>
  );
}
