
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/masterTheme';
import Landing from '../components/website/Landing';

export default function Home() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Landing />
        </Container>
      </ThemeProvider>
    </div>
  );
}
