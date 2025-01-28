import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "1rem",
      },
      colors: {
        primary: {
          black: "#170e01",
          darkBlue: "#2f4858",
          yellow: "#f8be61",
          grey: "#dfe0df",
          error: "#ff75bc",
          success: "#00c497",
        },
      },
      fontFamily: {
        grotesk: [
          "var(--space-grotesk)",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  // plugins: [
  //   require("tailwindcss-animate"),
  //   require("@tailwindcss/typography"),
  // ],
};

export default config;
