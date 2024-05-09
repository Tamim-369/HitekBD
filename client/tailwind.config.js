/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "475px",
      "2xs": "330px",
      xsd: "420px",
      sm: "640px",
      md: "769px",
      smd: "870px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
