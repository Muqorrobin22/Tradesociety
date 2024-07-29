/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient-hero": " linear-gradient( to bottom, #215A99, #4E9AE2 ), url(/images/TS_Graphic_Element/TS_Graphic_Element-08.jpg) ",
        "linear-gradient-faq": "linear-gradient( to right, #4E9AE2, #215A99 )"
      },
      colors: {
        "primary-color": "#33568B",
        "primary-light-color": "#E3EDFB",
        "primary-font-color": "#15345A",
        "secondary-gold-color": "#D1B052",
        "secondary-green-color": "#389181",
        "font-description-color": "#888888",
      },
      fontSize: {
        "heading-1": [
          "46px",
          {
            lineHeight: "55px",
            fontWeight: "400",
            // letterSpacing: "1px",
          },
        ],
        "heading-3": [
          "42px",
          {
            lineHeight: "50px",
            fontWeight: "400",
            // letterSpacing: "1px",
          },
        ],
        "heading-4": [
          "40px",
          {
            lineHeight: "48px",
            fontWeight: "400",
            // letterSpacing: "1px",
          },
        ],
        "heading-6": [
          "32px",
          {
            lineHeight: "38px",
            fontWeight: "400",
            // letterSpacing: "1px",
          },
        ],
        "heading-8": [
          "24px",
          {
            lineHeight: "22px",
            fontWeight: "400",
            // letterSpacing: "1px",
          },
        ],
        "LG/LG-Normal": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "300",
            // letterSpacing: "1px",
          },
        ],
        "LG/LG-Strong": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",
            // letterSpacing: "1px",
          },
        ],
        "XL/XL-Normal": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "300",
            // letterSpacing: "1px",
          },
        ],
        "XL/XL-Strong": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "500",
            // letterSpacing: "1px",
          },
        ],
        "Base/Base-Strong": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "500",
            // letterSpacing: "1px",
          },
        ],
        "Base/Base-Normal": [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "300",
            // letterSpacing: "1px",
          },
        ],
        "SM/SM-Normal": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            // letterSpacing: "1px",
          },
        ],"SM/SM-Strong": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            // letterSpacing: "1px",
          },
        ],
      },
      fontFamily: {
        "roboto": ['var(--font-roboto-mono)'],
      }
    },
  },
  plugins: [],
};
