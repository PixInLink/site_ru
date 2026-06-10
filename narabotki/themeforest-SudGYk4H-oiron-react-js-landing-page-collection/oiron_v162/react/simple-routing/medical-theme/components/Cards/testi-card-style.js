import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'testi_card' })((theme, _params, classes) => ({
  title: {},
  testiCard: {
    direction: 'ltr',
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(6, 2, 0, 0),
    width: 300,
    height: 300,
    borderRadius: '0 50% 50% 50%',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      width: 280,
      height: 280
    },
    '& p': {
      height: 100,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(2),
      overflow: 'hidden',
    }
  },
  rating: {
    marginLeft: theme.spacing(3)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    border: '1px solid #FFF',
    boxSizing: 'content-box',
    marginLeft: theme.spacing(1),
    borderRadius: '50% 50% 0 50% !important',
    boxShadow: theme.shadows[8]
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(-10),
    justifyContent: 'flex-end',
    marginRight: theme.spacing(5),
    position: 'relative',
    [`& .${classes.avatar}`]: {
      width: 70,
      height: 70,
    },
    [`& .${classes.title}`]: {
      fontWeight: theme.typography.fontWeightRegular
    },
  },
  name: {
    textAlign: 'right',
    marginLeft: theme.spacing(2),
    '& h6': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
