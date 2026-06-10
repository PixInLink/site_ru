import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import useStyles from './hero-banner-style';

function HeroBanner(props) {
  const { classes, cx } = useStyles();
  const { children } = props;
  return (
    <div className={classes.heroBannerWrap}>
      <Container className={classes.container}>
        {children}
      </Container>
      <div className={classes.decoWrap}>
        <div className={cx(classes.deco, classes.bottom)}>
          <svg className={classes.wave}>
            <use xlinkHref="/images/saas2/deco-wave.svg#main" />
          </svg>
        </div>
        <div className={cx(classes.deco, classes.top)}>
          <div className={cx(classes.wave, classes.waveCover)} />
        </div>
      </div>
      <div className={classes.waveCover} />
    </div>
  );
}

HeroBanner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroBanner;
