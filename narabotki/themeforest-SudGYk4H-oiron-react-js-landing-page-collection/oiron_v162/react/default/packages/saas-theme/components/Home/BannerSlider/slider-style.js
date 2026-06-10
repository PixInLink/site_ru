import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';
const waveDecoLight = '/images/saas/deco-wave-light.png';
const waveDecoDark = '/images/saas/deco-wave-dark.png';

const sliderStyle = makeStyles({ uniqId: 'banner' })((theme, _params, classes) => ({
  carousel: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      zIndex: 5
    }
  },
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      zIndex: 2,
      bottom: 0
    }
  },
  decoWrap: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  slide: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(15, 0)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(15, 0, 5)
    },
    '& img': {
      margin: '80px auto 0',
      maxWidth: '100%',
      maxHeight: 350,
      position: 'relative',
      zIndex: 5,
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3)
      }
    },
    [`&.${classes.centerContent}`]: {
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(10)
      }
    }
  },
  imgSlide1: {
    [theme.breakpoints.up('sm')]: {
      float: theme.direction === 'rtl' ? 'right' : 'left'
    }
  },
  imgSlide2: {
    [theme.breakpoints.up('sm')]: {
      float: theme.direction === 'rtl' ? 'left' : 'right'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      right: theme.direction === 'rtl' ? -150 : 'auto',
      left: theme.direction === 'rtl' ? 'auto' : -150,
    }
  },
  ovalFloor: {
    width: 1140,
    height: 960,
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: theme.palette.mode === 'dark' ? darken(theme.palette.accent.main, 0.8) : lighten(theme.palette.accent.light, 0.6),
    '@media (min-width: 1400px)': {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [`&.${classes.slide1}`]: {
      bottom: -780,
      left: theme.direction === 'rtl' ? -280 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : -280,
    },
    [`&.${classes.slide2}`]: {
      bottom: -780,
      right: theme.direction === 'rtl' ? -310 : 'auto',
      left: theme.direction === 'rtl' ? 'auto' : -310,
    },
    [`&.${classes.slide3}`]: {
      bottom: -800
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      position: 'absolute',
      top: 0,
      left: 0,
    }
  },
  hBanner: {
    textAlign: 'center',
    '& img': {
      marginTop: theme.spacing(5),
      zIndex: 4,
      [theme.breakpoints.up('md')]: {
        width: '50%'
      },
      [theme.breakpoints.down('md')]: {
         maxWidth: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        left: -400
      }
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 3,
    left: theme.direction === 'rtl' ? -300 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : -300,
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      left: theme.direction === 'rtl' ? -200 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : -200,
      bottom: 0
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [`&.${classes.mobile}`]: {
      display: 'none',
      [theme.breakpoints.between('sm', 'lg')]: {
        display: 'block',
        left: theme.direction === 'rtl' ? -100 : 'auto',
        right: theme.direction === 'rtl' ? 'auto' : -100,
      }
    }
  },
  slideNavGroup: {
    position: 'relative',
    content: '""',
    marginTop: -240,
    zIndex: 2,
    marginBottom: theme.spacing(5),
    '@media (max-width: 1400px)': {
      minHeight: 260,
      marginBottom: 0
    }
  },
  text: {
    direction: 'ltr',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4)
    }
  },
  btnArea: {
    [`& .${classes.button}`]: {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        maxWidth: 200,
        marginBottom: theme.spacing(2)
      }
    }
  },
  textBtn: {
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2)
    },
  },
  slideNav: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 1080,
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  },
  active: {},
  btnNav: {
    padding: theme.spacing(1, 3),
    textTransform: 'none',
    height: 'auto',
    border: '1px solid transparent',
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      background: 'none',
      borderColor: theme.palette.primary.main
    },
    [`&.${classes.active}`]: {
      borderColor: theme.palette.primary.main,
      '& strong': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
      },
    }
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('md')]: {
        zIndex: 1
      }
    },
    [`& .${classes.slide}`]: {
      [theme.breakpoints.up('md')]: {
        height: 840,
        paddingBottom: 240
      }
    }
  },
  waveCover: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    bottom: -10,
    left: 0,
    transform: 'scale(1.2, 1)',
    backgroundPosition: '50px 160px',
    backgroundSize: '1370px 80px',
    backgroundRepeat: 'repeat-x',
    backgroundImage: theme.palette.mode === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
    [theme.breakpoints.down('lg')]: {
      backgroundSize: '1170px 80px',
      backgroundPosition: '200px bottom',
      bottom: 10,
    },
    '@media (min-width: 1400px)': {
      display: 'none'
    }
  },
  deco: {
    position: 'absolute',
    bottom: 0,
    '& svg': {
      width: 2000,
    },
    [`&.${classes.top}`]: {
      bottom: -5,
      left: theme.direction === 'rtl' ? 'auto' : 0,
      right: theme.direction === 'rtl' ? 0 : 'auto',
      '& svg': {
        fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      }
    },
    [`&.${classes.bottom}`]: {
      left: theme.direction === 'rtl' ? 'auto' : -370,
      right: theme.direction === 'rtl' ? -370 : 'auto',
      '& svg': {
        fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
