export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enables dark mode using a class
  theme: {
    extend: {
      colors: {
        primary: "#12900d",
        textColor: {
          light: "#333",
          dark: "#12900d",
        },
        backgroundColor: {
          light: "#f8f8f8",
          dark: "#121212",
        },
        accent: {
          light: "#baeaad",
          dark: "#121212",
        },
      },
    },
  },
  plugins: ['tailwindcss-scrollbar'],
};

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: "#FF6B00",
//         secondary: "#FF8534",
//         highlight: "#FFA066",
//         textColor: {
//           light: "#333",
//           dark: "#FF6B00",
//         },
//         backgroundColor: {
//           light: "#f8f8f8",
//           dark: "#121212",
//         },
//         accent: {
//           light: "#FFE0CC",
//           dark: "#1A1A1A",
//         },
//       },
//     },
//   },
//   plugins: ['tailwindcss-scrollbar'],
// };
