export type Product = {
  id: string;
  name: string;
  type: "Subscription" | "Usage-based" | "One-time" | "Add-on" | "Enterprise";
  category: string;
  price: string;
  billingCycle: "monthly" | "annual" | "one-time" | "custom";
  description: string;
};
