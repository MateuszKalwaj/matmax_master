import React from 'react';
import PropTypes from 'prop-types';
import { logo } from "../../model";

const Logo = ({invert}) => {
    return (
        <span className="logo">
        <strong className={invert ? 'light' : 'dark'}>
          <span>{logo.mat}</span>
          {logo.max}&nbsp;
        </strong>
      </span>
    );
}

Logo.propTypes = {
  invert: PropTypes.bool,
};

export default Logo;
