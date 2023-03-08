import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { Loader } from "../common/Loader";

const Map = lazy(() => import("../common/Map"));
const ContactForm = lazy(() => import("../common/ContactForm"));
const Address = lazy(() => import("../common/Address"));
const ContactButtons = lazy(() => import("../common/ContactButtons"));

const ContactPage = () => {
  const [t] = useTranslation("common");

  return (
    <>
      <Helmet>
        <title>MATMAX | Kontakt</title>
        <meta
          name="description"
          content="Kontakt w sprawie schodów, balustrad, bądź innego dowolnego projektu."
        />
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="kontakt, nierdzewka, nierdzewka koszalin, koszalin nierdzewka, koszalin stal nierdzewna, stal nierdzewna, 
          schody, schody koszalin, schody drewniane, schody metalowe, balustrady, blaty kuchenne, blaty nierdzewne, koszalin, szczecin, gdynia, zachodniopomorskie, pomorskie"
        />
      </Helmet>
      <main className="container">
        <Suspense fallback={<Loader />}>
          <section>
            <h2>{t("pages.contact")}</h2>
            <div className="w-100 row mx-auto header-after-space">
              <Map></Map>
              <Address></Address>
              <ContactButtons></ContactButtons>
              <ContactForm></ContactForm>
            </div>
          </section>
        </Suspense>
      </main>
    </>
  );
};
export default ContactPage;
