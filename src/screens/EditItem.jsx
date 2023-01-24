import React, { useEffect, useState } from "react";
import "../App.css";
import { getItem } from "../services/items.js";
import { useParams } from "react-router-dom";
import { updateItem } from "../services/items.js";
import { useNavigate } from "react-router-dom";

export default function EditItem() {
  const id = useParams();

  const [item, setItem] = useState({});

  let navigate = useNavigate();

  async function fetchItem() {
    let oneItem = await getItem(id.id);
    setItem(oneItem);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem({...item});
    navigate(`/items/${item.id}`, { replace: true });
};

  const handleChange = (e) => {
      const { value, name } = e.target;
      setItem({...item, [name]: value });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <form className="editForm" onSubmit={handleSubmit}>
        <div>Edit the title:</div>
        <input
          name="titleEdit"
          type="text"
          onChange={handleChange}
        />
        <div>Edit the price:</div>
        <input
          name="priceEdit"
          type="text"
          onChange={handleChange}
        />
        <div>Edit the description:</div>
        <input
          name="descriptionEdit"
          type="text"
          onChange={handleChange}
        />
        <div>Edit the category:</div>
        <input
          name="categoryEdit"
          type="text"
          onChange={handleChange}
        />
        <div>Edit image link:</div>
        <input
          name="imageEdit"
          type="link"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
