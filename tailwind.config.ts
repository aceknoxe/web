import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      'green-200': '5px 5px rgba(203, 215, 193, 0.4), 10px 10px rgba(203, 215, 193, 0.3),15px 15px rgba(203, 215, 193, 0.2), 20px 20px rgba(203, 215, 193, 0.1), 25px 25px rgba(203, 215, 193, 0.05)',
    },
  },
  plugins: [],
};
export default config;
