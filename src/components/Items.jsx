import React from "react";
import { Link } from "react-router-dom";
import './items.css'

export default function Item({ item }) {
  return (
    <div className="all-items">
      <Link to={`/items/${item._id}`}>
        <img 
        src={`${item.image}`}
        alt={`${item._id}`}
        className="listed-item-img"
        />
        <p> {item.title} </p>
      </Link>
    </div>
  );
}
