# 🏠 Shell App

> The **Shell** is the main container application in the Microfrontend architecture. It hosts and integrates remote apps dynamically via **Webpack Module Federation** and includes the global layout, such as the **sidebar navigation**.

---

## 🧩 What is the Shell?

The Shell is responsible for:

- Rendering the **main layout** (e.g., sidebar, header)
- Hosting and loading **remote microfrontends** dynamically at runtime
- Managing global dependencies (e.g., routing, styling)
- Acting as the single entry point for users

---

## 🚧 Tech Highlights

- ⚛️ **React** + **TypeScript**
- 📦 **Webpack 5** with **Module Federation (host)**
- 💨 **Tailwind CSS** for styling
- 📚 **React Router DOM** for page navigation
- 🧱 Optionally uses `shadcn/ui` components

---

## 📁 Folder Structure

```bash
shell/
├── src/
│   ├── app.tsx           # Main React app with routing
│   ├── bootstrap.tsx     # App initializer
│   └── index.tsx         # Entry point
├── public/
├── webpack.config.js     # Module Federation setup (host)
├── .env                  # Remote app URLs defined here
└── package.json
```

## 🔧 Remote Configuration via .env

Remote fragment URLs are managed using environment variables defined in a .env file:

### ✅ Example .env file

```bash
PORT=3000

# URLs for the remote fragments (points to their remoteEntry.js files)
DASHBOARD_FRAGMENT_URL=http://localhost:3001/remoteEntry.js
USERS_FRAGMENT_URL=http://localhost:3002/remoteEntry.js
PRODUCTS_FRAGMENT_URL=http://localhost:3003/remoteEntry.js
```

## 🚀 Getting Started

1. Install dependencies:

```bash
cd shell
yarn install
```

2. Create a .env file (or copy from .env.example) and ensure remote URLs are correct.

3. Run the development server:

```bash
yarn start
```

App will start at: http://localhost:3000

- Make sure remote apps (e.g., dashboard-app, user-app, product-app) are also running and accessible.

## 🧭 Sidebar Navigation

The Shell includes a sidebar component that provides navigation between all loaded microfrontends. Each route is dynamically rendered inside the main layout area.

## 📄 License

This project is licensed under the MIT License.
