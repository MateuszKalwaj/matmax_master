import React from "react";
import { useTranslation } from "react-i18next";
import { logos } from "../../model";

const Clients = () => {
  const [t] = useTranslation("common");
  return (
    <div className='mb-5 mt-3'>
      <h3 className="mt-3 mb-2 font-xl font-blue accent">
        <strong>{t("clients.header")}</strong>
      </h3>
      <div className="row justify-content-center justify-content-lg-between align-items-center mb-5">
        {logos.map((logo) => {
          return (
            <div
              key={logo.name}
              className="imgBox-clients col-12 col-sm-6 col-md-3 my-5 my-sm-4"
            >
              <hr className="d-sm-none m-0 mb-5"></hr>
              <img
                className="image image-contain image-grey"
                src={logo.src}
                alt={logo.name}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
