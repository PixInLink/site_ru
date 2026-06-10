import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './title-style';

function Title(props) {
  const { classes, cx } = useStyles();
  const { children, align } = props;
  return (
    <div className={cx(classes.title, classes[align])}>
      <h4>
        {children}
      </h4>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

Title.defaultProps = {
  align: 'left'
};

export default Title;
