import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './title-style';

function TitleSecondary(props) {
  const { classes, cx } = useStyles();
  const { align, children } = props;
  return (
    <div className={cx(classes.titleSecondary, classes[align])}>
      <h3>
        {children}
      </h3>
    </div>
  );
}

TitleSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

TitleSecondary.defaultProps = {
  align: 'left'
};

export default TitleSecondary;
