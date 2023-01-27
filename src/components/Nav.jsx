import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
import jwtDecode from "jwt-decode";
import { signOut } from "../services/users";

export default function Nav() {
 const userKey = localStorage.getItem('token')

 function forceReload(){
  window.location.reload(false)
 }
 function handleLogOut(){
  localStorage.removeItem('token')
  forceReload()
  userKey = null
 }

 //if not logged in
// {userKey === null ? "not logged in stuff" : "logged in stuff"}

//if logged in
//userKey === 

   return (
      <nav className="navBar">
        <NavLink className={"navBarInfo"} to="/">
          Home
        </NavLink>
        <NavLink className={"navBarInfo"} to="/items">
          All Listings 
        </NavLink>
        <NavLink className={"navBarInfo"} to="/add-listing">
          Add A New Item
        </NavLink>

        {userKey === null ? 
        <div className="authButtons">
          <NavLink className={"navBarInfo"} id="signinButton" to="/sign-in">Sign In</NavLink>
          <NavLink className={"navBarInfo"} id="signupButton" to="/sign-up" >Sign Up</NavLink>
        </div>: 
          <NavLink onClick={handleLogOut} className={"navBarInfo"} id="logOutButton" to="/">Log Out</NavLink>}
      </nav>
    );
  }
