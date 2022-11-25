import React from "react";
import './CardResult.css'
function CardResult({name,species,image}) {
  return (
    <li className="card-item">
      <img src={image}></img>
      <h2>{name}</h2>
      <p>{species}</p>
    </li>
  );
}

export default CardResult;
