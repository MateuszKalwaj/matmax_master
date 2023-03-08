import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Loader } from "../common/Loader";

const ServicesBox = lazy(() => import("../sections/ServicesBox"));
const AboutShort = lazy(() => import("../common/AboutShort"));
const AboutLong = lazy(() => import("../common/AboutLong"));
const Image = lazy(() => import("../common/Image"));
const Clients = lazy(() => import("../common/Clients"));

const AboutPage = () => {
  const [t] = useTranslation("common");

  return (
    <>
      <Helmet>
        <title>MATMAX | O nas</title>
        <meta
          name="description"
          content="Zajmujemy się produkcją wyrobów ze stali nierdzewnej od 1998 roku. Posiadamy bogate portfolio zadowolonych klientów. 
          Tylko najlepsza stal i indywidualne podejście. Zapraszamy!"
        />
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="nierdzewka, nierdzewka koszalin, koszalin nierdzewka, koszalin stal nierdzewna, stal nierdzewna, 
          schody, schody koszalin, schody drewniane, schody metalowe, balustrady, blaty kuchenne, blaty nierdzewne, koszalin, szczecin, gdynia, zachodniopomorskie, pomorskie"
        />
      </Helmet>
      <main className="container">
        <Suspense fallback={<Loader />}>
          <section>
            <h2>{t("pages.about")}</h2>
            <div className="row justify-content-between">
              <AboutShort classes="col-12 col-md-7 col-lg-6 pr-md-5"></AboutShort>
              <div className="col-12 col-md-5 col-lg-6 pl-md-5 my-4 image-article">
                <Image source="static/images/work.jpg" alt="About us"></Image>
              </div>
              <AboutLong classes="col-12"></AboutLong>
            </div>
            <Clients></Clients>
          </section>
          <ServicesBox />
        </Suspense>
      </main>
    </>
  );
};

export default AboutPage;
