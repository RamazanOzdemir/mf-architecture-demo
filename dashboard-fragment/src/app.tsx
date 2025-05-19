import RecentOrders from "@/container/recent-orders";
import RevenueChart from "@/container/revenue-chart";
import Stats from "@/container/stats";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="flex flex-col gap-4 p-4  md:gap-6 md:p-6 h-full">
      <Stats />
      <RevenueChart />
      <RecentOrders />
    </div>
  );
}
