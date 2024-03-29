/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-45":
          "linear-gradient(45deg, #09090b , rgba(255, 255, 255, 0.03))",
      }),
      colors: {
        "link-gray": "hsl(0 0% 98%/0.6)",
        "link-gray-hover": "hsl(0 0% 98%/0.8)",
      },
      gridTemplateColumns: {
        "2fr-1fr": "2fr 1fr",
      },
    },
  },
  plugins: [],
};
