# MF Architecture Demo

> 🧩 A simple microfrontend architecture demo built with **React**, **TypeScript**, **Webpack 5**, and **Module Federation**.

This project shows how to use Microfrontend architecture by splitting a frontend into small, independent React apps that work together.

---

## 🛠️ Tech Stack

- ⚛️ **React** – for building UI
- 🟦 **TypeScript** – for type-safe development
- 📦 **Webpack 5** – for module bundling
- 🔗 **Module Federation** – for sharing code between apps
- 💨 **Tailwind CSS** – for fast, utility-based styling
- 🧱 **shadcn/ui** or **Ant Design** – for reusable UI components (TBD)

---

## 🧱 Project Structure

```bash
mf-architecture-demo/
├── shell/          # The main container app
├── user-app/       # Example microfrontend (user module)
├── product-app/    # Another microfrontend (product module)


```

## 🚀 Getting Started

This README will be updated step by step during development.

```bash
git clone https://github.com/ramazanozdemir/mf-architecture-demo.git
cd mf-architecture-demo/
```

## 📦 Fragment Boilerplate Generator

This is a simple script to generate a new fragment from a predefined boilerplate for micro-frontend.

### How to Use

1. Make the script executable (only once):
   ```bash
   chmod +x create-fragment.sh
   ```
2. Run the script to create a new fragment:

   ```bash
   ./create-fragment.sh
   ```

   The script will ask for:

   - Fragment name (e.g., `user-profile`)
   - Module Federation scope (e.g., `userProfile`)
   - Development port (e.g., `3001`)

   After providing the inputs, a new fragment will be created with the given configuration.

### Example

If you enter:

- Fragment name: `user-profile`
- Module Federation scope: `userProfile`
- Development port: `3001`

It will create:

- A new folder `user-profile/`
- The `package.json` will be updated with the name `user-profile` and the scope `myorg`
- The port will be set to `3001` in the configuration

## 📌 Goals

- Learn and practice Microfrontend architecture.

- Use Webpack Module Federation to connect multiple React apps.

- Build a dashboard-like project that loads features from independent apps.

## License

This project is licensed under the MIT License.
