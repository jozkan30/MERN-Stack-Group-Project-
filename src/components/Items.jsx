import React from "react";
import { Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
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

        
        <p> {item.title} </p>

    </div>
  );
}
