import React from "react";
import { Icon } from "./Icon";
import { PHONE_NUMBER, EMAIL } from '../../model'

const ContactButtons = () => {

  const Contact = ({ data, hrefPrefix, icon }) => {
    const iconClasses = ['align-middle', 'pr-2', 'd-block', 'd-sm-inline'];
    return (
      <div className={`text-center my-3 my-md-5 contact-box`}>
        <a className="d-block p-4" draggable="false" href={hrefPrefix+data} rel="noopener noreferer">
          <Icon icon={icon} classes={iconClasses}></Icon>
          <span className="align-middle">{data}</span>
        </a>
      </div>
    );
  };

  return (
    <div className="order-2-md col-12 col-md-5 col-lg-4 my-3 my-md-5 mt-sm-5 d-flex justify-content-center align-items-center align-items-md-end flex-column p-md-0 px-lg-3">
      <Contact data={PHONE_NUMBER} hrefPrefix="tel:" icon="phone"></Contact>
      <Contact data={EMAIL} hrefPrefix="mailto:" icon="mail_outline" ></Contact>
    </div>
  );
};

export default ContactButtons;
