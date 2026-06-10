import { makeStyles } from 'tss-react/mui';

const integrationStyle = makeStyles({ uniqId: 'integration' })((theme, _params, classes) => ({
  row: {
    position: 'relative'
  },
  decorationBg: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -10,
    top: 400,
    '& svg': {
      width: '100%',
      height: 1300,
      fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      opacity: 0.2,
      transform: 'scale(1.2)',
      '@media (min-width: 1400px)': {
        transform: 'scale(2.5, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  left: {},
  illustration: {
    margin: 0,
    '& img': {
      margin: `${theme.spacing(4)} 0`,
      display: 'block',
      maxWidth: '100%',
      [theme.breakpoints.up('sm')]: {
        maxHeight: 240
      }
    },
    [`&.${classes.left}`]: {
      '& img': {
        marginLeft: 'auto'
      }
    }
  },
  icon: {
    width: 'auto',
    height: 'auto',
    position: 'relative',
    top: theme.spacing()
  },
  list: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    },
    '& ul': {
      padding: 0,
      '& li': {
        marginBottom: 20,
        listStyle: 'none',
        fontSize: 24,
        [theme.breakpoints.down('md')]: {
          fontSize: 16
        },
        [`& .${classes.icon}`]: {
          borderRadius: '50%',
          padding: 6,
          [theme.breakpoints.down('md')]: {
            fontSize: 14
          }
        }
      }
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(1)
    }
  },
  listPrimary: {
    [`& .${classes.icon}`]: {
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.primary.main,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(2)
      }
    }
  },
  listSecondary: {
    '& li': {
      [theme.breakpoints.up('sm')]: {
        textAlign: 'right'
      }
    },
    [`& .${classes.icon}`]: {
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      color: theme.palette.secondary.main,
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.down('sm')]: {
        float: 'left',
        marginRight: theme.spacing(2)
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default integrationStyle;
