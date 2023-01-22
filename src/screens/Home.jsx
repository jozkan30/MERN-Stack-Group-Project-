import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  let navigate = useNavigate();

  function handleNav() {
    navigate("/items", { replace: true })
  }
  return (
    <div>
      <h1>HEY THERE! COME GET SOME FREE SHIT!</h1>
      <p>Have you ever wanted to have some shit wihtout having to pay for that shit? Well now you can. Click below to see all of the free shit available, and click on an image to find out more details like who's giving it away and where you can pick it up. You ready to finally have some shit?!</p>
      <button onClick={handleNav}>Click to see some free shit</button>
      <h2>Meet your dev team</h2>
      {/* <img src="" alt="John"></img>
      <img src="" alt="Zack"></img>
      <img src="" alt="Justin"></img>
      <img src="" alt="Xavier"></img>
      <img src="" alt="Katherine"></img> */}
    </div>
  )
}
