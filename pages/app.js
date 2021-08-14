import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/masterTheme'
import App from '../components/app/Dashboard/index';
import { Container } from '@material-ui/core';

export default function Home() {
  const user = {
    name: 'Tony',
    streak: 7,
    badges: [1, 2, 3, 4],
    extensions: [
      {
        name: 'Github',
        category: 'tech',
        weeklyActivity: 7,
        totalActivity: 100,
      },
    ],

  }
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
          <App user={user} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
