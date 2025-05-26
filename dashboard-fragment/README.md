# 📊 Dashboard App

> The **Dashboard App** is a microfrontend that provides an overview of mock business data, including **statistics cards**, an **invoices table**, and a **chart visualization**.

This module is designed to be consumed by a host application (like the `shell`), and demonstrates how independent features can be developed and deployed separately in a Microfrontend architecture.

---

## 🧩 What is the Dashboard App?

The Dashboard App includes:

- 📈 **Stats Cards** – Displaying key business KPIs (e.g., revenue, orders, users)
- 📊 **Chart Component** – A simple data visualization (e.g., line or bar chart)
- 📋 **Invoices Table** – Showing mock invoice data with columns like date, customer, amount, and status

It exposes its components to the host via **Webpack Module Federation**.

---

## 🚧 Tech Highlights

- ⚛️ **React** + **TypeScript**
- 📦 **Webpack 5** with **Module Federation (remote)**
- 💨 **Tailwind CSS** for styling
- 📊 **Recharts** or similar for chart visualization
- 📋 **Mock data** to simulate realistic content

---

## 📁 Folder Structure

```bash
dashboard-fragment/
├── src/
│   ├── app.tsx           # Main React app with routing
│   ├── bootstrap.tsx     # App initializer
│   └── index.tsx         # Entry point
├── public/
├── webpack.config.js     # Module Federation setup (host)
├── .env                  # Remote app URLs defined here
└── package.json
```

## 🔗 Module Federation Setup

It is loaded by the shell (or another host) via the URL provided in .env:

### ✅ Example .env file

```bash
PORT=3001
```

## 🚀 Getting Started

1. Install dependencies:

```bash
cd dashboard-fragment
yarn install
```

2. Create a .env file (or copy from .env.example) and ensure remote URLs are correct.

3. Run the development server:

```bash
yarn start
```

App will start at: http://localhost:3001

## 📦 Usage in Shell

When loaded into the shell app, the Dashboard page is displayed inside the main layout via routing and Module Federation. No additional configuration is needed apart from setting the correct remote URL in the shell’s .env.

## 📄 License

This project is licensed under the MIT License.
