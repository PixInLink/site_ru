import React from 'react';
import useStyles from './deco-style';

function Decoration() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.footerDeco}>
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
      <div className={cx(classes.wave, classes.waveCover)} />
    </div>
  );
}

export default Decoration;
