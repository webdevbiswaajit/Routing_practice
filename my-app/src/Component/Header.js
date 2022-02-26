import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contuct">Contuct</NavLink>
      <NavLink to="/services">Services</NavLink>
    </div>
  );
}

export default Header;
