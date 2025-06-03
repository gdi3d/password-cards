# Password Cards Generator

This app was created to help older adults who find password managers too complex. Many still rely on notebooks to store passwords, which often leads to weak or reused ones.

This tool offers a safer and simple alternative: it generates 4 strong passwords per card.

Using it is easy. Whenever a new password is needed, move to the next card in the list. Choose one of the four password options, mark the one you choose, or cross out the others. If the password is too long, just scratch the extra characters — for example, if you only need 8 characters and the password has 16, cross out the last 8.

If you have a parent or grandparent who struggles with password security, print out a few pages and take a moment to explain how to use them. It can make a big difference.

[https://gdi3d.github.io/password-cards/](https://gdi3d.github.io/password-cards/)

## ✨ Features

- Generate between 10 and 30 password entries per page
- Four types of passwords:
  - Numbers
  - Letters and numbers
  - Letters, numbers and symbols
  - Full: Letters, numbers, symbols, and special characters
- Adjustable password length (8–32 characters)
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

   ➜  Local:   http://localhost:5173/password-cards/
   ```

5. Open that link in your browser. You're good to go!

---

### 🏗️ To Build for Production

This will generate a folder you can host anywhere (e.g. GitHub Pages, Netlify):

```bash
npm run build
```

It creates a folder called `docs/` with the static files.

---

## 🧾 Notes

- You can **print to paper** **"Save as PDF"** using your browser’s print dialog.
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
