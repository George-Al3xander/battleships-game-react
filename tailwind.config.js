import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Didact Gothic", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#2596be",
                secondary: "#fb0754",
                accent: "#f5f5f5",
            },
        },
    },
    plugins: [],
};
