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
      <h1>HEY THERE! COME GET SOME FREE SHIT!</h1>
      </div>
      <div className="body">
      <p>Have you ever wanted to have some shit wihtout having to pay for that shit? Well now you can. Click below to see all of the free shit available, and click on an image to find out more details like who's giving it away and where you can pick it up. You ready to finally have some shit?!</p>
      <button onClick={handleNav}>Click to see some free shit</button>
      </div>
      <div className="devTeam">
      <h2>Meet your dev team</h2>
      {/* <img src="" alt="John"></img>
      <p>A little blurby blurb about each of us.</p>
      <img src="" alt="Zack"></img>
      <p>A little blurby blurb about each of us.</p>
      <img src="" alt="Justin"></img>
      <p>A little blurby blurb about each of us.</p>
      <img src="" alt="Xavier"></img>
      <p>A little blurby blurb about each of us.</p>
      <img src="" alt="Katherine"></img>
       */}
    </div>
    </>
  )
}
