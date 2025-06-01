# Password Card Generator

This is a simple, print-friendly web app designed to generate "password cards" for users who prefer to write their passwords on paper instead of using a password manager.

## ✨ Features

- Generate between 10 and 30 password entries per page
- Three types of passwords:
  - Letters and numbers
  - Letters, numbers and symbols
  - Full: Letters, numbers, symbols, and special characters
- Adjustable password length (8–32 characters)
- Auto-updates the list on changes
- Option to print or export to PDF
- Does **not** save any data — fully local and secure for offline use

---

## 📦 How to Install & Run (for Non-Developers)

These instructions are beginner-friendly and assume you're using a desktop computer with internet access.

### ✅ Prerequisites

1. **Install Node.js**  
   - Go to [https://nodejs.org/](https://nodejs.org/) and download the **LTS version**
   - Install it using the default settings

2. **Download This Project**
   - Unzip the `password-book-generator.zip` file you got

---

### ▶️ Running the App

1. Open a terminal or command prompt
2. Navigate to the unzipped folder, e.g.:
   ```bash
   cd path/to/password-book-generator
   ```

3. Run the following commands:

   ```bash
   npm install     # Installs required packages
   npm run dev     # Starts the app
   ```

4. You’ll see an address like this:
   ```
   VITE vX.X.X  ready in Xs

   ➜  Local:   http://localhost:5173/
   ```

5. Open that link in your browser. You're good to go!

---

### 🏗️ To Build for Production

This will generate a folder you can host anywhere (e.g. GitHub Pages, Netlify):

```bash
npm run build
```

It creates a folder called `dist/` with the static files.

---

## 🧾 Notes

- You can **print to paper** or **"Save as PDF"** using your browser’s print dialog.
- Your data is **never stored** — this app is fully client-side.
- Made with ❤️ using React + Tailwind CSS.
- 80% ChatGTP, 20% Human

---

## 🛠️ Developer Quickstart

```bash
npm install
npm run dev
```

Built with [Vite](https://vitejs.dev), [React](https://reactjs.org), and [Tailwind CSS](https://tailwindcss.com).
