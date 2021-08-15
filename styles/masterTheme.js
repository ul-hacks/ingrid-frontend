import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    error: {
      main: '#F25D5D'
    },
    success: {
      dark: '#80E86F',
      main: '#BBF6B2',
      light: '#E3FAE0'
    },
    common: {
      pink: '#FF6DAB',
      yellow: '#FFD84F',
      orange: '#FFA26D',
      blue: '#5BE2FF',
      orchid: '#DD7BFF',
      white: '#FFF',
      black: '#OOO'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins',
      'sans serif'
    ].join(','),

    h1: {
      fontSize: '64px',
    },
    h2: {
      fontSize: '32px',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px'
    }
  },
  shadows: [
    'none',
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)"
  ],
  overrides: {
    MuiInput: {
      root: {
        transition: '0.1s ease-in',
        backgroundColor: '#fafafa',
        borderRadius: '10px 10px 0 0',
        backgroundColor: '#f2fdff',
      },
      underline: {
        '&:before': {
          borderBottom: '1px solid rgba(91, 225, 255, 0.7) !important'
        },
        '&:after': {
          borderBottom: `2px solid #5BE2FF`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid #5BE2FF`
        }
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: '10px'
      }
    },
    MuiButton: {
      contained: {
        background: '#FFD84F !important',
        color: 'black',
        border: '5px solid black',
        padding: '8px 24px',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        fontSize: '24px',
        borderRadius: '12px',
        transition: '0.1s ease-in',
        '&:hover': {
          background: '#7de0ff !important',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: '0px 5px 15px 0px rgba(0,134,255,0.15)',
          backgroundColor: '#3bd0ff !important'
        }
      },
      outlined: {
        border: '2px solid grey',
        borderRadius: '12px',
        padding: '8px 24px',
        padding: '8px 24px',
        fontFamily: 'Poppins',
        textTransform: 'capitalize',
        fontSize: '24px',
        color: 'grey',
        fontWeight: 400,
      }
    }
  }
});

export default theme;