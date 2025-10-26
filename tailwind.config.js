/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3456FF",
        secondary: "rgba(52, 86, 255, 0.75)",
        gray: "#F8F8FA",
        green1: "#4FCB8D",
        green2: "#27AE60",
        pri1: "#070928",
        pri2: "rgba(7, 9, 40, 0.75)",
        pri3: "rgba(7, 9, 40, 0.5)",
        red: "red",
        transparent: "transparent",
      },
      fontSize: {
        ro12reg: [
          "12px",
          {
            lineHeight: "110%",
            fontWeight: 400,
          },
        ],
        ro12med: [
          "12px",
          {
            lineHeight: "110%",
            fontWeight: 500,
          },
        ],
        ro14reg: [
          "14px",
          {
            lineHeight: "110%",
            fontWeight: 400,
          },
        ],
        ro14med: [
          "14px",
          {
            lineHeight: "110%",
            fontWeight: 500,
          },
        ],
        ro16reg: [
          "16px",
          {
            lineHeight: "110%",
            fontWeight: 400,
          },
        ],
        ro16med: [
          "16px",
          {
            lineHeight: "110%",
            fontWeight: 500,
          },
        ],
        ro18bol: [
          "18px",
          {
            lineHeight: "110%",
            fontWeight: 700,
          },
        ],
        ro24bol: [
          "24px",
          {
            lineHeight: "110%",
            fontWeight: 700,
          },
        ],

        ro30bol: [
          "30px",
          {
            lineHeight: "110%",
            fontWeight: 700,
          },
        ],
        op12reg: [
          "12px",
          {
            lineHeight: "110%",
            fontWeight: 400,
          },
        ],
      },
      maxWidth: {
        widthApp: "1260px",
      },
    },
  },
  plugins: [],
};
