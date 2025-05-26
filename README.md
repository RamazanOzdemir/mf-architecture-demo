# MF Architecture Demo

> 🧩 A simple **Microfrontend Architecture** demo built with **React**, **TypeScript**, **Webpack 5**, and **Module Federation**.

This project demonstrates how to build a modular frontend by composing multiple independent React applications that work together seamlessly via **Module Federation**.

---

## 🛠️ Tech Stack

- ⚛️ **React** – For building dynamic UIs
- 🟦 **TypeScript** – Static typing for scalable development
- 📦 **Webpack 5** – Bundler with native Module Federation support
- 🔗 **Module Federation** – Share and consume modules across apps
- 💨 **Tailwind CSS** – Utility-first CSS for rapid styling
- 🧱 **shadcn/ui** _(or Ant Design)_ – For reusable component libraries _(TBD)_

---

## 📁 Project Structure

```bash
mf-architecture-demo/
├── shell/           # Main container application (host)
├── dashboard-app/   # Microfrontend for dashboard features
├── user-app/        # Microfrontend for user-related features
├── product-app/     # Microfrontend for product-related features


```

## 🚀 Getting Started

To run the project locally:

```bash
git clone https://github.com/ramazanozdemir/mf-architecture-demo.git
cd mf-architecture-demo/
```

Each microfrontend has its own development server. Run them individually:

```bash
# Example for running the shell
cd shell
npm install
npm run dev
```

Repeat similar steps for dashboard-app/, user-app/, etc.

## 🧰 Create a New Microfrontend Fragment

Use the included script to scaffold a new microfrontend from a predefined boilerplate.

### 🔧 Usage

1. Make the script executable (only once):
   ```bash
   chmod +x create-fragment.sh
   ```
2. Run the script to create a new fragment:

   ```bash
   ./create-fragment.sh
   ```

3. Provide the required inputs when prompted:

   - Fragment name (e.g., `user-profile`)
   - Module Federation scope (e.g., `userProfile`)
   - Development port (e.g., `3001`)

   After providing the inputs, a new fragment will be created with the given configuration.

### 📦 Output Example

The script will create:

```bash
user-profile/
├── src/
├── webpack.config.js
├── package.json        # with name set to "user-profile"
├── devServer port: 3001
```

## 🎯 Project Goals

- ✅ Practice Microfrontend architecture using React and Webpack 5
- ✅ Understand Module Federation and how to share modules dynamically
- ✅ Build a dashboard-style container that loads features from remote apps
- ✅ Ensure each module is independently deployable and scalable

## 📄 License

This project is licensed under the MIT License.

## 🙌 Contributing

PRs and ideas are welcome! For larger changes, please open an issue first to discuss what you’d like to add.
