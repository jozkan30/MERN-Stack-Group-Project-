import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

export default function Home() {
  let navigate = useNavigate();

  function handleNav() {
    navigate("/items", { replace: true })
  }
  return (
    <div className="container">
    <div className="heading">
      <h1>HEY THERE! COME GET SOME FREE STUFF ?</h1>
      <p>Have you ever wanted to have some stuff wihtout having to pay for that? Well now you can. Click below to see all of the free stuff available, and click on an image to find out more details like who's giving it away and where you can pick it up. You ready to finally have some stuff?!</p>
      <button onClick={handleNav}>Click to see some free stuff</button>
      </div>
      <div className="devTeam">
      <h2>Meet your dev team</h2>
      <img src="https://pbs.twimg.com/media/B8wTjrKCEAE2O4P.jpg" alt="John"></img>
      <p>Synergy-seeker. Game-changer. Value-architect.</p>
      <img src="https://i.imgur.com/Lpmwvql.png" alt="Zack"></img>
      <p>Swapped out Cow tipping for Coding</p>
      <img src="http://www.gayot.com/wp-content/uploads/2015/06/roger-verg%C3%A9.jpg" alt="Justin"></img>
      <p>Do whatever you think is good.</p>
      <img src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fc6d72fca-533a-11e7-bb68-01a62c2a3512.jpg?crop=1500%2C844%2C0%2C78&resize=1200" alt="Xavier"></img>
      <p>Write your own story.</p>
      <img src="https://i.imgur.com/PZF9MKV.png" alt="Katherine"></img>
      <p>Just here to have some fun and code. Hopefully those end up being the same thing.</p>

    </div>
    </div>

  )
}
