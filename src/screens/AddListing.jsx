import Item from "../components/Items.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../services/items.js"
import './AddListing.css'

export default function ItemCreate() {
    const [item, setItem] = useState({
        name: "",
        image: "",
        description: "",
    });

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdItem = await createItem(item);
        navigate(`/items/${createdItem.id}` , { replace: true });
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setItem((prev) => ({
            ...prev,
            [name]: value

        }))
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
            placeholder="Image"
            name="title"
            value={item.image}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Item Description"
            name="description"
            value={item.description}
            onChange={handleChange}
          />
          
          <button type="submit">Free Item Listing</button>
        </form>
      </div>
    );


} 