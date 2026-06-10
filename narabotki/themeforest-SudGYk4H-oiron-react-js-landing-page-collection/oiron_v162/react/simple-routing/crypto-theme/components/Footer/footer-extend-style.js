import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';
const decoLight = '/images/crypto/deco-footer-light.svg';
const decoDark = '/images/crypto/deco-footer-dark.svg';

const footerStyles = makeStyles({ uniqId: 'footer_extend' })((theme, _params, classes) => ({
  extend: {},
  footerCounter: {
    position: 'relative',
    paddingTop: 320,
    marginTop: theme.spacing(-40),
    background: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${darken(theme.palette.primary.main, 0.6)}, ${darken(theme.palette.secondary.main, 0.6)})` : `linear-gradient(120deg, ${lighten(theme.palette.primary.main, 0.9)}, ${lighten(theme.palette.secondary.main, 0.9)})`,
    [`&.${classes.extend}`]: {
      marginTop: theme.spacing(-30),
    }
  },
  deco: {
    content: '""',
    overflow: 'hidden',
    backgroundImage: `url(${theme.palette.mode === 'dark' ? decoDark : decoLight})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '350px',
    [theme.breakpoints.down('sm')]: {
      height: 120,
    },
    '@media (min-width: 1400px)': {
      backgroundPosition: '0 -70px'
    }
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    position: 'relative',
    paddingBottom: theme.spacing(7),
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
