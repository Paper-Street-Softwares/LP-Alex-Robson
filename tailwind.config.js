/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      // Principais

      primary: "#0C0A0A",
      buttonColor: "#0C0A0A",
      minititleDark: "#0C0A0A", //bg minitag de seções claras
      minititle: "#0C0A0A", //bg minitag de seções escuras

      secondary: "#000000",

      // Fundos de Seção

      bgSectionLight: "#FFFFFF",
      bgSectionDark: "#990000",
      bgSectionOpacityLight: "#F7F7F7",
      bgFixedLight: "#E8E8E8",
      bgSectionOpacityDark: "#111111",
      bgFixedDark: "#181818",
      quinary: "#F6F6F6 ",

      // Degradê da Lpv

      lpvHeroGradientTop: "#000",
      lpvHeroGradientBot: "#000",

      // Botões e Links

      links: "#0189BB",
      iconButtons: "#fff",
      labelButtons: "#fff",
      minititleLightLabel: "#fff", //label das minitag de seções claras
      minititleDarkLabel: "#fff", //label minitag de seções escuras

      // Sombras

      shadowHero: "#000000",
      shadowFeatures: "#000000",
      shadowAbouts: "#000000",
      shadowSteps: "#000000",
      shadowMaps: "#000000",
      shadowBlogs: "#000000",

      // Outros

      lighter: "#FFFFFF",
      darker: "#000000",
    },
    boxShadow: {
      "custom-opacity": "-20px 20px 0px", // 30% de opacidade
      "custom-opacityButton": "-5px 5px 0px", // 30% de opacidade no Botão
    },
    fontFamily: {
      mainFont: ["Merriweather", "sans-serif"],
      // mainFont: ["Poppins", "sans-serif"],
      secondFont: ["Roboto", "sans-serif"],
      league: ["League Gothic"],
      barlow: ["Barlow Condensed"],
    },
    fontSize: {
      paragraph1: "0.625rem",
      paragraph2: "0.75rem",
      paragraph3: "0.875rem",
      paragraph4: "1rem",
      paragraph5: "1.125rem",
      title1: "1.25rem",
      title2: "1.375rem",
      title3: "1.5rem",
      title4: "1.875rem",
      title5: "2.25rem",
      title6: "3rem",
      title7: "3.5rem", // 55px
    },
    spacing: {
      112: "28rem",
      120: "30rem",
      128: "32rem",
    },
    screens: {
      phone1: "320px",
      phone2: "375px",
      phone3: "425px",
      tablet1: "640px",
      tablet2: "768px",
      desktop1: "1024px",
      desktop2: "1280px",
      desktop3: "1440px",
    },
    keyframes: {
      slideDown: {
        "0%": { transform: "translateY(-5%)", opacity: "0" },
        "100%": { transform: "translateY(0%)", opacity: "1" },
      },
      slideUp: {
        "0%": { transform: "translateY(0%)", opacity: "1" },
        "100%": { transform: "translateY(-5%)", opacity: "0" },
      },
    },
    animation: {
      "slide-down": "slideDown 1s ease",
      "slide-up": "slideUp 1s ease",
    },
  },
};
// export const plugins = [require("tailwindcss-gradients")];
