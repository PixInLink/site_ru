import { makeStyles } from 'tss-react/mui';

const decorationStyles = makeStyles({ uniqId: 'decoration' })(theme => ({
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
      opacity: 0.15,
      position: 'fixed',
      top: 0
    }
  },
  leftDeco: {
    left: -400,
    right: 'auto',
    width: 1200,
    height: 1500,
    transformOrigin: 'top left',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)'
    }
  },
  rightDeco: {
    left: 'auto',
    right: 0,
    height: 1500,
    transformOrigin: 'top right',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default decorationStyles;
