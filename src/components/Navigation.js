import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Navigation = ({selectHandler}) => {
  const [t] = useTranslation("common");

  return (
    <Nav className="w-100 justify-content-md-end">
      <NavLink to="/" exact onClick={selectHandler}>
        {t("pages.home")}
      </NavLink>
      <NavLink to="/o-nas" onClick={selectHandler}>{t("pages.about")}</NavLink>
      <NavLink to="/oferta" onClick={selectHandler}>{t("pages.services")}</NavLink>
      <NavLink to="/kontakt" onClick={selectHandler}>{t("pages.contact")}</NavLink>
    </Nav>
  );
};

Navigation.propTypes = {
  selectHandler: PropTypes.func.isRequired,
}

export default Navigation;
