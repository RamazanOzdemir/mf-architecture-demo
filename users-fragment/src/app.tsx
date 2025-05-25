import UsersTable from "@/containers/users-table";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router";
import "./styles/globals.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UsersTable />} />
      </Routes>
    </QueryClientProvider>
  );
}
