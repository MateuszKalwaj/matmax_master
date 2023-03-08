import React from "react";
import { useTranslation } from "react-i18next";

const SwitchLngBtn = () => {
  const [i18n] = useTranslation("common");
  const lng = { pl: "pl", en: "en" };

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button onClick={() => changeLng(lng.pl)} className="btn-language font-light font-reg px-3 point">
          PL
      </button>
      <button onClick={() => changeLng(lng.en)} className="btn-language font-light font-reg px-3 point">
      EN
    </button>
  </>
  );
};

export default SwitchLngBtn;
