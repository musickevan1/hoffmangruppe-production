
# Hoffmangruppe Promotions Website

The official website for Hoffmangruppe Promotions — a sleek, single-page marketing site built with React, TypeScript, Vite, Tailwind CSS, and EmailJS integration for direct inquiries and PDF-based engagement.

🌐 **Live Site**: [www.hoffmangruppe.com](https://www.hoffmangruppe.com)

## ✨ Features

- Clean, professional landing page design
- Fully responsive layout for mobile and desktop
- Interactive sections with animations and transitions
- PDF viewer integration for brochures and flyers
- Email contact form using EmailJS (credentials handled via `.env`)
- Fast performance powered by Vite
- Continuous deployment via Vercel

## 🛠️ Technologies Used

- [React (TypeScript)](https://reactjs.org/)
- [Vite](https://vitejs.dev/) – Lightning-fast frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) – Serverless contact form integration
- [PDF.js](https://mozilla.github.io/pdf.js/) – PDF rendering

## 📁 Full Project Structure

```
hoffmangruppe-production/
├── .env.example
├── .gitignore
├── .nvmrc
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
├── public/
│   └── favicon.ico
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── assets/
│   │   └── hoffman-logo.png
│   ├── components/
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   ├── Showcase.tsx
│   │   └── PdfViewer.tsx
│   └── styles/
│       └── index.css
└── .git_disabled/       # Internal use
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
git clone https://github.com/musickevan1/hoffmangruppe-production.git
cd hoffmangruppe-production
npm install
```

### Running Locally
```bash
npm run dev
```
Visit: `http://localhost:5173` (or `5175` depending on setup)

### Building for Production
```bash
npm run build
```

## 🌍 Deployment
The project is automatically deployed to [Vercel](https://vercel.com/) when changes are pushed to the `main` branch.

## 🔒 Security Note

The `.env` file is excluded from version control. Be sure to keep your real EmailJS credentials private. Use `.env.example` as a reference.

## 🧠 Topics & Tags
```
vite tailwindcss emailjs pdfjs react typescript portfolio landing-page responsive-design client-project contact-form
```

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
[MIT](https://choosealicense.com/licenses/mit/)

## 👤 Author
Developed by [Evan Musick](https://www.linkedin.com/in/evan-musick-49ba15187)  
✍️ [Medium](https://medium.com/@evanmusick.dev) • 💻 [GitHub](https://github.com/musickevan1)

---

> Designed to showcase a modern, minimalistic brand presence with zero backend maintenance required.
