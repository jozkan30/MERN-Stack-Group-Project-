import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import '../App.css';
import { getItem } from '../services/items.js';
import { useParams } from 'react-router-dom';



export default function ListingDetail() {
 const id = useParams()
 
 const[item, setItem] = useState({})


 async function fetchItem(){
  let oneItem = await getItem(id.id)
setItem(oneItem)
}


  useEffect(() => {
    fetchItem();
  }, []);

useEffect(()=>{
fetchItem()
},[])


  return (
    <div className="whole">
      <div className="innerBanner">
        <Link className="closeButton" to={`/items`}>
          Close
        </Link>
      </div>
      <div className='infoContainer'>
        <div className='displayDeets'>
          <div className='itemPic'>
            <h1> {item.title} </h1>
          <img className='theImage' src={item.image}></img>
          </div>
          <div className='pickupDeets'>pickup deets</div>
        </div>
        <div className="buttonsContainer">
          <div className="itemDeets">
            
            <p>{item.description}</p>
            
            </div>
          <button className="edit">Edit</button>
          <button className="iWantIt">Gimme!</button>
        </div>
        </div>

      
      <form className='commentsSection'>
          <input 
          type='text' 
          className='commentField' 
          placeholder='Enter Comment' 
          name="comment"
          ></input>

          <button type='submit' className='commentButton'>⌲</button>
      </form>
    </div>
  );
}
