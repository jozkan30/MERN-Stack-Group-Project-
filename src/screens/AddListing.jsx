import Item from "../components/Items.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../services/items.js";
import "./AddListing.css";

export default function ItemCreate() {
  const [item, setItem] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
    
    
    
  });
  
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdItem = await createItem({
      title: item.name,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.imageURL,
    });
    navigate(`/items/${createdItem.id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          name="name"
          value={item.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Item Price"
          name="price"
          value={item.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Item Description"
          name="description"
          value={item.description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={item.category}
          onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Image URL"
            name="imageUrl"
            value={item.imageUrl}
            onChange={handleChange}
        />
        <img src={item.imageUrl} alt="item" />
        <button type="submit">Post Item!!!</button>
      </form>
    </div>
  );
}

