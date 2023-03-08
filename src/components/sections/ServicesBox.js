import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../common/ServiceCard";
import { servicesShortData } from "../../model";

const ServicesBox = () => {
  const [t] = useTranslation("common");

  return (
    
    <section className="services-box">
      <h2 className="main-page-header">{t("services.title")}</h2>
      <article className="row mx-0 pt-0 justify-content-center justify-content-sm-between services-cards">
        {servicesShortData.map((service) => {
          return (
            <ServiceCard service={service} key={service.name}></ServiceCard>
          );
        })}
      </article>
    </section>
  );
};

export default ServicesBox;
