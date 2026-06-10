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
      <div className={classes.decorationBg}>
        <svg className={classes.wave}>
          <use xlinkHref="/images/saas2/deco-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={4} direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={-100}
                  duration={0.5}
                >
                  <div className={classes.screenWrap}>
                    <img
                      className={cx(classes.plant1, 'img-2d3d')}
                      src={imgAPI.saas2[10]}
                      data-2d={imgAPI.saas2[9]}
                      data-3d={imgAPI.saas2[10]}
                      alt="plant"
                    />
                    <div className={classes.illustration}>
                      <figure>
                        <img src={imgAPI.saas2[19]} alt="screen" />
                      </figure>
                    </div>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <div className={classes.desc}>
                  <Title align={isMobile ? 'center' : 'left'}>
                    <span>
                      {t('saas2-landing.feature_title1')}
                      &nbsp;
                      <strong>
                        {t('saas2-landing.feature_titlestrong1')}
                      </strong>
                    </span>
                  </Title>
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('saas2-landing.feature_desc1')}
                  </h6>
                  <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                    {t('saas2-landing.see_detail')}
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <div className={classes.desc}>
                  <Title align={isMobile ? 'center' : 'right'}>
                    <span>
                      {t('saas2-landing.feature_title1')}
                      &nbsp;
                      <strong>
                        {t('saas2-landing.feature_titlestrong2')}
                      </strong>
                    </span>
                  </Title>
                  <h6 className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('saas2-landing.feature_desc2')}
                  </h6>
                  <div className={isMobile ? align.textCenter : align.textRight}>
                    <Button variant="contained" color="secondary" size="large" className={classes.btn}>
                      {t('saas2-landing.see_detail')}
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ md: 2, lg: 8 }}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInRightShort"
                  offset={-200}
                  duration={0.5}
                >
                  <div className={classes.screenWrap}>
                    <img
                      className={cx(classes.plant2, 'img-2d3d')}
                      src={imgAPI.saas2[12]}
                      data-2d={imgAPI.saas2[11]}
                      data-3d={imgAPI.saas2[12]}
                      alt="plant"
                    />
                    <div className={classes.illustration}>
                      <figure>
                        <img src={imgAPI.saas2[20]} alt="screen" />
                      </figure>
                    </div>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={cx(classes.item, classes.last)}>
          <Title align="center">
            {t('saas2-landing.feature_title3')}
            &nbsp;
            <strong>
              {t('saas2-landing.feature_titlestrong3')}
            </strong>
          </Title>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item md={10} xs={12}>
              <Box p={{ sm: 3 }}>
                <h6 className={cx(align.textCenter, text.subtitle2)}>
                  {t('saas2-landing.feature_desc3')}
                </h6>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInUpShort"
                  offset={10}
                  duration={0.5}
                >
                  <div className={classes.screenWrap}>
                    <img
                      className={cx(classes.plant3, 'img-2d3d')}
                      src={imgAPI.saas2[14]}
                      data-2d={imgAPI.saas2[13]}
                      data-3d={imgAPI.saas2[14]}
                      alt="plant"
                    />
                    <div className={cx(classes.illustration, classes.screenCenter)}>
                      <figure>
                        <img src={imgAPI.saas2[21]} alt="screen" />
                      </figure>
                    </div>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Feature.propTypes = {

};

export default Feature;
