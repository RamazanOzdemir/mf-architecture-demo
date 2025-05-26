# 🛍️ Products App

> The **Products App** is a microfrontend that fetches and displays a list of **mock software products** using **React Query** and renders them in a simple, responsive layout.

This module is independently developed and integrated into a host application (like the `shell`) via **Webpack Module Federation**.

---

## 📦 What is the Products App?

The Products App is responsible for:

- Fetching a list of mock software products via an **async function**
- Using **React Query** for data management and caching
- Displaying products in a clean, styled component

---

## 🚧 Tech Highlights

- ⚛️ **React** + **TypeScript**
- 🔄 **React Query** – for efficient data fetching and caching
- 📦 **Webpack 5** with **Module Federation (remote)**
- 💨 **Tailwind CSS** for styling
- ⚙️ **Mock async data source** for development

---

## 📁 Folder Structure

```bash
products-fragment/
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
PORT=3003
```

## 🚀 Getting Started

1. Install dependencies:

```bash
cd products-fragment
yarn install
```

2. Create a .env file (or copy from .env.example) and ensure remote URLs are correct.

3. Run the development server:

```bash
yarn start
```

App will start at: http://localhost:3003

## 📄 License

This project is licensed under the MIT License.
