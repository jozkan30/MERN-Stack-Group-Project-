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

function handleComment (){
  
}

useEffect(()=>{
fetchItem()
},[])
  return (
    <div className='whole'>
      <div className='innerBanner'>  
        <Link className='closeButton' to={`/items`}>Close</Link>
      </div>
      <div className='infoContainer'>
        <div className='displayDeets'>
          <div className='itemPic'>
          <img className='theImage' src={item.image} style={{maxWidth: 400}}></img>
          </div>
          <div className='pickupDeets'>
            <p>{item.comments}</p>
            <p>This is where the comments will go</p>
          </div>
        </div>
        <div className='buttonsContainer'>
          <div className='itemDeets'>{item.description}</div>
          <Link className='editButton' to={`/items/${item._id}/edit`} params={{item: 'item'}}>Edit</Link>
          <button className='iWantIt'>Gimme!</button>
        </div>
        </div>
      <form className='commentsSection' onSubmit={handleComment}>
          <input type='text' className='commentField' placeholder='Enter Comment'></input>
          <button type='submit' className='commentButton'>⌲</button>
      </form>
    </div>
  )
}

