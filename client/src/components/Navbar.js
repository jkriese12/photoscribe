import React from "react";
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        <Link to="/">
          <FaAddressCard size="2em" color="#fff" />
          <b> PhotoScribe</b>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
