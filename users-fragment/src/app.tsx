import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import UsersTable from "@/containers/users-table";
import UserDetail from "@/containers/user";

import "./styles/globals.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UsersTable />} />
        <Route path=":uid" element={<UserDetail />} />
        <Route path="test" element={<div>test</div>} />
        <Route path="test/*" element={<div>test all</div>} />
      </Routes>
    </QueryClientProvider>
  );
}
