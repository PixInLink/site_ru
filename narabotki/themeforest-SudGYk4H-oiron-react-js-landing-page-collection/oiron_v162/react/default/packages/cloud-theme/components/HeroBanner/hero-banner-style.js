import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';
const cloudBottomLight = '/images/cloud/cloud_bottom_light.svg';
const cloudBottomDark = '/images/cloud/cloud_bottom_dark.svg';
const buildingDecoLight = '/images/cloud/building_deco_light.png';
const buildingDecoDark = '/images/cloud/building_deco_dark.png';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })(theme => ({
  container: {
    position: 'relative'
  },
  heroBannerWrap: {
    position: 'relative',
    paddingBottom: theme.spacing(10),
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.5) : lighten(theme.palette.primary.light, 0.5),
    '&:after': {
      backgroundImage: theme.palette.mode === 'dark' ? `url(${buildingDecoDark})` : `url(${buildingDecoLight})`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'bottom center',
      content: '""',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: 150,
      [theme.breakpoints.up('md')]: {
        bottom: -40
      }
    }
  },
  cloudDeco: {
    backgroundImage: theme.palette.mode === 'dark' ? `url(${cloudBottomDark})` : `url(${cloudBottomLight})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'center bottom',
    opacity: 0.5,
    bottom: 100,
    [theme.breakpoints.down('lg')]: {
      bottom: -120,
      backgroundSize: '150%'
    }
  },
  innerDeco: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
  },
  decoWrap: {
    height: '100%',
    margin: 0,
    width: '100%',
    display: 'block',
    position: 'absolute',
    '& > div': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      '& svg': {
        position: 'absolute'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
