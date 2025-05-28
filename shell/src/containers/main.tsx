import ModuleLoader from "@/components/module-loader";
import { modules } from "@/constants/modules";
import { Routes, Route } from "react-router";
import Layout from "./layout";
import NotFoundPage from "./not-found";

export default function Main() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {modules.map((module, index) => (
          <Route
            key={index}
            path={module.path}
            element={
              <ModuleLoader
                scope={module.scope}
                module={module.module}
                fallback={<div>Loading...</div>}
              />
            }
          />
        ))}
        <Route
          path="/*"
          element={<NotFoundPage />} // Fallback for unmatched routes
        />
      </Route>
      <Route
        path="/*"
        element={<NotFoundPage />} // Fallback for unmatched routes
      />
    </Routes>
  );
}
