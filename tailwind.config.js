module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        red: "hsl(0, 78%, 62%)",
        cyan: "hsl(180, 62%, 55%)",
        orange: "hsl(34, 97%, 64%)",
        blue: "hsl(212, 86%, 64%)",
        "blue-very-dark": "hsl(234, 12%, 34%)",
        "blue-grayish": "hsl(229, 6%, 66%)",
        "gray-very-light": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif;",
      },
      fontSize: {
        normal: "15px",
      },
    },
  },
  plugins: [],
};
