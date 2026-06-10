import { makeStyles } from 'tss-react/mui';

const marketStyles = makeStyles({ uniqId: 'market_price' })((theme, _params, classes) => ({
  market: {
    position: 'absolute',
    top: 0,
    zIndex: 1200,
    left: 0,
    width: '100%',
    height: 40,
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    padding: theme.spacing(),
  },
  item: {
    padding: theme.spacing(0.5, 4),
    fontSize: 14,
    '&:focus': {
      outline: 'none'
    }
  },
  logo: {},
  coin: {
    display: 'flex',
    fontWeight: theme.typography.fontWeightBold,
    [`& .${classes.logo}`]: {
      width: 20,
      height: 'auto',
      marginRight: theme.spacing(),
      '& img': {
        width: '100%',
        height: 'auto',
      },
    },
    '& i': {
      fontStyle: 'normal'
    }
  },
  down: {
    color: '#FF7272'
  },
  up: {
    color: '#5DD662'
  },
  stay: {
    color: '#b2b2b2'
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default marketStyles;
