import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/masterTheme';
import App from '../components/app/Dashboard/index';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </div>
  );
}
