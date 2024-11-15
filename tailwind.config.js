import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "0 2rem",
      center: true,
    },
    extend: {
      backgroundImage: {
        'check-outline': `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='${colors.blue['500']}' style='width:24px;height:24px;};'><path stroke-linecap='round' stroke-linejoin='round' d='m4.5 12.75 6 6 9-13.5' /></svg>`
              )}")`,
        'check-filled': `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='${colors.gray['100']}' style='width:24px;height:24px; background-color:${colors.blue['500']};'><path stroke-linecap='round' stroke-linejoin='round' d='m4.5 12.75 6 6 9-13.5' /></svg>`
              )}")`
      },
      fontFamily: {
        title: defaultTheme.fontFamily.sans,
        body: defaultTheme.fontFamily.sans,
      },
      colors: {
        // TODO: rename to base
        background: {
          DEFAULT: colors.gray[100],
          2: colors.gray[200],
          3: colors.gray[300],
        },

        // TODO: rename to foreground
        text: {
          DEFAULT: colors.gray[800],
          2: colors.gray[900],
          3: colors.gray[950],
          subtle: colors.gray[700],
        },

        border: {
          DEFAULT: colors.slate[300],
          2: colors.slate[400],
          3: colors.slate[500],
          subtle: colors.slate[400],
        },
 
        accent: {
          DEFAULT: colors.blue[500],
          2: colors.blue[600],
          3: colors.blue[700],
          foreground: colors.neutral[100],
        },

        "focus-ring": colors.blue[500],
      },
    },
  },
  plugins: [],
};
