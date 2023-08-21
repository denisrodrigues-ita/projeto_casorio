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
        "aqua-deep": "#004c45",// background
        "surfie-green": "#118077",// text
        "smalt-blue": "#52948b", // link
        "submarine": "#b9c2c8", // border
      },
    },
  },
  plugins: [],
};
export default config;
