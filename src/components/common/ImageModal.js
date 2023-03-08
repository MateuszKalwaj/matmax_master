import React from "react";
import PropTypes from 'prop-types';
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
import ImageCarousel from "./ImageCarousel";

const ImageModal = ({ isOpen, handleClose, images, activeIndex, header }) => {
  const [t] = useTranslation("common");
  return (
    <Modal show={isOpen} onHide={handleClose} centered={true} size="lg">
      <div className="m0 p0">
        <Modal.Header className="py-2" closeButton>
          <Modal.Title>
            <h6 className="m-0 pad-1 font-md">{t(`services.${header}`)}</h6>
          </Modal.Title>
        </Modal.Header>
        <ImageCarousel
          images={images}
          activeIndex={activeIndex}
        ></ImageCarousel>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeIndex: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
}

export default ImageModal;
