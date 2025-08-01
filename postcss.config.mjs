const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Configuration spécifique pour Tailwind CSS 4
      content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    },
  },
};

export default config;
