import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { getItem } from "../services/items.js";
import { useParams } from "react-router-dom";
import { updateItem } from "../services/items.js";
import { useNavigate } from "react-router-dom";

export default function EditItem() {

  const titleRef= useRef(); 
  const priceRef = useRef() 
  const descriptionRef = useRef(); 
  const categoryRef = useRef(); 
  const imageRef = useRef(); 

  const id = useParams(); 

  let navigate = useNavigate();

  const [item, setItem] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  async function fetchItem() {
      let oneItem = await getItem(id.id);
      setItem(oneItem);
    }

  useEffect(() => {
    fetchItem();
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id.id);
    const updatedItem = {
      title: !titleRef.current.value ? item.title: titleRef.current.value,
      price: !priceRef.current.value ? item.price: priceRef.current.value,
      description: !descriptionRef.current.value ? item.description: descriptionRef.current.value,
      category: !categoryRef.current.value ? item.category: categoryRef.current.value,
      image: !imageRef.current.value ? item.image: imageRef,
    }
    const updated = await updateItem(id.id, updatedItem);
    console.log(updated); 
    navigate(`/items/${id.id}`, { replace: true });
    
  };

  return (
    <div>
      <form className="editForm" onSubmit={handleSubmit}>
        <div>Edit the title:</div>
        <input
          name="titleEdit"
          type="text"
          // onChange={handleChange}
          placeholder={item.title}
          // value={item.title}
          ref={titleRef}        
        />
        <div>Edit the price:</div>
        <input
          name="priceEdit"
          type="text"
          // onChange={handleChange}
          placeholder={item.price}
          ref={priceRef}
        />
        <div>Edit the description:</div>
        <input
          name="descriptionEdit"
          type="text"
          // onChange={handleChange}
          placeholder={item.description}
          ref={descriptionRef}
        />
        <div>Edit the category:</div>
        <input
          name="categoryEdit"
          type="text"
          // onChange={handleChange}
          placeholder={item.category}
          ref={categoryRef}
        />
        <div>Edit image link:</div>
        <input
          name="imageEdit"
          type="text"
          // onChange={handleChange}
          placeholder={item.image}
          ref={imageRef}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
