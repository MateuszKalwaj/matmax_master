import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SwitchLngBtn from "./SwitchLngBtn";
import Logo from "./common/Logo";
import { PHONE_NUMBER, EMAIL } from '../model'
import { scrollToHeader } from "../utils/functions";


const Footer = () => {
  const [t] = useTranslation("common");

  return (
    <footer>
      <div className="container d-flex font-light row mr-auto ml-auto">
        <div className="order-2 order-sm-1 col-12 col-sm-6 col-md-3 text-center text-sm-left">
          <Logo invert></Logo>
          <span className='d-block font-reg pt-2 pb-1'>{PHONE_NUMBER}</span>
          <span className='d-block font-reg pt-1 pb-2'>{EMAIL}</span>
        </div>
        <div className='order-1 order-sm-2 col-12 col-sm-4 col-md-6 py-3 py-sm-0 text-center text-sm-left'>
          <Link onClick={scrollToHeader} to="/" className='d-inline d-sm-block d-md-inline font-light font-reg px-2 pb-sm-1'>{t("pages.home")}</Link>
          <Link onClick={scrollToHeader} to="/o-nas" className='d-inline d-sm-block d-md-inline font-light font-reg px-2 py-sm-1'>{t("pages.about")}</Link>
          <Link onClick={scrollToHeader} to="/oferta" className='d-inline d-sm-block d-md-inline font-light font-reg px-2 py-sm-1'>{t("pages.services")}</Link>
          <Link onClick={scrollToHeader} to="/kontakt" className='d-inline d-sm-block d-md-inline font-light font-reg px-2 py-sm-1'>{t("pages.contact")}</Link>
        </div>
        <div className="order-3 col-12 col-sm-2 col-md-3 text-md-right">
            <SwitchLngBtn></SwitchLngBtn>
        </div>
        
      </div>
      
      
    </footer>
  );
};

export default Footer;
