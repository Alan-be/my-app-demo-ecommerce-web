import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#0c5f2c",
            "primary-content": "#7ceea8",
            "primary-dark": "#063217",
            "primary-light": "#128c41",

            secondary: "#0c5f55",
            "secondary-content": "#7ceee1",
            "secondary-dark": "#06322c",
            "secondary-light": "#128c7e",

            background: "#181b19",
            foreground: "#242826",
            border: "#3d433f",

            copy: "#fbfbfb",
            "copy-light": "#d7dbd8",
            "copy-lighter": "#a1aaa5",

            success: "#0c5f0c",
            warning: "#5f5f0c",
            error: "#5f0c0c",

            "success-content": "#7cee7c",
            "warning-content": "#eeee7c",
            "error-content": "#ee7c7c"
        },
    }
},
  plugins: [],
} satisfies Config;
