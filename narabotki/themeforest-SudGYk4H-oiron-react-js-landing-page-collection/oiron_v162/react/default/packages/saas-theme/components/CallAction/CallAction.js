import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { classes } = useStyles();
  return (
    <Container maxWidth="md" fixed={isDesktop}>
      <div className={classes.root}>
        <ScrollAnimation animateOnce animateIn="fadeInUpShort" offset={-100} delay={500} duration={0.5}>
          <Paper className={classes.paper}>
            <div className={classes.deco} />
            <Box mb={5}>
              <Typography variant="h4" gutterBottom display="block">
                {t('saas-landing.footer_waiting')}
              </Typography>
            </Box>
            <Button size="large" variant="contained" color="secondary" href={link.saas.contact} className={classes.button}>
              {t('saas-landing.getstarted')}
            </Button>
          </Paper>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

export default CallAction;
