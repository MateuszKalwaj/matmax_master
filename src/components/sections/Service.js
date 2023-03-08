import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ImageModal from "../common/ImageModal";
import { getPhotos } from "../../model";
import ServiceArticle from "../common/ServiceArticle";

const Service = ({ name }) => {
  const [service, setService] = useState("");
  const [serviceImages, setServiceImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleShow = (index) => {
    setActiveImg(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (name) {
      setService(name);
      setServiceImages(getPhotos(name));
    }
  }, [name]);

  return (
    <>
      <ServiceArticle service={name}></ServiceArticle>
      <div className="row">
        {serviceImages.map((image, index) => {
          return (
            <div
              className="col-6 col-md-4 d-flex justify-content-center"
              key={index}
            >
              <div className="imgBox-service">
                <img
                  className="image point"
                  src={image.url}
                  alt={image.caption}
                  onClick={() => handleShow(index)}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        activeIndex={activeImg}
        handleClose={handleClose}
        images={serviceImages}
        header={service}
      ></ImageModal>
    </>
  );
};

Service.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Service;
