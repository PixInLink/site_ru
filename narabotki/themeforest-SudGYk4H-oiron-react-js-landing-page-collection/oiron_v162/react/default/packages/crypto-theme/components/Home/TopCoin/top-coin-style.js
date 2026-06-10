import { makeStyles } from 'tss-react/mui';

const TopCoinStyles = makeStyles({ uniqId: 'top_coin' })(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10, 0),
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: 1
    }
  },
  floatingArtwork: {
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    position: 'absolute',
    width: '100%',
    top: theme.spacing(8),
    left: 0,
  },
  props: {
    '& > div': {
      width: 440,
      height: 2
    },
    [theme.breakpoints.down('md')]: {
      display: 'none !important',
    },
    '&:focus': {
      outline: 'none'
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 5,
    marginTop: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      marginBottom: -20
    },
    '& > div': {
      marginBottom: 0
    }
  },
  item: {
    direction: 'ltr',
    padding: theme.spacing(),
    borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    '&:focus': {
      outline: 'none'
    },
    '& > *': {
      margin: '0 auto'
    }
  },
  nav: {
    position: 'absolute',
    top: '60%',
    borderRadius: theme.rounded.small,
    width: 36,
    zIndex: 6,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: theme.palette.primary.dark,
    boxShadow: theme.shade.light,
    transform: theme.direction === 'rtl' ? 'scaleX(-1.6) scaleY(1.6)' : 'scaleX(1.6) scaleY(1.6)',
    '&:hover': {
      background: theme.palette.primary.main
    },
    '& i': {
      fontSize: 24,
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  prev: {
    left: 0,
  },
  next: {
    right: 0
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default TopCoinStyles;
