import Item from "../components/Items.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../services/items.js"
import './AddListing.css'

export default function ItemCreate() {
    const [item, setItem] = useState({
        name: "",
        description: "",
        
    });

    // new state variable to keep track of the selected file
    const [file, setFile] = useState(null);
    // new state variable to keep track of the image preview
    const [preview, setPreview] = useState(null);

    let navigate = useNavigate();

    // function to handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        // create a object URL to show the preview
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
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
        <input
          type="text"
          placeholder="Item Description"
          name="description"
          value={item.description}
          onChange={handleChange}
        />
        <label htmlFor="custom-file-input">Click To Upload Shitty Picture</label>
        <input type="file" name="image" onChange={handleFileChange} className="custom-file-input" id="custom-file-input" />
        {preview && <img src={preview} alt="preview" width="200" height="200" />}
        {!preview && <p>No image selected</p>}
        <button type="submit">Post Item!!!</button>
      </form>
    </div>
  );
}

