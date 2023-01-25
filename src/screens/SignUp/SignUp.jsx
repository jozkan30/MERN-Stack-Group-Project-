import { useState, useEffect } from "react";
import { deleteItem, getItem } from "../../services/items.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../ListingDetail.jsx'
export default function ItemDetail() {
  const [item, setItem] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetchItem();
  }, []);
  async function fetchItem() {
    let oneItem = await getItem(id);
    setItem(oneItem);
  }
  async function handleDelete() {
    await deleteItem(id);
    navigate("/items", { replace: true });
  }
  return (
    <div className="card">
      <div>
        <h1>{item.title}</h1>
        <img src={`${item.image}`} className="pics" alt={`${item.id}`} />
        <p className="detailDescription">{item.description}</p>
        <p> {item.comments} </p>
      </div>
      <Link to={`/items/${item._id}/edit`}>
        <button>Edit item</button>
      </Link>
      <button onClick={handleDelete}> Eleminate !</button>
    </div>
  );
};