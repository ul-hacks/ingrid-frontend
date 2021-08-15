const styles = (theme) => ({
  whiteBg: {
    height: '100vh',
    width: '100vw',
    background: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    }
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  }
});

export default styles;