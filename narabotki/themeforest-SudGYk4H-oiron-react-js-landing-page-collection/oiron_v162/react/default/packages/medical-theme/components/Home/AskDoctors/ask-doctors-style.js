import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'ask_doctor' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& nav': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        overflow: 'auto',
      }
    }
  },
  deco: {
    width: 470,
    height: 410,
    bottom: -40,
    right: 0,
    position: 'absolute',
    opacity: 0.3,
    '& img': {
      width: '100%'
    }
  },
  sideFilter: {
    '& nav': {
      margin: '0.5rem 0 1rem 0',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 3)
      }
    }
  },
  filter: {
    borderRadius: 40,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(),
    padding: theme.spacing(0.5, 2),
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      overflow: 'hidden'
    },
    [theme.breakpoints.down('md')]: {
      '& > div': {
        textAlign: 'center'
      }
    }
  },
  active: {
    background: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.dark,
  },
  massonry: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 4),
    },
    '& button': {
      width: '100%'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
