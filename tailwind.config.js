/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonColor: "#F2707C",
        purpleBg: "#8E7CB5",
        pinkBg: "#FFE4E7",
        lightblueBg: "#f7f3ff",
      },
    },
  },
  plugins: [],
};
