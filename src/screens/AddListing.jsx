import Item from "../components/Items.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../services/items.js"
import './AddListing.css'

export default function ItemCreate() {
    const [item, setItem] = useState({
        title: "",
        description: "",
        image: ""
    });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdItem = await createItem({
          title: item.name,
          description: item.description,
          image: item.imageUrl
        });
        navigate(`/items/${createdItem.id}`, { replace: true });
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
          placeholder="Item Description"
          name="description"
          value={item.description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={item.imageUrl}
          onChange={handleChange}
        />
        <button type="submit">Post Item!!!</button>
      </form>
    </div>
  );
}
