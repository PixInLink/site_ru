import React from 'react';
import useStyles from './decoration-style';

export default function FormDeco() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.cloudDeco}>
      <div className={classes.leftDeco}>
        <svg className={cx(classes.cloud, classes.big)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
        <svg className={cx(classes.cloud, classes.small)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
      </div>
      <div className={classes.rightDeco}>
        <svg className={cx(classes.cloud, classes.big)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
        <svg className={cx(classes.cloud, classes.small)}>
          <use xlinkHref="/images/cloud/cloud_deco.svg#main" />
        </svg>
      </div>
    </div>
  );
}
