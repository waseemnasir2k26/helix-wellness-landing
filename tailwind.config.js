/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        bone: "#F7F4EE",
        sage: "#8FB89A",
        gold: "#D4B895",
        slate2: "#1A2236",
        mist: "#E9E3D6",
      },
      fontFamily: {
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      boxShadow: {
        soft: "0 30px 60px -20px rgba(11,18,32,0.25)",
      },
    },
  },
  plugins: [],
};
