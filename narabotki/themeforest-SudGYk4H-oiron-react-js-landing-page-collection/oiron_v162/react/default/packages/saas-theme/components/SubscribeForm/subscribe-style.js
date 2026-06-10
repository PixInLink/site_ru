import { makeStyles } from 'tss-react/mui';
import { darken, lighten } from '@mui/material/styles';
const waveDecoLight = '/images/saas/deco-wave-light.png';
const waveDecoDark = '/images/saas/deco-wave-dark.png';

const subscribeStyles = makeStyles({ uniqId: 'subscribe' })(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(10),
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.light, 0.8),
    '& > div': {
      position: 'relative'
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 140,
      left: 0,
      transform: 'scaleY(-1)',
      transformOrigin: 'top center',
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '-210px 0px',
      backgroundImage: theme.palette.mode === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`
    }
  },
  form: {
    position: 'relative',
    marginTop: theme.spacing(2)
  },
  field: {
    '& input': {
      paddingRight: 150,
      paddingLeft: theme.spacing(3),
      width: '100%',
      borderRadius: 56,
      height: 40,
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '& > div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  btn: {
    position: 'absolute',
    right: theme.spacing(),
    top: 5,
    width: 140,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default subscribeStyles;
