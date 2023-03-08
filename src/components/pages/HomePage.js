import React, { lazy, Suspense } from "react";
import Header from "../Header";
import { Helmet } from "react-helmet";
import { Loader } from "../common/Loader";

const About = lazy(() => import("../sections/About"));
const ServicesBox = lazy(() => import("../sections/ServicesBox"));

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>MATMAX | Home</title>
        <meta
          name="description"
          content="Produkujemy wysokiej jakości schody, blaty kuchenne, balustrady i meble dla gastronomii. 
          Tylko najlepsza stal i indywidualne podejście do klienta. Zapraszamy!"
        />
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="nierdzewka, nierdzewka koszalin, koszalin nierdzewka, koszalin stal nierdzewna, stal nierdzewna, 
          schody, schody koszalin, schody drewniane, schody metalowe, balustrady, blaty kuchenne, blaty nierdzewne, koszalin, szczecin, gdynia, zachodniopomorskie, pomorskie"
        />
      </Helmet>

      <Header id="logo"></Header>
      <main className="container">
        <Suspense fallback={<Loader />}>
          <About />
          <ServicesBox />
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
