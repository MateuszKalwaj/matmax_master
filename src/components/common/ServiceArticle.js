import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { SERVICES } from "../../model";

const ServiceArticle = ({ service }) => {
  const [t] = useTranslation("common");
  return (
    <>
      <h3 hidden>{t(`services.${service}`)}</h3>
      <article className="my-4">
        {service === SERVICES.gastronomy && (
          <>
            <p className='accent pt-2'>
              <b>{t("services.counterTopsText.firstBold")}</b>
            </p>
            <p>{t("services.counterTopsText.second")}</p>
            <ul className="article__list mb-3">
              <li className="article__list-item">
                {t("services.counterTopsText.secondList.first")}
              </li>
              <li className="article__list-item">
                {t("services.counterTopsText.secondList.second")}
              </li>
              <li className="article__list-item">
                {t("services.counterTopsText.secondList.third")}
              </li>
            </ul>
          </>
        )}
        <p className='accent pt-2'>
          <b>{t(`services.${service}Text.firstBold`)}</b>
        </p>
        <p>{t(`services.${service}Text.second`)}</p>
        {service !== SERVICES.railingsPaint && (
          <p>{t(`services.${service}Text.third`)}</p>
        )}
      </article>
    </>
  );
};

ServiceArticle.propTypes = {
  service: PropTypes.string,
};

export default ServiceArticle;
