import { makeStyles } from 'tss-react/mui';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })((theme, _params, classes) => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
  },
  decoWrap: {
    width: '100%',
    height: '100%',
    transform: 'translateX(-50px) scale(0.8)',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      top: -120
    }
  },
  top: {},
  bottom: {},
  s1: {},
  deco: {
    borderRadius: '50%',
    position: 'absolute',
    [`&.${classes.top}`]: {
      backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(95deg,  ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%)` : `linear-gradient(95deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 110%)`,
      width: 1300,
      height: 1300,
      opacity: 0.3,
      [`&.${classes.s1}`]: {
        top: -900,
        right: -800
      },
    },
    [`&.${classes.bottom}`]: {
      border: `1px solid ${theme.palette.primary.main}`,
      width: 800,
      height: 800,
      opacity: 0.3,
      [`&.${classes.s1}`]: {
        top: -200,
        right: -340
      },
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
