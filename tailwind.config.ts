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

            secondary: "#0c315f",
            "secondary-content": "#7cafee",
            "secondary-dark": "#061a32",
            "secondary-light": "#12488c",

            background: "#eff1ef",
            foreground: "#fbfbfb",
            border: "#dde2df",

            copy: "#232926",
            "copy-light": "#5e6e64",
            "copy-lighter": "#84958a",

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
