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
        </Link>
        <p className="itemTitle" > {item.title} </p>
        <div className="howManyPeople">X amount of people want this shit</div>
    </div>
  );
}
