import { makeStyles } from 'tss-react/mui';

const integrationStyle = makeStyles({ uniqId: 'integration' })((theme, _params, classes) => ({
  root: {
    paddingTop: theme.spacing(15),
    direction: 'ltr',
  },
  decoWrap: {
    position: 'relative'
  },
  illustration: {
    textAlign: 'center',
    '& img': {
      maxHeight: 240,
      margin: `${theme.spacing(4)} auto`,
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        maxWidth: 320
      }
    }
  },
  primaryColor: {},
  secondaryColor: {},
  droplet: {
    margin: '0 auto',
    width: 6,
    height: 128,
    [`&.${classes.primaryColor}`]: {
      fill: theme.palette.primary.main
    },
    [`&.${classes.secondaryColor}`]: {
      fill: theme.palette.secondary.main
    }
  },
  timeline: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5)
    },
    '& ul': {
      listStyle: 'none',
      padding: 0,
      paddingLeft: theme.spacing(3),
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        padding: 0
      },
      '& li': {
        '& strong': {
          fontWeight: theme.typography.fontWeightMedium
        }
      }
    },
  },
  icon: {
    fontSize: 80,
    width: 100,
    height: 100,
    textAlign: 'center',
    lineHeight: '100px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '50px',
      margin: '0 auto'
    }
  },
  text: {
    position: 'relative',
    display: 'block',
    '& p': {
      [theme.breakpoints.down('md')]: {
        marginBottom: 0
      }
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 0
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 3)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      '&:after': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
  },
  typePrimary: {
    '& strong': {
      color: theme.palette.primary.main
    },
    [`& .${classes.icon}`]: {
      '& i': {
        color: theme.palette.primary.main,
        background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        WebkitBackgroundClip: 'text',
        [theme.breakpoints.up('sm')]: {
          WebkitTextFillColor: 'transparent',
        }
      }
    },
    [`& .${classes.text}`]: {
      '&:after': {
        background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`
      }
    }
  },
  typeSecondary: {
    '& strong': {
      color: theme.palette.secondary.main
    },
    [`& .${classes.icon}`]: {
      '& i': {
        color: theme.palette.secondary.main,
        background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
        WebkitBackgroundClip: 'text',
        [theme.breakpoints.up('sm')]: {
          WebkitTextFillColor: 'transparent',
        }
      }
    },
    [`& .${classes.text}`]: {
      '&:after': {
        background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`
      }
    }
  },
  item: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  leftSide: {
    '& li': {
      textAlign: 'right',
      marginBottom: theme.spacing(11),
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(10)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      },
      [`& .${classes.item}`]: {
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          flexDirection: 'column-reverse'
        }
      }
    },
    [`& .${classes.text}`]: {
      '&:after': {
        content: '""',
        width: 24,
        height: 24,
        borderRadius: '50%',
        position: 'absolute',
        top: 14,
        right: -190,
        [theme.breakpoints.down('lg')]: {
          right: -150
        }
      }
    },
  },
  rightSide: {
    '& li': {
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(11)
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(10)
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5)
      }
    },
    [`& .${classes.text}`]: {
      '&:after': {
        content: '""',
        width: 24,
        height: 24,
        borderRadius: '50%',
        position: 'absolute',
        top: 14,
        left: -185,
        [theme.breakpoints.down('lg')]: {
          left: -145
        }
      }
    },
  },
  solidDivider: {
    position: 'absolute',
    left: 'calc(50% + 12px)',
    top: 0,
    width: 6,
    height: '100%',
    borderRadius: 6,
    opacity: 0.05,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  dashedDivider: {
    position: 'absolute',
    opacity: 0.05,
    left: 'calc(50% + 12px)',
    top: '10%',
    width: 4,
    height: '63%',
    borderRadius: 2,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% + -1px)',
      top: '-23%',
      width: 2,
      height: '20%',
      borderRadius: 2,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% + -3px)',
      top: '103%',
      width: 6,
      height: '60%',
      borderRadius: 6,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default integrationStyle;
