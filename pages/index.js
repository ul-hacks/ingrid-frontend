import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import theme from '../styles/masterTheme';

const useStyles = makeStyles((theme) => ({
  checked: {
    color: 'white'
  },
}));

export default function Home() {
  const classes = useStyles(theme);

  return (
    <Html>
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <Main>
      <ThemeProvider theme={theme}>
        <div>
          Hello
        </div>
        </ThemeProvider>
      </Main>
    </Html>
  );
}
