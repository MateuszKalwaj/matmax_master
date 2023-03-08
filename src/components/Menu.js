import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../utils/functions";
import Logo from "./common/Logo";

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleSelect = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
    scrollToTop();
  };

  return (
    <Navbar
      expanded={isExpanded}
      expand="md"
      variant="light"
      fixed="top"
      className="menu px-md-0"
    >
      <div className='container'>
      <Navbar.Brand>
        <NavLink className="m-md-0" to="/" onClick={scrollToTop}>
          <Logo></Logo>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="matmax-menu"
        onClick={() => setIsExpanded(!isExpanded)}
      ></Navbar.Toggle>
      <Navbar.Collapse id="matmax-menu" className="text-center">
        <Navigation selectHandler={handleSelect}></Navigation>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Menu;
