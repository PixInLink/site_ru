import { makeStyles } from 'tss-react/mui';

const sliderStyle = makeStyles({ uniqId: 'slider_banner' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& ul[class*="slick-dots"]': {
      bottom: -20,
      left: 10
    }
  },
  cur: {},
  decoWrap: {
    width: '100%',
    height: '100%',
    transition: 'all 1s cubic-bezier(0, -0.01, 0, 0.96)',
    transform: 'translateX(-50px) scale(0.8)',
    opacity: 0,
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      top: -120
    }
  },
  top: {},
  bottom: {},
  s1: {},
  s2: {},
  deco: {
    borderRadius: '50%',
    position: 'absolute',
    [`&.${classes.top}`]: {
      backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(95deg,  ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%))` : `linear-gradient(95deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 110%)`,
      width: 1300,
      height: 1300,
      opacity: 0.3,
      [`&.${classes.s1}`]: {
        top: -900,
        right: -800,
      },
      [`&.${classes.s2}`]: {
        top: -900,
        left: -800,
      },
    },
    [`&.${classes.bottom}`]: {
      border: `1px solid ${theme.palette.primary.main}`,
      opacity: 0.3,
      width: 800,
      height: 800,
      [`&.${classes.s1}`]: {
        top: -200,
        right: -340
      },
      [`&.${classes.s2}`]: {
        top: -280,
        left: -310
      },
    }
  },
  img: {
    position: 'relative'
  },
  centerContent: {
    paddingTop: theme.spacing(10)
  },
  slider: {
    zIndex: 1,
    '& div[class*="slick-current"]': {
      [theme.breakpoints.down('md')]: {
        zIndex: 1
      }
    }
  },
  slide: {
    position: 'relative',
    '& img': {
      margin: '80px auto 0',
      maxWidth: 560,
      maxHeight: 320
    },
    [`&.${classes.cur}`]: {
      [`& .${classes.decoWrap}`]: {
        transform: 'translateX(0px) scale(1)',
        opacity: 1,
      }
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      height: 'auto',
      padding: theme.spacing(15, 0, 5),
      '& img': {
        height: 220,
        width: 'auto',
        marginTop: `${theme.spacing(2)} !important`
      }
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0
    }
  },
  backgroundBanner: {
    position: 'absolute',
    zIndex: 0,
    right: theme.direction === 'rtl' ? 'auto' : -250,
    left: theme.direction === 'rtl' ? -250 : 'auto',
    bottom: 100,
    '& img': {
      maxHeight: 300,
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  hBanner: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end',
      display: 'flex',
      marginRight: -120
    },
    '& img': {
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        width: '60%'
      },
      [theme.breakpoints.down('lg')]: {
        maxWidth: 'none',
        maxHeight: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '-50%'
      },
    }
  },
  sliderDeco: {
    position: 'absolute !important',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '& div[class*="slick-list"]': {
      [theme.breakpoints.down('md')]: {
        height: '100%'
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
  btnText: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  btnArea: {
    '& > .MuiButton-root': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3)
      }
    },
    [`& .${classes.button}`]: {
      width: 200,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    }
  },
  slideNav: {
    display: 'flex',
  },
  active: {},
  btnNav: {
    textTransform: 'none',
    height: 'auto',
    padding: theme.spacing(1),
    flex: 1,
    fontWeight: theme.typography.fontWeightRegular,
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    borderRadius: 36,
    '& strong': {
      textTransform: 'capitalize',
      fontSize: 28,
      display: 'block',
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: -2
    },
    '&:after': {
      content: '""',
      borderBottom: '6px solid #fff',
      borderRadius: 6,
      width: '0%',
      position: 'absolute',
      bottom: -12,
      left: -2,
      transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
      transformOrigin: 'left center',
    },
    '&:hover': {
      transition: 'all 0.3s ease-out',
      '&:after': {
        width: '50%',
        left: 5,
        borderBottomColor: theme.palette.primary.main
      }
    },
    [`&.${classes.active}`]: {
      '& strong': {
        color: theme.palette.primary.main
      },
      '&:after': {
        width: '50%',
        left: 5,
        borderBottomColor: theme.palette.primary.main
      }
    }
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
