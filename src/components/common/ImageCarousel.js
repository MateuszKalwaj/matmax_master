import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

const ImageCarousel = ({ images, activeIndex }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    setIndex(activeIndex);
  }, [activeIndex]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="m-2">
      {images.map((image, index) => {
        return (
          <CarouselItem key={index}>
            <figure className="imgBox-carousel mb-0">
              <img
                src={image.url}
                className="image image-contain"
                alt={image.caption}
              ></img>
            </figure>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default ImageCarousel;
