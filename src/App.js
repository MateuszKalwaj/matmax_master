import React, { lazy, Suspense } from "react";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Menu from "./components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import { Loader } from "./components/common/Loader";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

const App = () => {
  return (
    <>
      <Helmet>
        <title>MATMAX: nierdzewka</title>
        <meta
          name="description"
          content="Produkujemy wysokiej jakości schody, blaty kuchenne, balustrady i meble dla gastronomii. Tylko najlepsza stal i indywidualne podejście do klienta. Koszalin i całe województwo!"
        />
        <meta
          name="keywords"
          content="schody, schody drewniane, schody metalowe, balustrady, blaty kuchenne, blaty nierdzewne, stal nierdzewna, koszalin, szczecin, gdynia, zachodniopomorskie, pomorskie, matmax, mat max, mat-max, nierdzewka,  "
        />
      </Helmet>
      <Router>
        <div className="App">
          <Menu></Menu>
          <Suspense fallback={<Loader />}>
            <Route
              render={({ location }) => {
                return (
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage} />
                    <Redirect from="/home" to="/" />
                    <Route path="/o-nas" component={AboutPage} />
                    <Route
                      path="/oferta/:id/:slot"
                      exact
                      component={ServicesPage}
                    />
                    <Route path="/oferta" component={ServicesPage} />
                    <Route path="/kontakt" component={ContactPage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                );
              }}
            />
          </Suspense>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
