import React from 'react';
import '../App.css';
export default function ListingDetail() {
  return (
    <div className='whole'>
      <div className='innerBanner'>
          <button className='closeButton'>Close</button>
      </div>
      <div className='infoContainer'>
        <div className='displayDeets'>
          <div className='itemPic'>pic</div>
          <div className='pickupDeets'>pickup deets</div>
        </div>
        <div className='buttonsContainer'>
          <div className='itemDeets'>deets</div>
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

