import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import UsersTable from "@/containers/users-table";
import UserDetail from "@/containers/user";
import NotFoundPage from "@/containers/not-found";

import "./styles/globals.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UsersTable />} />
        <Route path=":uid" element={<UserDetail />} />
        <Route
          path="*"
          element={<NotFoundPage />} // Fallback for unmatched routes
        />
      </Routes>
    </QueryClientProvider>
  );
}
