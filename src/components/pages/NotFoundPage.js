import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function NotFoundPage() {
  const [t] = useTranslation("common");

  return (
    <>
      <Helmet>
        <title>MATMAX | 404</title>
        <meta name="description" content="Nie znaleziono takiej strony!" />
        <meta name="googlebot" content="noindex" />
      </Helmet>
      <main className="container">
        <h2>{t("notFound.header")}</h2>
        <div className="w-100 text-center centered py-3">
          <div>
            <img src="static/images/welder.png" alt="Welder icon"></img>
          </div>
          <Link className="my-3 font-md" to="/">
            {t("notFound.link")}
          </Link>
        </div>
      </main>
    </>
  );
}

export default NotFoundPage;
