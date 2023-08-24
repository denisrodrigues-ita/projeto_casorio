import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#f7f3d5",
        secondary: "#ffdabf",
        tertiary: "##fa9b9b",
        quaternary: "#e88087",
        quinary: "#635063",
      },
    },
  },
  plugins: [],
};
export default config;
