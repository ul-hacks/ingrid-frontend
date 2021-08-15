const styles = (theme) => ({
  whiteBg: {
    height: '100vh',
    width: '100vw',
    background: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  greyDiv: {
    backgroundColor: '#F8F9FB',
    minHeight: '600px',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      minHeight: 0,
      maxHeight: '20vh',
      overflow: 'scroll',
    }
  },
  cardPaper: {
    padding: theme.spacing(3),
  },
  greyContainer: {
    padding: theme.spacing(3),
    boxSizing: 'border-box'
  },
  storeIcon: {
    color: `${theme.palette.common.black} !important`,
  },
  button: {

  },
  fullScreen: {
    padding: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(7, 1, 1, 1),
    }
  }
});

export default styles;