# 👥 Users App

> The **Users App** is a standalone microfrontend responsible for displaying a list of users fetched via **React Query**, with navigation to individual user detail pages.

This module is integrated into the main host (e.g., `shell`) using **Webpack Module Federation**, allowing it to be independently developed and deployed.

---

## 👤 What is the Users App?

The Users App includes:

- 📋 A **table** that lists mock users
- 🔍 A **detail view** that shows more information for a selected user
- 🔄 **React Query** to simulate async data fetching
- 🧩 Exposed components via Module Federation

---

## 🚧 Tech Highlights

- ⚛️ **React** + **TypeScript**
- 🔄 **React Query** – for efficient and cached data fetching
- 📦 **Webpack 5** with **Module Federation (remote)**
- 💨 **Tailwind CSS** for styling
- 📚 **React Router DOM** for internal navigation

---

## 📁 Folder Structure

```bash
users-fragment/
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
PORT=3002
```

## 🚀 Getting Started

1. Install dependencies:

```bash
cd users-fragment
yarn install
```

2. Create a .env file (or copy from .env.example) and ensure remote URLs are correct.

3. Run the development server:

```bash
yarn start
```

App will start at: http://localhost:3002

## 🧭 Routing

The app uses internal routing for:

- / – Main list page
- /:id – Detail page for a specific user

When loaded inside the shell, routing is preserved through the host’s router or handled locally depending on setup.

- /users – Main list page
- /users/:id – Detail page for a specific user

## 📄 License

This project is licensed under the MIT License.
