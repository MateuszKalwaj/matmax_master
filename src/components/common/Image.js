import React from "react";
import PropTypes from "prop-types";

const Image = ({ source, alt }) => {
  return <img className="image" src={source} alt={alt}></img>;
};

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
