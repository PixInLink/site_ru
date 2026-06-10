import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const aboutStyles = makeStyles({ uniqId: 'about_landing' })(theme => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8),
    }
  },
  video: {
    overflow: 'hidden',
    position: 'relative',
    marginTop: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2)
    },
    '& figure': {
      margin: 0,
      background: theme.palette.common.black,
      '& img': {
        opacity: 0.62,
        minHeight: '100%',
        width: '100%',
      }
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  featureWrap: {
    position: 'relative'
  },
  playBtn: {
    position: 'absolute',
    width: 90,
    height: 90,
    top: '50%',
    background: theme.palette.background.paper,
    boxShadow: theme.shade.light,
    left: '50%',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    '&:hover': {
      background: alpha(theme.palette.background.paper, 0.9)
    },
    '& span': {
      '&:before': {
        fontSize: 60,
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  deco: {
    position: 'absolute',
    top: 180,
    left: 210,
    width: 400,
    '& svg': {
      transformOrigin: 'top left',
    },
    [theme.breakpoints.down('md')]: {
      top: 80
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  counter: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(8),
    },
    '& > *': {
      [theme.breakpoints.down('sm')]: {
        width: '50%',
        padding: theme.spacing(0.5)
      }
    }
  },
  lower: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  higher: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(-3)
    }
  },
  paper: {
    position: 'relative',
    height: 174,
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(4, 4, 0, 0),
      width: 174,
    },
    '& span': {
      color: theme.palette.primary.main,
      fontSize: 48
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyles;
