import { useState, useEffect } from "react";
import { deleteItem, getItem } from "../../services/items.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import './SignUp.css'

export default function SignUp(){
    
    return(
        <section className="signUp">
            <Link className= "signupUsername" id="signupSignInButton" to="/sign-in" >Sign-in</Link>
            <form className="signUpForm">
                <input className= "signupUsername" type="text" placeholder="Enter Username"></input>
                <input className= "signupPassword" type="text" placeholder="Enter Password"></input>
                <input className= "signupPasswordConfirm" type="text" placeholder="Confirm Password"></input>
                <Link className="signupButton" type='submit'>Sign Up!</Link>
            </form>
        </section>
    )
}