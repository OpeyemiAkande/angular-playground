/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "t-blue-1": "#7D97F4",
        "t-blue-2": "#5E88F3",
        "t-blue-3": "#5ECCF3",
        "t-black-1": "#222222",
        "t-black-2": "#27384E",
        "t-black-3": "#001540",
        "t-yellow-1": "#FAA307",
        "t-tint-1": "#F4F6FD",
        "t-tint-2": "#EFFAFE",
        "t-tint-3": "#D2DFFF",
        "t-tint-4": "#F4F7FE",
        "t-tint-5": "#FAFBFF",
        "t-grad-col-1": "rgba(250, 251, 251, 0)",
        "t-grad-col-2": "rgba(125, 151, 244, 0.08)",
        "t-grad-col-3": "rgba(255, 255, 255, 0.3)",
      },
      fontFamily: {
        "headline-1": ["GTWalsheimi Pro Bold", "sans-serif"],
        "headline-2": ["GTWalsheimi Pro Medium", "sans-serif"],
        "body-1": ["Proxima Nova Regular", "sans-serif"],
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
