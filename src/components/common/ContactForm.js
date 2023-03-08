import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import ToastMessage from "./ToastMessage";
import { Icon } from "./Icon";

const ContactForm = () => {
  const emptyMessage = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const [message, setMessage] = useState(emptyMessage);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [t] = useTranslation("common");

  const handleChange = ({ target }) => {
    setMessage({ ...message, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail(event);
  };

  const resetForm = (event) => {
    event.preventDefault();
    setMessage(emptyMessage);
  };

  const toggleShowToast = () => setIsToastOpen(!isToastOpen);

  const sendEmail = (e) => {
    setIsSendingMail(true);
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          setMessage(emptyMessage);
          setIsSuccess(true);
          toggleShowToast();
        },
        (error) => {
          setIsSuccess(false);
          toggleShowToast();
        }
      )
      .finally(() => setIsSendingMail(false));
  };

  const InvalidSpan = () => {
    const iconClasses = ['ml-1 font-xs vaS'];
    return <Icon classes={iconClasses} icon={'error_outline'}></Icon>
  };


  return (
    <div className="position-relative my-2 col-12 col-md-7 col-lg-8 order-1-md">
      <ToastMessage
        isVisible={isToastOpen}
        closeHandler={toggleShowToast}
        isSuccess={isSuccess}
      ></ToastMessage>
      <Form
        className="my-4 my-sm-5 px-0"
        onSubmit={handleSubmit}
      >
        <h3 className="pt-2 pt-sm-4 pb-2 font-md accent">
          <b>{t("form.header")}</b>
        </h3>
        <Form.Group controlId="formName">
          <Form.Label>{t("form.name")}</Form.Label>
          {message.user_name === "" && <InvalidSpan></InvalidSpan>}
          <Form.Control
            size="lg"
            type="text"
            name="user_name"
            placeholder={t("form.enterName")}
            onChange={handleChange}
            value={message.user_name}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMail">
          <Form.Label>{t("form.emailAddress")}</Form.Label>
          {message.user_email === "" && <InvalidSpan></InvalidSpan>}
          <Form.Control
            type="email"
            name="user_email"
            placeholder={t("form.enterEmail")}
            size="lg"
            onChange={handleChange}
            value={message.user_email}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>{t("form.message")}</Form.Label>
          {message.message === "" && <InvalidSpan></InvalidSpan>}
          <Form.Control
            size="lg"
            as="textarea"
            rows="5"
            name="message"
            onChange={handleChange}
            value={message.message}
            placeholder={t("form.message")}
            required
          />
        </Form.Group>
        <div className="mt-3">
          <input
            type="submit"
            className="basic-btn font-reg point"
            value={t("form.send")}
            disabled={isSendingMail}
          ></input>
          <button
            type="button"
            className="basic-btn basic-btn--form font-reg point ml-2"
            onClick={resetForm}
          >
            {t("form.reset")}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
