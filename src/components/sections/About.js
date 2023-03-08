import React from "react";
import { useTranslation } from "react-i18next";
import {Link} from "react-router-dom";
import AboutShort from "../common/AboutShort";
import {scrollToHeader} from "../../utils/functions";

const About = () => {
  const [t] = useTranslation("common");

  return (
    <section>
      <h2 className="main-page-header">{t('about.title')}</h2>
      <AboutShort></AboutShort>
      <Link
          to="/o-nas"
          type="button"
          className="mt-3 ml-2 basic-btn point"
          onClick={scrollToHeader}
        >
          {t("more")}
        </Link>
    </section>
  );
};

export default About;
