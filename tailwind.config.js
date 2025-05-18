/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: "class", // ✅ ให้เปลี่ยน theme ด้วย class (ใช้กับ dark/light toggle ได้)
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"], // ✅ เพิ่ม font สวยๆ ได้
        },
        colors: {
          primary: "#4f46e5", // ✅ เพิ่มสีหลักใช้ในปุ่มหรือลิงก์
          secondary: "#facc15",
        },
      },
    },
    plugins: [],
  }
  