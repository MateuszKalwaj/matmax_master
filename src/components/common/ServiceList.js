import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import { scrollToHeader } from "../../utils/functions";

const ServiceList = ({ services, activeId }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [t] = useTranslation("common");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClick = () => {
    scrollToHeader();
    toggleDropdown();
  };

  const createUrl = ({ id, name }) => {
    return `/oferta/${id}/${t(`services.${name}`)
      .replace(/\s/g, "-")
      .toLowerCase()}`;
  };

  return (
    <>
      <ul className="nav show-md service-nav my-2 my-md-4">
        {services.map((service) => {
          return (
            <li
              className={`nav-link text-center ${
                service.id === activeId ? "active-service" : ""
              }`}
              key={service.name}
            >
              <Link
                className={` ${service.id === activeId ? "active" : ""}`}
                to={createUrl(service)}
                onClick={scrollToHeader}
              >
                {t(`services.${service.name}`)}
              </Link>
            </li>
          );
        })}
      </ul>
      <Dropdown
        className="hide-md"
        show={isDropdownOpen}
        onClick={toggleDropdown}
      >
        {services.map((service) => {
          return (
            service.id === activeId && (
              <Dropdown.Toggle
                id="dropdown-toggle"
                className="font-md service-nav hover-lightBlue focus-lightBlue"
                key={service.name}
              >
                {t(`services.${service.name}`)}
              </Dropdown.Toggle>
            )
          );
        })}
        <Dropdown.Menu className="service-dropdown w-100">
          {services.map((service) => {
            return (
              service.id !== activeId && (
                <Link
                  className={`d-block w-100 font-reg p-3 ${
                    service.id === activeId ? "active" : ""
                  }`}
                  to={createUrl(service)}
                  onClick={handleClick}
                  key={service.name}
                >
                  {t(`services.${service.name}`)}
                </Link>
              )
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeId: PropTypes.number,
};

export default ServiceList;
