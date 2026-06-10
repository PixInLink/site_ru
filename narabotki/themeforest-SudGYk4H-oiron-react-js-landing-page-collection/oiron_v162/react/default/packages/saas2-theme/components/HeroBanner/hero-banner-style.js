import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
const waveDecoLight = '/images/saas2/deco-wave-light.png';
const waveDecoDark = '/images/saas2/deco-wave-dark.png';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })((theme, _params, classes) => ({
  heroBannerWrap: {
    position: 'relative',
    paddingBottom: theme.spacing(10),
    background: `linear-gradient(120deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.secondary.main, 0.15)})`
  },
  container: {
    position: 'relative',
    zIndex: 10
  },
  decoWrap: {
    width: '100%',
    height: '100%',
    '@media only screen and (min-width: 1400px)': {
      display: 'none'
    }
  },
  top: {},
  bottom: {},
  waveCover: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: -5,
    left: 0,
    transform: 'scale(1.2, 1)',
    backgroundPosition: '50px bottom',
    backgroundSize: '1370px 80px',
    backgroundImage: theme.palette.mode === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    backgroundRepeat: 'repeat-x',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '600px 40px',
      bottom: -1
    },
    [theme.breakpoints.down('lg')]: {
      backgroundPosition: 'center bottom'
    },
  },
  deco: {
    position: 'absolute',
    bottom: 0,
    '& svg': {
      width: 2000,
    },
    [`&.${classes.top}`]: {
      bottom: 0,
      left: 0,
      height: 240,
      width: '100%',
      opacity: 0.5,
      [theme.breakpoints.down('md')]: {
        bottom: -20,
      },
      [`& .${classes.waveCover}`]: {
        backgroundPosition: '470px 110px',
        backgroundSize: '1900px 110px',
        backgroundRepeat: 'repeat-x',
        [theme.breakpoints.down('sm')]: {
          backgroundSize: '1000px 110px'
        }
      }
    },
    [`&.${classes.bottom}`]: {
      left: -370,
      bottom: -10,
      opacity: 0.4,
      [theme.breakpoints.down('md')]: {
        bottom: -20
      },
      '& svg': {
        fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
