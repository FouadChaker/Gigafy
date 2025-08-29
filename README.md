# Gigafy Shadcn Website

This project is a Next.js website scaffolded with TypeScript, Tailwind CSS, and shadcn/ui components.

## Setup

1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Run the development server:**
   ```powershell
   npm run dev
   ```
3. **Open your browser:**
   Visit `http://localhost:3000` to view the site.

## Usage

- All source code is in the `src` directory.
- UI components from shadcn/ui can be added using:
  ```powershell
  npx shadcn@latest add <component>
  ```
  Example:
  ```powershell
  npx shadcn@latest add button
  ```
- Tailwind CSS is configured for rapid styling.

## Customization

- **Add new shadcn/ui components:**
  Use the CLI as shown above.
- **Modify theme colors:**
  Edit CSS variables in `src/app/globals.css`.
- **Update Tailwind config:**
  Edit `tailwind.config.js` for custom settings.
- **Change import aliases:**
  Update `tsconfig.json` paths if needed.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)

---

Feel free to customize and extend the site as needed!
