import { makeStyles } from 'tss-react/mui';

const deco = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  bottom: 0,
  left: 0,
};

const decorationStyles = makeStyles({ uniqId: 'decoration' })(theme => ({
  formDeco: {
    ...deco
  },
  pageDeco: {
    ...deco,
    overflow: 'hidden'
  },
  topDeco: {
    position: 'absolute',
    top: -480,
    right: -280,
    transformOrigin: 'top right',
    transform: 'scale(0.8)',
    '& svg': {
      width: 1024,
      height: 1104,
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
      opacity: 0.3
    }
  },
  bottomDeco: {
    position: 'absolute',
    bottom: -800,
    left: -600,
    transformOrigin: 'top right',
    transform: 'scale(0.8)',
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.7)'
    },
    '& svg': {
      width: 1524,
      height: 1104,
      fill: theme.palette.secondary.main,
      opacity: 0.3
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default decorationStyles;
