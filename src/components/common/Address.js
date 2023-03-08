import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";


const Address = () => {
  const [t] = useTranslation("common");

  return (
    <address className="col-12 col-sm-6 col-lg-4 my-5 align-self-center">
      <div className="text-center">
        <Logo></Logo>
        {t("address.fullName")}
        <br></br>
        {t("address.street")}
        <br></br>
        {t("address.city")}
      </div>
    </address>
  );
};

export default Address;
