import { makeStyles } from 'tss-react/mui';

const sliderArtStyles = makeStyles({ uniqId: 'slider_art' })(theme => ({
  deco: {
    [theme.breakpoints.up('lg')]: {
      width: 450
    },
    '& img': {
      position: 'relative',
      width: '100%'
    },
    '&:before': {
      content: '""',
      width: 700,
      height: 700,
      borderRadius: '50%',
      position: 'absolute',
      border: '1px solid',
      borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      top: -60,
      left: theme.direction === 'rtl' ? 'auto' : -140,
      right: theme.direction === 'rtl' ? -140 : 'auto',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    '&:after': {
      content: '""',
      width: 192,
      height: 192,
      position: 'absolute',
      top: -120,
      left: theme.direction === 'rtl' ? 'auto' : 20,
      right: theme.direction === 'rtl' ? 20 : 'auto',
      opacity: 0.3,
      borderRadius: '50%',
      backgroundImage: theme.palette.mode === 'dark' ? `linear-gradient(95deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.dark} 110%)` : `linear-gradient(45deg, ${theme.palette.secondary.light} 0%, ${theme.palette.primary.light} 110%)`
    }
  },
  figure: {
    height: 460,
    marginTop: theme.spacing(-5),
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'all 0.3s ease'
  },
  fade: {
    opacity: '0.15',
    filter: 'blur(10px)'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderArtStyles;
