import Item from "../components/Items.jsx";
import { useEffect, useState } from "react";
import { getItems } from "../services/items.js";
import './AllListings.css'

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const allItems = await getItems();
    setItems(allItems);
  }
  return (
    <>
    <h1>All Listings</h1>
    <div className="main">
      <div className="cards">
        {items.map((itemData) => (
          <Item item={itemData} key={itemData.id} />
        ))}
      </div>
    </div>
    </>
  );
}