import { Product } from "@/model";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ShieldCheck,
  Plug,
  Users,
  Tag,
  MessageCircle,
  BarChart2,
  Link,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "pro-license": ShieldCheck,
  "api-access": Plug,
  "team-plan": Users,
  "white-label": Tag,
  "priority-support": MessageCircle,
  "analytics-module": BarChart2,
  "integration-suite": Link,
} as const;

export type ProductProps = {
  product: Product;
};

export default function ProductCard({ product, ...params }: ProductProps) {
  const Icon = iconMap[product.id] || null;

  return (
    <Card
      className="transition-shadow hover:shadow-xl border border-gray-200 rounded-xl bg-white"
      {...params}
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 text-2xl shadow-sm">
          <Icon />
        </div>
        <CardTitle className="text-lg font-bold text-gray-800">
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 px-4 pb-8">
        <p className="text-gray-700">{product.description}</p>
        <div className="flex flex-wrap gap-2 text-sm my-8">
          <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded">
            <span className="font-medium">Category:</span> {product.category}
          </span>
          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded">
            <span className="font-medium">Billing:</span> {product.billingCycle}{" "}
            / 5
          </span>
          <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded">
            <span className="font-medium">Type:</span> {product.type}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-500">Price:</span>
          <span className="font-bold text-lg text-blue-700">
            {product.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
