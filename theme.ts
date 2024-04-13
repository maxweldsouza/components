const darkGrey: string = '#1e1e1e';
const lightGrey: string = '#2a2a2a';
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
};

type ThemeColors = {
    colors: ColorType;
};


const light : ThemeColors = {
    colors: {
        button: blue,
        buttonHover: lightBlue,
        buttonBackground: blue,
        background: lightGrey,
        background2: white
    },

}
const dark : ThemeColors = {
    colors: {
        button: blue,
        buttonHover: lightBlue,
        buttonBackground: blue,
        background: black,
        background2: darkGrey
    },
}

type ThemeStructure = {
    zIndex: {
        modal: number;
        backdrop: number;
    };
    shadows: {
        bottomSheet: string;
    };
    borderRadius: {
        md: string;
        lg: string;
    };
    spacing: {
        sm: string;
        md: string;
    };
    border: {
        md: string;
    };
    fontSize: {
        md: string;
    };
};

const theme : ThemeStructure = {
    zIndex: {
        modal: 20,
        backdrop: 10,
    },
    shadows: {
        bottomSheet: '0px -20px 180px rgba(255, 248, 111, 0.4)',
    },
    borderRadius: {
        md: '4px',
        lg: '16px',
    },
    spacing: {
        sm: '.5em',
        md: '1em',
    },
    border: {
        md: 'solid 2px #3a3a3a',
    },
    fontSize: {
        md: '16px'
    }
};

type Theme = ThemeStructure & ThemeColors

export interface IThemeProps {
    theme: Theme
}

export const getTheme = (mode) : Theme => {
    const colorTheme = mode === 'dark' ? dark : light
    return {
        ...colorTheme,
        ...theme
    }
}

// TODO remove
export default theme;

