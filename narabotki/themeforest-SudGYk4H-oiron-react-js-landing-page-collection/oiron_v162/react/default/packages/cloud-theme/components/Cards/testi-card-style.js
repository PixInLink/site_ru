import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi_card' })((theme, _params, classes) => ({
  icon: {},
  testimonial: {
    height: 260,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(),
    border: `3px solid ${theme.palette.divider}`,
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8),
    },
    position: 'relative',
    [`& .${classes.icon}`]: {
      borderRadius: '50%',
      background: theme.palette.primary.main,
      width: 100,
      height: 100,
      top: -56,
      left: 32,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: '100px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
      '& i': {
        fontSize: 60,
        verticalAlign: 'middle',
        '&:before': {
          color: theme.palette.common.white,
          background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  text: {
    marginBottom: theme.spacing(4),
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    height: theme.spacing(9),
  },
  caption: {
    color: theme.palette.text.secondary
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
