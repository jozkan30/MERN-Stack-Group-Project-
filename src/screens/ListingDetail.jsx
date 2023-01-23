import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { getItem, deleteItem,updateItem } from '../services/items.js';
import { useParams } from 'react-router-dom';


export default function ListingDetail() {
 
 const id = useParams()
 let remove;
 const[item, setItem] = useState({})
 const[gimmeCount, gimmeCountSet] = useState(0)
 let want;
 async function handleDelete(){
   remove = await deleteItem(id.id)
 
 }


 async function handleGimme(){
 want = () => gimmeCountSet( prev => prev +1)
updateItem(id.id)
}

 async function fetchItem(){
  let oneItem = await getItem(id.id)
//console.log(oneItem.description)
setItem(oneItem)
}
 function handleComment() {

 }

useEffect(()=>{
fetchItem()
handleDelete()
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
          <Link className='edit' to={`/items/:id/edit`}>Edit</Link>
          <Link className='iWantIt'>Gimme!</Link>
          <Link to={'/items'} className='deleteButton' onClick={remove}>Delete</Link>
        </div>
        </div>
      <form className='commentsSection' onSubmit={handleComment}>
          <input type='text' className='commentField' placeholder='Enter Comment'></input>
          <button type='submit' className='commentButton'>⌲</button>
      </form>
    </div>
  )
}

