import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./icon.jpg"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import "../Css/ListStyle.css";

const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div>
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink 
                to="/"
                className="ListItems"
                exact activeClassName="is-active"
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className="ListItems"
                activeClassName="is-active"
              >
                About
              </NavLink>
              <NavLink
                to="services"
                className="ListItems"
                activeClassName="is-active"
              >
                Services
              </NavLink>
              <NavLink
                to="contact"
                className="ListItems"
                activeClassName="is-active"
              >
                Contact
              </NavLink>
              <NavLink
                to="policy"
                className="ListItems"
                activeClassName="is-active"
              >
                Policy
              </NavLink>
            </div>
          </nav>
          <div className="icons">
            <SearchIcon className="icon"/>
            <AccountCircleIcon className="icon"/>
            <PhoneIcon className="icon"/>
          </div>
        </div>
      </header>
    </>
  );
};

export default List;
