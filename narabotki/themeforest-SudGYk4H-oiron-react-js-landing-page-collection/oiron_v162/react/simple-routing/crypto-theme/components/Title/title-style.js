import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })(theme => ({
  left: {
    textAlign: 'left',
    '&:after': {
      left: 0,
    }
  },
  right: {
    textAlign: 'right',
    '&:after': {
      right: 0,
    }
  },
  center: {
    textAlign: 'center',
    '&:after': {
      left: '50%',
      marginLeft: -35,
    }
  },
  deco: {
    '& svg': {}
  },
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 36,
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '44px',
      }
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
