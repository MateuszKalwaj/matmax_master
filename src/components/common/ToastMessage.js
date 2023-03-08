import React from "react";
import PropTypes from "prop-types";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";

const ToastMessage = ({ isSuccess, isVisible, closeHandler }) => {
  const [t] = useTranslation("common");
  return (
    <Toast
      show={isVisible}
      onClose={closeHandler}
      delay={4000}
      autohide
      style={{
        position: "fixed",
        top: "6rem",
        right: 0,
        zIndex: 20,
      }}
      className={`toast-message toast-message${
        isSuccess ? "--success" : "--fail"
      }`}
    >
      <Toast.Header className="w100 d-flex justify-content-between font-reg">
        <b>{isSuccess ? t("mailSuccess") : t("mailFailed")}</b>
      </Toast.Header>
      <Toast.Body>
        {isSuccess ? t("mailSuccessMessage") : t("mailFailedMessage")}
      </Toast.Body>
    </Toast>
  );
};

ToastMessage.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default ToastMessage;
