const styles = (theme) => ({
  paperCard: {
    minHeight: '400px',
    width: '400px',
    padding: theme.spacing(5),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform:' translate(-50%,-50%)',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    }
  },
  input: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.grey.light
    },
    width: '100%'
  },
  header: {
    marginBottom: theme.spacing(2)
  },
  inputLabel: {
    color: theme.palette.grey.light,
    height:'100%'
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginBottom: theme.spacing(4)
  },
  link: {
    color: `grey !important`,
    '&:hover': {
      color: `darkgrey !important`,
    },
    '&active': {
      color: `darkgrey !important`,
    }
  }
});

export default styles;