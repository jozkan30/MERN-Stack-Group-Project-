import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">

      <div className="contact-header">
      <h3 className="keepInTouch"> Keep In Touch </h3>
      <input 
      type="text"
      placeholder="Please Enter Email"
      alt="email"
      className="enter-email"
      />
      </div>
      
    
      <div className="contact-methods">
      <p><a href="mailto:someone@example.com">
      <span class="material-symbols-outlined">mail</span>
      </a>
      </p>
      <p>
        <span class="material-symbols-outlined">call</span> Give us a call
      </p>
      <span class="material-symbols-outlined">account_circle</span>
      
      <p> 123 4th Avenue New York, NY 10009</p>
      </div>
      
    </div>
  );
}
