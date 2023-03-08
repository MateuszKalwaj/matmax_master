import React from "react";
import { useTranslation } from "react-i18next";
import { logo } from "../model";

const Header = () => {
  const [t] = useTranslation("common");

  return (
    <div className="position-relative logo-box" id="logo">
      <header
        className="header"
        style={{
          backgroundImage: "url('/static/images/stairs/Schody-domowe.jpg')",
        }}
      />
      <hgroup className="logo">
        <div className="centered">
          <h1>
            <strong>
              <span>{logo.mat}</span>
              {logo.max}
            </strong>
          </h1>
          <p className="logo">{t("main.subtitle")}</p>
        </div>
      </hgroup>
    </div>
  );
};

export default Header;
