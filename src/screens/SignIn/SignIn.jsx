import { useState, useEffect } from "react";
import { deleteItem, getItem } from "../../services/items.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import './SignIn.css'

export default function SignIn(){
    
    return(
    <section className="signIn">
        <Link className="signinSignUpButton" to="/sign-up">
            <button>Sign-Up</button>
        </Link>
        <form className="signInForm">
            <input className="signinInput" id="signInUserName" placeholder="Enter Username/Email"></input>
            <input className="signinInput" id="signInPassword" placeholder="Enter Password"></input>
            <Link>
                <button className="signinButton">Sign In</button>
            </Link>
        </form>
    </section>
    )
}