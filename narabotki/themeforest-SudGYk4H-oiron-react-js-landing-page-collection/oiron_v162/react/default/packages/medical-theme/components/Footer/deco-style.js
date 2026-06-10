import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'deco_footer' })(theme => ({
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  leftDeco: {
    position: 'absolute',
    left: -150,
    top: -200,
    width: 690,
    height: 690,
    borderRadius: '50%',
    opacity: 0.2,
    backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(95deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%)` : `linear-gradient(95deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 110%)`,
    '&:after': {
      content: '""',
      top: -74,
      left: -74,
      width: 838,
      height: 838,
      borderRadius: '50%',
      position: 'absolute',
      border: '1px solid',
      borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    }
  },
  rightDeco: {
    position: 'absolute',
    right: -100,
    width: 335,
    height: 266,
    bottom: 0,
    opacity: 0.3,
    '& img': {
      width: '100%'
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
