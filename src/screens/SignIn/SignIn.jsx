import { useState, useEffect } from "react";
import { deleteItem, getItem } from "../../services/items.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import './SignIn.css'

export default function SignIn(){
    
    return(
    <section className="signIn">
        <button className="signinSignUpButton"  >Sign-Up</button>
        <form className="signInForm">
            <input className="signInUserName" placeholder="Enter Username/Email"></input>
            <input className="signInPassword" placeholder="Enter Password"></input>
            <button className="signinButton">Sign In</button>
        </form>
    </section>
    )
}