import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
import { useState } from "react";


export default function Nav() {
  const [signedin, setSignedIn] = usestate(authorized);

  const buttons = ['signIn', 'signUp', 'logOut']

  const authorized = null;

  const clickSignIn = setSignedIn(authorized = true)

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
        <div className="authButtons">
        signedin === null ? return(<NavLink className={"navBarInfo"} id="signinButton" to="/sign-in">Sign In</NavLink>
        <NavLink className={"navBarInfo"} id="signupButton" to="/sign-up" >Sign Up</NavLink>)
        </div>
      </nav>
    );
  }