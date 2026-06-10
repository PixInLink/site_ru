import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'map' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    zIndex: 10
  },
  locationWrap: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  locationItem: {
    position: 'absolute'
  },
  text: {
    paddingTop: theme.spacing(5),
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      '& span': {
        width: 20,
        height: 20,
        display: 'inline-block',
        marginRight: theme.spacing(),
        borderRadius: 3
      }
    },
    '& p': {
      marginBottom: theme.spacing(3),
      fontSize: 18,
      lineHeight: '32px',
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(6)
      }
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  titlePrimary: {
    color: theme.palette.primary.main,
    '& span': {
      background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`
    }
  },
  titleSecondary: {
    color: theme.palette.secondary.main,
    '& span': {
      background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`
    }
  },
  mapWrap: {
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto'
    }
  },
  worldMap: {
    background: 'url(/images/cloud/worldMap.svg) no-repeat center center',
    backgroundSize: '100%',
    position: 'relative',
    margin: '0 auto',
    height: 360,
    width: 580,
  },
  location: {
    position: 'absolute'
  },
  primaryColor: {},
  secondaryColor: {},
  dot: {
    borderRadius: 3,
    display: 'block',
    width: 12,
    height: 12,
    transition: 'all 0.3s ease-out',
    [`&.${classes.primaryColor}`]: {
      background: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    },
    [`&.${classes.secondaryColor}`]: {
      background: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
