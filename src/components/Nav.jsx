import React from "react";
import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
      <nav className="navBar">
        <NavLink className={"navBarInfo"} to="/">
          Home
        </NavLink>
        <NavLink className={"navBarInfo"} to="/items">
          All Listings {" "}
        </NavLink>
        <NavLink className={"navBarInfo"} to="/add-item">
          Add A New Item 
        </NavLink>
      </nav>
    );
  }