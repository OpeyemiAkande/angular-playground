/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          highlight: "#f6f5ff",
          100: "#DDD6FF",
          200: "#BBADFF",
          300: "#9884FF",
          400: "#7C66FF",
          500: "#4E33FF",
          600: "#3A25DB",
          700: "#2A19B7",
          800: "#1C1093",
          900: "#12097A",
        },
        success: {
          100: "#F5FDCC",
          200: "#E9FC9B",
          300: "#D6F668",
          400: "#C2ED42",
          500: "#A5E209",
          600: "#88C206",
          700: "#6DA204",
          800: "#538302",
          900: "#426C01",
        },
        info: {
          100: "#D4FDF7",
          200: "#AAFCF5",
          300: "#7FF8F7",
          400: "#5EE8F2",
          500: "#2CCEEA",
          600: "#20A3C9",
          700: "#167CA8",
          800: "#0E5987",
          900: "#084070",
        },
        warning: {
          100: "#FFF5D7",
          200: "#FFE9B0",
          300: "#FFDA88",
          400: "#FFCB6B",
          500: "#FFB33A",
          600: "#DB902A",
          700: "#B76F1D",
          800: "#935212",
          900: "#7A3D0B",
        },
        danger: {
          100: "#FFE5D7",
          200: "#FFC5AF",
          300: "#FF9D87",
          400: "#FF7869",
          500: "#FF3B38",
          600: "#DB2835",
          700: "#B71C34",
          800: "#931131",
          900: "#7A0A2F",
        },
      },
      boxShadow: {
        sm: "1px 2px 10px 1px rgba(0,0,0,0.06);",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1280px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "640px" },
        // => @media (max-width: 639px) { ... }

        mb: { max: "433px" },
      },
    },
  },
  plugins: [],
};
