const darkGrey: string = '#1e1e1e';
const lightGrey: string = '#2a2a2a';
const blue: string = '#005083';
const lightBlue: string = '#00609f';
const red: string = '#9d1e1e';
const greenGlow: string = 'rgba(111, 255, 242, 0.4)';
const white: string = 'white';

const theme = {
    colors: {
        darkGrey: '#1e1e1e',
        lightGrey: '#2a2a2a',
        blue: '#005083',
        red: '#9d1e1e',
        greenGlow: 'rgba(111, 255, 242, 0.4)',
        white: 'white',

        button: blue,
        buttonHover: lightBlue,
        buttonBackground: white
    },
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

export default theme;

