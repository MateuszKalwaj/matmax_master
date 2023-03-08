import React, { useState, useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";
import { cookiesAcceptedFlag } from "../../model";

const CookieBox = () => {
  const [show, setShow] = useState(false);
  const [t] = useTranslation("common");

  useEffect(() => {
    if (!localStorage.getItem(cookiesAcceptedFlag)) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    acceptCookies();
  };

  const acceptCookies = () => {
    localStorage.setItem(cookiesAcceptedFlag, true);
  };

  return (
    <Toast
      className="fixed-bottom toast-message toast-message--info cookie-box"
      onClose={handleClose}
      show={show}
    >
      <Toast.Header className="w-100 d-flex justify-content-between">
        Info
      </Toast.Header>
      <Toast.Body>
        <p>{t("messageCookies")}</p>
        <button className="mt-2 basic-btn point" onClick={handleClose}>
          {t("acceptCookies")}
        </button>
      </Toast.Body>
    </Toast>
  );
};

export default CookieBox;
