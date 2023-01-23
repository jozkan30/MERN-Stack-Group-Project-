import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { getItem } from '../services/items.js';
import { useParams } from 'react-router-dom';


export default function ListingDetail() {
 
 const id = useParams()
 
 const[item, setItem] = useState({})


 async function fetchItem(){
  let oneItem = await getItem(id.id)
console.log(oneItem.description)
setItem(oneItem)
}

useEffect(()=>{
fetchItem()
},[])
  return (
    <div className='whole'>
      <div className='innerBanner'>
        
          <Link className='closeButton' to={`/items`}>Close

          </Link>
       
      </div>
      <div className='infoContainer'>
        <div className='displayDeets'>
          <div className='itemPic'>pic
          <img className='theImage' src={item.image}></img>
          </div>
          <div className='pickupDeets'>pickup deets</div>
        </div>
        <div className='buttonsContainer'>
          <div className='itemDeets'>{item.description}</div>
          <button className='edit'>Edit</button>
          <button className='iWantIt'>Gimme!</button>
        </div>
        </div>
      <form className='commentsSection'>
          <input type='text' className='commentField' placeholder='Enter Comment'></input>
          <button type='submit' className='commentButton'>⌲</button>
      </form>
    </div>
  )
}

