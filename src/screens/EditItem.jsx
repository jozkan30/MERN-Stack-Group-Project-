import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateItem, getItem } from "../services/items.js";

export default function ItemEdit() {
  const [item, setItem] = useState({
    _id: "",
    title: "",
    description: "",
    image: "",
    comments: ""
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchItem();
  }, []);

  async function fetchItem() {
    let oneItem = await getItem(id);
    setItem(oneItem);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, item);
    navigate(`/items/${item._id}`, { replace: true });
  };

  const handleChange = (e) => {
    const { value, title } = e.target;

    setItem((prev) => ({
      ...prev,
      [title]: value
    }))
  };

  return (
    <div>
      <h1>Create Screen</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" ID"
          name="_id"
          value={item._id}
          onChange={handleChange}
        />
         <input
          type="text"
          placeholder="Title"
          name="title"
          value={item.title}
          onChange={handleChange}
        />
         <input
          type="text"
          placeholder="Please add a "
          name=" description"
          value={item.description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder=" Enter image URL"
          name="image"
          value={item.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Comments?"
          name="comment"
          value={item.comments}
          onChange={handleChange}
        /> 

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
