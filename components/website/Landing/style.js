const styles = (theme) => ({
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '70vh',
    padding: theme.spacing(5),
    boxSizing: 'border-box',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '350px',
    }
  },
  no_u: {
    textDecoration: 'none !important'
  },
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    height: '50px',
    width: 'auto'
  },
  imageC: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '100px',
    }
  },
  textC: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    }
  }
});

export default styles;