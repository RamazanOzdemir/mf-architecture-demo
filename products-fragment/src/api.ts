import { Product } from "./model";

const products: Array<Product> = [
  {
    id: "pro-license",
    name: "Pro License",
    type: "Subscription",
    category: "Licensing",
    price: "$199/year",
    billingCycle: "annual",
    description:
      "Unlock all advanced features with unlimited access and premium support.",
  },
  {
    id: "api-access",
    name: "Developer API Access",
    type: "Usage-based",
    category: "Developer Tools",
    price: "$49/month",
    billingCycle: "monthly",
    description: "Access our REST API with up to 1M requests per month.",
  },
  {
    id: "team-plan",
    name: "Team Collaboration Pack",
    type: "Subscription",
    category: "Collaboration",
    price: "Starting at $299/year",
    billingCycle: "annual",
    description:
      "Invite up to 10 users, manage roles, and collaborate in real time.",
  },
  {
    id: "white-label",
    name: "White-label Branding",
    type: "One-time",
    category: "Customization",
    price: "$599",
    billingCycle: "one-time",
    description: "Customize the app with your logo, domain, and branding.",
  },
  {
    id: "priority-support",
    name: "Premium Support Package",
    type: "Subscription",
    category: "Support",
    price: "$99/month",
    billingCycle: "monthly",
    description:
      "Get priority support with SLA, fast response, and dedicated agents.",
  },
  {
    id: "analytics-module",
    name: "Advanced Analytics Module",
    type: "Add-on",
    category: "Insights",
    price: "$29/month",
    billingCycle: "monthly",
    description: "Track user behavior, revenue, and KPIs with visual reports.",
  },
  {
    id: "integration-suite",
    name: "Integration Suite",
    type: "Enterprise",
    category: "Integration",
    price: "Contact Sales",
    billingCycle: "custom",
    description:
      "Integrate with tools like Salesforce, Slack, Zapier, and more.",
  },
];

export async function fetchProducts(): Promise<Array<Product>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2 * 1000);
  });
}
