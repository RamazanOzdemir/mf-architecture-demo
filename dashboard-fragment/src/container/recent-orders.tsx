import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: "#1023",
    customer: "Alice Y.",
    status: "Completed",
    amount: "$129.00",
    date: "2025-05-17",
  },
  {
    id: "#1022",
    customer: "Bob T.",
    status: "Pending",
    amount: "$89.50",
    date: "2025-05-16",
  },
  {
    id: "#1021",
    customer: "Clara J.",
    status: "Cancelled",
    amount: "$59.00",
    date: "2025-05-15",
  },
];

export default function RecentOrders() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={`recent-orders-row-key${index}`}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">{order.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
