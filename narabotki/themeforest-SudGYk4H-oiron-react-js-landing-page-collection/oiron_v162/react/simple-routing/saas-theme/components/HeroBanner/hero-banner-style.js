import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
const waveDecoLight = '/images/saas/deco-wave-light.png';
const waveDecoDark = '/images/saas/deco-wave-dark.png';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })(theme => ({
  heroBannerWrap: {
    position: 'relative',
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.4) : alpha(theme.palette.primary.light, 0.4),
  },
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
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '600px 40px',
      bottom: -1
    },
    [theme.breakpoints.down('lg')]: {
      backgroundPosition: 'center bottom'
    },
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
