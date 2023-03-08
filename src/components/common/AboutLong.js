import React from "react";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";
import {scrollToHeader} from "../../utils/functions";

const AboutLong = ({classes}) => {
  const [t] = useTranslation("common");

  return (
    <article className={`mb-3 ${classes}`}>
      <p className='accent'>{t("about.textExtra.first")}</p>
      <p>
        <b>{t("about.textExtra.secondBold")}</b>
      </p>
      <p>{t("about.textExtra.third")}</p>
      <ul className='article__list mb-3'>
          <li className='article__list-item'>{t("about.textExtra.thirdList.first")}</li>
          <li className='article__list-item'>{t("about.textExtra.thirdList.second")}</li>
          <li className='article__list-item'>{t("about.textExtra.thirdList.third")}</li>
          <li className='article__list-item'>{t("about.textExtra.thirdList.fourth")}</li>
          <li className='article__list-item'>{t("about.textExtra.thirdList.fifth")}</li>
      </ul>
      <p>{t("about.textExtra.fourth")}</p>
      <p>
        <span>{t("about.textExtra.fifth")}</span>
        <Link
          to="/kontakt"
          type="button"
          className="point"
          onClick={scrollToHeader}
        >
          {t("about.textExtra.sixth")}
        </Link>
      </p>
    </article>
  );
};

export default AboutLong;
