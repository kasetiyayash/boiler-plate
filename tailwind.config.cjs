module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#fcf3ea",
      },
      fontFamily: {
        dm: ["DM Sans"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
