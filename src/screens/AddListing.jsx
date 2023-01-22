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

    // new state variable to keep track of the selected file
    const [file, setFile] = useState(null);

    let navigate = useNavigate();

    // function to handle file input change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // create a form data with the file and other data
        const formData = new FormData();
        formData.append("image", file);
        formData.append("name", item.name);
        formData.append("description", item.description);
        // send the form data to the server
        const createdItem = await createItem(formData);
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
          <input type="file" name="image" onChange={handleFileChange} />
          <input
            type="text"
            placeholder="Item Description"
            name="description"
            value={item.description}
            onChange={handleChange}
          />
          
          <button type="submit">Post Item!!!</button>
        </form>
      </div>
    );


}
