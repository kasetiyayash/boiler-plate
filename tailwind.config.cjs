module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#fcf3ea",
      },
    },
  },
  plugins: [require("daisyui")],
  daisy: {
    // theme: [""],
  },
};
