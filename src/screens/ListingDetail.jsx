import { useState, useEffect } from "react";
import { deleteItem, getItem } from "../services/items.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import React from "react";
import jwtDecode from "jwt-decode";

import './ListingDetail.css'

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

  const userKey = localStorage.getItem('token')

  return (
    <div className="card">
      <div>
        <h1>{item.title}</h1>
        <img src={`${item.image}`} className="pics" alt={`${item.id}`} />
        <p className="detailDescription">{item.description}</p>
        <p> {item.comments} </p>
      </div>
      {userKey === null ?

      
      <Link to= "/items"><button>Home</button></Link>
      :  
      <div>
      <Link to={`/items/${item._id}/edit`}>
        <button className="editButton">Edit item</button></Link>

      <button className="eliminate" onClick={handleDelete}> Eleminate !</button>
      </div>}
      </div>
  )
      }
    
