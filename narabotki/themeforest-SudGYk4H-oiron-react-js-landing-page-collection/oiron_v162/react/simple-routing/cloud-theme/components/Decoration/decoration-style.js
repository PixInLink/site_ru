import { makeStyles } from 'tss-react/mui';
const buildingDeco = '/images/cloud/building_deco_footer.png';

const deco = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  bottom: 0,
  left: 0,
};

const decorationStyles = makeStyles({ uniqId: 'decoration' })((theme, _params, classes) => ({
  cloud: {
    opacity: theme.palette.mode === 'dark' ? 0.12 : 0.25,
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
    width: 560,
    height: 280
  },
  fomrDeco: {
    ...deco
  },
  pageDeco: {
    ...deco
  },
  small: {
    position: 'absolute',
    opacity: 0.2,
    transform: 'scale(0.4)',
  },
  big: {
    position: 'absolute',
    opacity: 0.2,
    transform: 'scale(0.7)'
  },
  leftDeco: {
    position: 'absolute'
  },
  rightDeco: {
    position: 'absolute'
  },
  cloudDeco: {
    [`& .${classes.leftDeco}`]: {
      left: -360,
      top: -250,
      [`& .${classes.big}`]: {
        left: 80,
        top: 200
      },
      [`& .${classes.small}`]: {
        left: 200,
        top: 280
      }
    },
    [`& .${classes.rightDeco}`]: {
      right: -320,
      top: -120,
      [`& .${classes.big}`]: {
        right: 50,
        top: 190
      },
      [`& .${classes.small}`]: {
        right: 0,
        top: 240
      }
    }
  },
  buildingDeco: {
    position: 'absolute',
    height: 80,
    overflow: 'hidden',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: 10,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'brightness(1)',
    '&:after': {
      background: `url(${buildingDeco}) repeat-x bottom center`,
      backgroundSize: '50%',
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: 150,
      opacity: theme.palette.mode === 'dark' ? 0.3 : 1,
    },
    '& img': {
      height: 120,
      position: 'relative',
      zIndex: 2
    }
  }

}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default decorationStyles;
