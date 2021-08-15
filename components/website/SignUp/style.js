const styles = (theme) => ({
  paperCard: {
    height: '500px',
    width: '400px',
    padding: theme.spacing(5),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform:' translate(-50%,-50%)'
  },
  input: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
  signUpButton: {
    background: theme.palette.common.blue,
    color: 'black',
    border: '5px solid black',
    padding: theme.spacing(1, 3),
    fontFamily: 'Poppins',
    textTransform: 'capitalize',
    fontSize: '24px',
    borderRadius: '12px',
    transition: '0.1s ease-in',
    '&:hover': {
      background: '#7de0ff',
      
    }
  },
  divider: {
    marginBottom: theme.spacing(4)
  }
});

export default styles;