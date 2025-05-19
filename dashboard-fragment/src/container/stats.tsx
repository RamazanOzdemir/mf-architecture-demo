import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  UsersRound,
  ShoppingCart,
  HandCoins,
  MessageCircleCode,
} from "lucide-react";
export default function Stats() {
  const statStatuses = [
    <ArrowUp className="h-6 w-4 font-bold text-green-500" />,
    <ArrowDown className="h-6 w-4  font-bold text-red-500" />,
  ];

  const stats = [
    {
      title: "Total Users",
      value: "12,480",
      change: "5.4% compared to last week",
      icon: <UsersRound className="h-4 w-4 text-muted-foreground" />,
      status: 0,
    },
    {
      title: "New Orders",
      value: "1,293",
      change: "2.1% this week",
      icon: <ShoppingCart className="h-4 w-4 text-muted-foreground" />,
      status: 1,
    },
    {
      title: "Revenue",
      value: "$24,300",
      change: "8.9% growth",
      icon: <HandCoins className="h-4 w-4 text-muted-foreground" />,
      status: 0,
    },
    {
      title: " Support Tickets",
      value: "87 Open",
      change: "11 tickets resolved today",
      icon: <MessageCircleCode className="h-4 w-4 text-muted-foreground" />,
      status: 0,
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 md:grid-cols-2 xl:grid-cols-4 test">
      {stats.map((stat, index) => (
        <Card key={`stat-card-${index}`}>
          <CardHeader>
            <CardTitle className="flex gap-x-4">
              {stat.icon}
              <h4>{stat.title}</h4>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start gap-4">
            <p className="font-bold pl-4">{stat.value}</p>
            <div className="flex items-center gap-2 ">
              {statStatuses[stat.status]}
              <span>{stat.change}</span>{" "}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
