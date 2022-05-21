module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chair: "url('./src/assets/images/bg.png')",
      },
    },
  },
  daisyui: {
    // themes: [],
    themes: [
      {
        mytheme: {
          primary: "#EE2B47",
          secondary: "#FF0000",
          accent: "#252525",
          neutral: "#FBF9FA",
          "base-100": "#FBF9FA",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
