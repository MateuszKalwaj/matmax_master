import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { scrollToHeader } from "../../utils/functions";

const ServiceCard = ({ service }) => {
  const [t] = useTranslation("common");
  const slot = t(`services.${service.name}`).replace(/\s/g, "-").toLowerCase();

  return (
    <>
      <div className="col-11 col-sm-6 px-0 my-3 my-lg-4 rounded service-card-wrapper">
        <div>
          <Link
            to={`/oferta/${service.id}/${slot}`}
            className="text-center py-2 mt-3 rounded card-link"
            onClick={scrollToHeader}
          >
            <Card className="service-card my-2">
              <div className="imgBox-card rounded">
                <Card.Img
                  variant="top"
                  src={service.image}
                  className="image rounded"
                  alt={service.name}
                />
              </div>
              <Card.ImgOverlay className="d-flex justify-content-center align-items-center card-overlay">
                <Card.Title className="card-title d-flex justify-content-center align-items-center">
                  <h3 className="mb-0 px-4">{t(`services.${service.name}`)}</h3>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
