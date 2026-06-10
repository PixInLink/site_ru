import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
  counterWrap: {
    margin: theme.spacing(3, 0)
  },
  text: {},
  icon: {
    fontSize: 80,
    lineHeight: '80px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1),
      width: 80,
      height: 80
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
    }
  },
  counterItem: {
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      textAlign: 'left',
      marginBottom: theme.spacing(2)
    },
    [`& .${classes.text}`]: {
      '& h4': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 36,
        lineHeight: '36px'
      },
      '& h6': {
        textTransform: 'capitalize'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
