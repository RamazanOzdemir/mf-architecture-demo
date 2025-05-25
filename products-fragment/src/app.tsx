import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
import "./styles/globals.css";
import Products from "./containers/products";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1 className="text-2xl font-bold text-center my-4">Products </h1>
        <Products />
      </main>
    </QueryClientProvider>
  );
}
