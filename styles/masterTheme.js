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
      yellow:'#FFD84F',
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
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px'
    }
  },
});

export default theme;