/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12900d",
        textColor: {
          light: "#333",
          dark: "#f8f8f8",
        },
        backgroundColor: {
          light: "#bad2ba",
          dark: "#121212",
        },
        accent: {
          light: "#baeaad",
          dark: "#1a3d1b",
        },
      },
    },
  },
  plugins: [],
};
