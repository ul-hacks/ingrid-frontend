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
    overflow: 'scroll',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      minHeight: 0,
      height: '30vh',
    }
  },
  cardPaper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  greyContainer: {
    padding: theme.spacing(3),
    boxSizing: 'border-box'
  },
  storeIcon: {
    color: `${theme.palette.common.black} !important`,
  },
  removeButton: {
    color: theme.palette.error.main
  },
  addButton: {
    color: theme.palette.success.dark
  },
  fullScreen: {
    padding: theme.spacing(7),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(7, 1, 1, 1),
    }
  },
  acceptButton: {
    background: theme.palette.success.dark,
    color:'white',
    borderRadius: '5px',
    padding: '3px !important',
    '&:hover': {
      background: theme.palette.success.dark,
    }
  }
});

export default styles;