import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const testiStyles = makeStyles({ uniqId: 'testimonial' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('md')]: {
      backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.dark, 0.2) : alpha(theme.palette.primary.light, 0.2),
      borderRadius: 60,
      overflow: 'hidden',
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(5),
      marginBottom: theme.spacing(5)
    },
  },
  decoration: {
    position: 'absolute',
    top: 0,
    width: 830,
    height: 600,
    left: -160,
    opacity: 0.2,
    [theme.breakpoints.down('lg')]: {
      left: -320
    },
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      transform: 'scale(1.2)',
      width: '100%',
      height: '100%'
    }
  },
  title: {
    position: 'relative',
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 3, 4),
    },
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  sliderWrap: {
    position: 'relative'
  },
  carouselWrap: {
    position: 'relative'
  },
  carousel: {
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2),
    },
    '& div[class*="slick-active"]': {
      '& p': {
        opacity: 1,
        transition: 'all 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        transform: 'translate3d(0, 0, 0)',
      }
    },
  },
  item: {
    position: 'relative',
  },
  inner: {
    direction: 'ltr',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    '& p': {
      opacity: 0,
      transform: 'translate3d(-10%, 0, 0)',
      marginTop: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(10),
      },
      [theme.breakpoints.up('sm')]: {
        width: '60%',
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        height: 75,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  profile: {
    textAlign: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 6)
    }
  },
  avatar: {
    width: 85,
    height: 85,
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  name: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    '& span': {
      marginTop: theme.spacing(0.5),
      fontSize: 14,
      display: 'block'
    },
  },
  logoWrap: {
    position: 'relative',
  },
  active: {},
  figureBtn: {
    display: 'inline-block',
    padding: theme.spacing(3),
    lineHeight: '150px',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '30%',
    height: 150,
    '& > button': {
      padding: theme.spacing(1)
    },
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(2)
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      display: 'block',
      width: '100%',
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
    },
    [`& .${classes.active}, &:hover`]: {
      '& img': {
        filter: 'none'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
