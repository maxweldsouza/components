const darkGrey5: string = 'hsl(0, 0%, 5%)';
const darkGrey10: string = 'hsl(0, 0%, 10%)';
const darkGrey20: string = 'hsl(0, 0%, 20%)';
const lightGrey70: string = 'hsl(0, 0%, 70%)';
const lightGrey80: string = 'hsl(0, 0%, 80%)';
const lightGrey90: string = 'hsl(0, 0%, 90%)';
const lightGrey95: string = 'hsl(0, 0%, 95%)';
const blue: string = '#005083';
const lightBlue: string = '#00609f';
const red: string = '#9d1e1e';
const greenGlow: string = 'rgba(111, 255, 242, 0.4)';
const white: string = 'white';
const black: string = 'black';

type ColorType = {
  button: string;
  buttonHover: string;
  buttonBackground: string;
  background: string;
  background2: string;
  text: string;
  text2: string;
};

type ThemeColors = {
  colors: ColorType;
};

const light: ThemeColors = {
  colors: {
    button: blue,
    buttonHover: lightBlue,
    buttonBackground: blue,
    background: lightGrey95,
    background2: white,
    text: darkGrey10,
    text2: darkGrey20,
  },
};
const dark: ThemeColors = {
  colors: {
    button: blue,
    buttonHover: lightBlue,
    buttonBackground: blue,
    background: darkGrey5,
    background2: darkGrey10,
    text: white,
    text2: lightGrey70,
  },
};

type ThemeStructure = {
  zIndex: {
    modal: number;
    backdrop: number;
  };
  shadows: {
    bottomSheet: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  border: {
    md: string;
  };
  fontSize: {
    md: string;
  };
};

const theme: ThemeStructure = {
  zIndex: {
    modal: 20,
    backdrop: 10,
  },
  shadows: {
    bottomSheet: '0px -20px 180px rgba(255, 248, 111, 0.4)',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '48px',
  },
  border: {
    md: 'solid 2px #3a3a3a',
  },
  fontSize: {
    md: '16px',
  },
};

type Theme = ThemeStructure & ThemeColors;

export interface IThemeProps {
  theme: Theme;
}

export const getTheme = (mode): Theme => {
  const colorTheme = mode === 'dark' ? dark : light;
  return {
    ...colorTheme,
    ...theme,
  };
};

// TODO remove
export default theme;
