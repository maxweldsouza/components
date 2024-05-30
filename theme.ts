const grey5: string = 'hsl(0, 0%, 5%)';
const grey10: string = 'hsl(0, 0%, 10%)';
const grey20: string = 'hsl(0, 0%, 20%)';
const grey30: string = 'hsl(0, 0%, 30%)';
const grey40: string = 'hsl(0, 0%, 40%)';
const grey50: string = 'hsl(0, 0%, 50%)';
const grey60: string = 'hsl(0, 0%, 60%)';
const grey70: string = 'hsl(0, 0%, 70%)';
const grey80: string = 'hsl(0, 0%, 80%)';
const grey90: string = 'hsl(0, 0%, 90%)';
const grey95: string = 'hsl(0, 0%, 95%)';
const blue: string = '#1c6493';
const lightBlue: string = '#408cbd';
const red: string = '#9d1e1e';
const greenGlow: string = 'rgba(111,178,255,0.4)';
const shadow: string = 'hsla(0,0%,0%,0.3)';
// const shadow: string = 'rgba(0, 0, 0, 0.4)';
const white: string = 'hsl(0,0%,100%)';
const black: string = 'black';

type ColorType = {
  button: string;
  buttonHover: string;
  buttonBackground: string;
  background: string;
  background2: string;
  background3: string;
  text: string;
  text2: string;
  revText: string;
  error: string;
};

type ThemeColors = {
  colors: ColorType;
  shadows: {
    bottomSheet: string;
    lg: string;
  };
  border: {
    sm: string;
    md: string;
  };
};

const light: ThemeColors = {
  colors: {
    button: blue,
    buttonHover: lightBlue,
    buttonBackground: blue,
    background: white,
    background2: white,
    background3: lightBlue,
    text: grey10,
    text2: grey20,
    revText: grey95,
    error: red,
  },
  border: {
    sm: `solid 1px ${grey90}`,
    md: `solid 2px ${grey10}`,
  },
  shadows: {
    lg: `0px 4px 40px ${shadow}`,
    bottomSheet: '0px -20px 180px rgba(255, 248, 111, 0.4)',
  },
};
const dark: ThemeColors = {
  colors: {
    button: blue,
    buttonHover: lightBlue,
    buttonBackground: blue,
    background: grey5,
    background2: grey10,
    background3: grey20,
    text: grey95,
    text2: grey70,
    revText: grey10,
    error: red,
  },
  border: {
    sm: `solid 1px ${grey40}`,
    md: `solid 2px ${grey90}`,
  },
  shadows: {
    lg: `0px 4px 40px ${greenGlow}`,
    bottomSheet: '0px -20px 180px rgba(255, 248, 111, 0.4)',
  },
};

type ThemeStructure = {
  zIndex: {
    modal: number;
    backdrop: number;
    closeIcon: number;
    menuIcon: number;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  font: {
    family: string;
    size: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
};

const theme: ThemeStructure = {
  zIndex: {
    closeIcon: 40,
    modal: 30,
    menuIcon: 20,
    backdrop: 10,
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '48px',
  },
  font: {
    family: 'sans-serif',
    size: {
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '18px',
    },
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
