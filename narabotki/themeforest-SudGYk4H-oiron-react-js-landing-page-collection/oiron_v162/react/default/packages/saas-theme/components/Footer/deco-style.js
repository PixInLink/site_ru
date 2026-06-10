import { makeStyles } from 'tss-react/mui';
import { darken, lighten } from '@mui/material/styles';
const waveDecoLight = '/images/saas/deco-wave-light.png';
const waveDecoDark = '/images/saas/deco-wave-dark.png';

const useStyles = makeStyles({ uniqId: 'deco_footer' })((theme, _params, classes) => ({
  bg: {
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.light, 0.8),
  },
  footerDeco: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
  },
  waveCover: {
    zIndex: 10,
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: -16,
    backgroundPosition: '0 bottom',
    backgroundSize: '1370px 90px',
    backgroundImage: theme.palette.mode === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    backgroundRepeat: 'no-repeat',
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  decoWrap: {
    zIndex: 10,
    width: '100%',
    height: '100%',
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  top: {},
  bottom: {},
  deco: {
    position: 'absolute',
    bottom: 0,
    '& svg': {
      width: 2000
    },
    [`&.${classes.top}`]: {
      bottom: -30,
      left: 0,
      '& svg': {
        fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      }
    },
    [`&.${classes.bottom}`]: {
      left: -370,
      bottom: -30,
      '& svg': {
        fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
