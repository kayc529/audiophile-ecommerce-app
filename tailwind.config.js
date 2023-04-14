/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '968px',
      xl: '1100px',
    },
    extend: {
      colors: {
        darkOrange: '#D87D4A',
        mainOrange: '#FBAF85',
        backgroundBlack: '#191919',
        mainBlack: '#101010',
        ashBlack: '#4C4C4C',
        mainGrey: '#F1F1F1',
        lightGrey: '#FAFAFA',
        errorRed: '#CD2C2C',
        transparentWhite: '#979797',
        modalShade: 'rgba(0,0,0,0.3)',
      },
      fontSize: {
        h1: '56px',
        h2: '40px',
        h3: '32px',
        h4: '28px',
        h5: '24px',
        h6: '18px',
        lg: '15px',
        md: '14px',
        sm: '13px',
        xxs: '12px',
        xs: '11px',
      },
      lineHeight: {
        h1: '58px',
        h2: '44px',
        h3: '36px',
        h4: '38px',
        h5: '33px',
        h6: '24px',
        lg: '25px',
        md: '19px',
        sm: '13px',
      },
      letterSpacing: {
        h1: '2px',
        h2: '1.5px',
        h3: '1.15px',
        h4: '2px',
        h5: '1.7px',
        h6: '1.3px',
        md: '10px',
        sm: '1px',
      },
      padding: {
        25: '100px',
        30: '120px',
        50: '200px',
        100: '400px',
        footerSpace: '200px',
        footerSpaceTablet: '96px',
        footerSpaceMobile: '120px',
      },
      maxWidth: {
        mainContent: '1100px',
        mainContentTablet: '768px',
        mainContentMobile: '327px',
      },
      spacing: {
        30: '120px',
        40: '160px',
        50: '200px',
      },
      width: {
        30: '120px',
        100: '400px',
        button: '160px',
        arrow: '5px',
        textField: '309px',
        counter: '96px',
        mainContent: '1100px',
        mainContentTablet: '768px',
        mainContentMobile: '327px',
        footerText: '540px',
        productCategory: '350px',
        cartModal: '377px',
      },
      height: {
        button: '48px',
        arrow: '10px',
        textField: '56px',
        counter: '32px',
        header: '97px',
        headerTablet: '90px',
        footer: '365px',
        hero: '632px',
        heroMobile: '510px',
        productCategory: '284px',
        productCategoryTablet: '218px',
      },
      zIndex: {
        oneLevelUp: '20',
        modalBg: '30',
        modalDialog: '40',
      },
    },
  },
  plugins: [],
};
