import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useTextAlign, useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import useStyles from './feature-style';

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();

  const { t } = useTranslation('common');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg className={classes.wave}>
          <use xlinkHref="/images/saas/deco-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={2} direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 8 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={100}
                  delay={500}
                  duration={0.5}
                >
                  <div className={classes.illustrationLeft}>
                    <figure className={cx(classes.figure, classes.graphic)}>
                      <img
                        src={imgAPI.saas[10]}
                        data-2d={imgAPI.saas[9]}
                        data-3d={imgAPI.saas[10]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.desc}>
                <Title align={isMobile ? 'center' : 'left'}>
                  <span>
                    {t('saas-landing.feature_title1')}
                    &nbsp;
                    <strong>
                      {t('saas-landing.feature_titlestrong1')}
                    </strong>
                  </span>
                </Title>
                <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                  {t('saas-landing.feature_desc1')}
                </h6>
                <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                  {t('saas-landing.see_detail')}
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <div>
                <Title align={isMobile ? 'center' : 'right'}>
                  <span>
                    {t('saas-landing.feature_title1')}
                    &nbsp;
                    <strong>
                      {t('saas-landing.feature_titlestrong2')}
                    </strong>
                  </span>
                </Title>
                <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                  {t('saas-landing.feature_desc2')}
                </h6>
                <div className={isMobile ? align.textCenter : align.textRight}>
                  <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                    {t('saas-landing.see_detail')}
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInRightShort"
                offset={200}
                delay={500}
                duration={0.5}
              >
                <div className={classes.illustrationRight}>
                  <figure className={cx(classes.figure, classes.graphic)}>
                    <img
                      src={imgAPI.saas[12]}
                      data-2d={imgAPI.saas[11]}
                      data-3d={imgAPI.saas[12]}
                      className="img-2d3d"
                      alt="illustration"
                    />
                  </figure>
                </div>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
        <div className={cx(classes.item, classes.last)}>
          <Title align="center">
            {t('saas-landing.feature_title3')}
            &nbsp;
            <strong>
              {t('saas-landing.feature_titlestrong3')}
            </strong>
          </Title>
          <div className={classes.tab}>
            <Grid container justifyContent="center" spacing={6}>
              <Grid item md={10} xs={12}>
                <Box p={{ md: 6 }}>
                  <h6 className={cx(align.textCenter, text.subtitle2)}>
                    {t('saas-landing.feature_desc3')}
                  </h6>
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={10}
                    delay={500}
                    duration={0.5}
                  >
                    <div className={classes.illustrationCenter}>
                      <figure className={classes.graphic}>
                        <img
                          src={imgAPI.saas[14]}
                          data-2d={imgAPI.saas[13]}
                          data-3d={imgAPI.saas[14]}
                          className="img-2d3d"
                          alt="illustration"
                        />
                      </figure>
                    </div>
                  </ScrollAnimation>
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feature;
