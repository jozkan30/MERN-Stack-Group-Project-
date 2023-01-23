import React from 'react'

export default function EditItem() {
  return (
    <div>EditItem
        <form className='inputForm'>
            <input className='titleEdit' type='text'></input>
            <input className='priceEdit' type='text'></input>
            <input className='descriptionEdit' type='text'></input>
            <input className='categoryEdit' type='text'></input>
            <input className='imageEdit' type='text'></input>
        </form>
    </div>
  )
}
