
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/masterTheme';
import SignUp from '../components/website/SignUp';

export default function Login() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <SignUp />
        </Container>
      </ThemeProvider>
    </div>
  );
}
