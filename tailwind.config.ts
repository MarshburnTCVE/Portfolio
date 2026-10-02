import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F3",
        surface: "#FFFFFF",
        ink: "#16181D",
        muted: "#5B5F6A",
        line: "#E4E2DC",
        signal: "#2B4FFF",
        "signal-dim": "#E8ECFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
        measure: "42rem",
      },
    },
  },
  plugins: [],
};

export default config;
