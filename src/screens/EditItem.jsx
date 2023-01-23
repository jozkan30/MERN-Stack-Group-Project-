import React, { useEffect, useState } from 'react';
import '../App.css';

export default function EditItem(props) {  

  return (
    <div>
        <form className='editForm'>
            <div>Edit the title:</div>
            <input name='titleEdit' type='text' value={props.item.title}>{props.item.title}</input>
            <div>Edit the price:</div>
            <input name='priceEdit' type='text'>{props.item.price}</input>
            <div>Edit the description:</div>
            <input name='descriptionEdit' type='text'>{props.item.description}</input>
            <div>Edit the category:</div>
            <input name='categoryEdit' type='text'>{props.item.category}</input>
            <div>Edit image link:</div>
            <input name='imageEdit' type='link'>{props.item.image}</input>
        </form>
    </div>
  )
}
