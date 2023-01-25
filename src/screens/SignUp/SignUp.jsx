import { useState, useEffect } from "react";
import { deleteItem, getItem } from "../../services/items.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import './SignUp.css'

export default function SignUp(){
    
    return(
        <section className="signUp">
                <Link className= "signupSignInButton" id="signupSignInButton" to="/sign-in" >
                    <button>Sign-in</button>
                </Link>
            <form className="signUpForm">
                <input className="signupInput" id="signupUsername" type="text" placeholder="Enter Username"></input>
                <input className="signupInput" id="signupPassword" type="text" placeholder="Enter Password"></input>
                <input className="signupInput" id="signupPasswordConfirm" type="text" placeholder="Confirm Password"></input>
                <Link className="signupButtonLink">
                    <button className="signupButton" type='submit'>Sign Up!</button>
                </Link>
            </form>
        </section>
    )
}