import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'


export default function Nav() {
    return (
      <nav className="navBar">
        <NavLink className={"navBarInfo"} to="/">
          Home
        </NavLink>
        <NavLink className={"navBarInfo"} to="/items">
          All Listings {" "}
        </NavLink>
        <NavLink className={"navBarInfo"} to="/add-listing">
          Add A New Item
        </NavLink>
      </nav>
    );
  }