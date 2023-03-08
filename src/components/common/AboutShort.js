import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const AboutShort = ({ classes }) => {
  const [t] = useTranslation("common");

  return (
    <article className={classes}>
      <p className='accent'>{t("about.textShort.first")}</p>
      <p>
        {t("about.textShort.second")}
        <strong>{t("about.textShort.thirdBold")}</strong>
      </p>
      <p className='mb-0'>{t("about.textShort.fourth")}</p>
    </article>
  );
};

AboutShort.propTypes = {
  classes: PropTypes.string,
};

export default AboutShort;
