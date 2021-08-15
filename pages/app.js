import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/masterTheme'
import App from '../components/app/index';
import { Container } from '@material-ui/core';

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <App />
        </Container>
      </ThemeProvider>
    </div>
  );
}
