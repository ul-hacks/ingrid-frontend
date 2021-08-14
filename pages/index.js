import Head from 'next/head';
import { Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/masterTheme';
import Landing from '../components/website/Landing';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Landing />
        </Container>
      </ThemeProvider>
    </div>
  );
}
