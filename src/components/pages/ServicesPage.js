import React, { useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { services } from "../../model";
import { Helmet } from "react-helmet";
import { Loader } from "../common/Loader";

const ServiceList = lazy(() => import("../common/ServiceList"));
const Service = lazy(() => import("../sections/Service"));

const ServicesPage = (props) => {
  const [t] = useTranslation("common");
  const [service, setService] = useState({});

  useEffect(() => {
    const _id = props.match.params.id;
    if (_id) {
      setService(findService(_id));
    } else {
      setService(services[0]);
    }
  }, [props.match.params.id]);

  const findService = (id) => {
    return services.find((service) => parseInt(id) === service.id);
  };

  return (
    <>
      <Helmet>
        <title>MATMAX | Oferta</title>
        <meta
          name="description"
          content="W ofercie posiadamy m.in. schody, poręcze, balustrady, blaty kuchenne, meble gastronomiczne. 
          Gwarantujemy najwyższą jakość dostarczanych materiałów."
        />
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="nierdzewka, stal nierdzewna, oferta, balustrady metalowe, balustrady drewniane,
          schody, schody koszalin, schody drewniane, schody metalowe, balustrady, blaty kuchenne, blaty nierdzewne, koszalin, szczecin, gdynia, zachodniopomorskie, pomorskie"
        />
      </Helmet>
      <main className="container">
        <section>
          <h2>{t("services.title")}</h2>
          <Suspense fallback={<Loader />}>
            <ServiceList
              services={services}
              activeId={service.id}
            ></ServiceList>
            {service.name ? <Service name={service.name}></Service> : null}
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
