import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'clinics' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
