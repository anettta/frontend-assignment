import React from "react";
import logo from "./images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <img className="logo" src={logo} alt="Timescale" />
      <hr className="logo-bottom-border"></hr>
    </>
  );
};

export default Navbar;
