import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  let navigate = useNavigate();

  function handleNav() {
    navigate("/items", { replace: true })
  }
  return (
    <>
    <div className="heading">
      <h1>HEY THERE! COME GET SOME FREE STUFF</h1>
      </div>
      <div className="body">
      <p>Have you ever wanted to have some stuff wihtout having to pay for that? Well now you can. Click below to see all of the free stuff available, and click on an image to find out more details like who's giving it away and where you can pick it up. You ready to finally have some stuff?!</p>
      <button onClick={handleNav}>Click to see some free stuff</button>
      </div>
      <div className="devTeam">
      <h2>Meet your dev team</h2>
      <img src="" alt="John"></img>
      <p>Synergy-seeker. Game-changer. Value-architect.</p>
      <img src="" alt="Zack"></img>
      <p>I'm good.</p>
      <img src="" alt="Justin"></img>
      <p>Do whatever you think is good.</p>
      <img src="" alt="Xavier"></img>
      <p>Write your own story.</p>
      <img src="" alt="Katherine"></img>
      <p>I don't have anything right now. Sorry.</p>
    </div>
    </>
  )
}
