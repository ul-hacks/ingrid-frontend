
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/masterTheme';
import SignIn from '../components/website/SignIn';

export default function Signin() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <SignIn />
        </Container>
      </ThemeProvider>
    </div>
  );
}
