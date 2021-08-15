const styles = (theme) => ({
  header: {
    marginBottom: theme.spacing(2),
  },
  fullScreen: {
    padding: theme.spacing(7),
    [theme.breakpoints.down('sm')]:{
      padding: theme.spacing(7, 1, 1, 1)
    }
  },
  heatMap: {
    fontFamily: 'Poppins',
    fontSize: '11px',
    [theme.breakpoints.down('sm')]:{
      marginBottom: theme.spacing(4)
    }
  },
  mapPaper: {
    margin: theme.spacing(4, 0, 0, 4),
    minHeight: '500px',
    [theme.breakpoints.down('sm')]:{
      margin: theme.spacing(0, 0, 4, 0),
      minHeight: 0,
    }
  },
  mapContainer: {
    padding: theme.spacing(3, 3, 3, 1),
  },
  fireEmoji: {
    width: '30px',
    height: '30px',
  },
  boldNumber: {
    fontSize: '36px',
    fontWeight: 600,
    fontFamily: 'Poppins',
    margin: theme.spacing(0, 1),
  },
  topBar: {
    padding: theme.spacing(3),
    margin: theme.spacing(4, 0, 0, 0),
    [theme.breakpoints.down('sm')]:{
      margin: theme.spacing(0, 0, 4, 0),
    }
  },
  extensionPaper: {
    margin: theme.spacing(4, 0, 0, 0),
    minHeight: '500px',
    [theme.breakpoints.down('sm')]:{
      margin: theme.spacing(0, 0, 4, 0),
      minHeight: 0,
    },
  },
  extensionCard: {
    padding: theme.spacing(3),
  },
  techPill: {
    color: theme.palette.common.blue,
    textTransform: 'uppercase',
  },
  langPill: {
    color: theme.palette.common.purple,
    textTransform: 'uppercase',
  },
  settingsButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  }
});

export default styles;