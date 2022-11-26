import React from "react";
import './CardResult.css'
function CardResult({title,name,species,image}) {
  return (
    <li className="card-item">
      {image?<img src={image}></img>:<h1>{title}</h1>}
      <h2>{name}</h2>
      <p>{species}</p>
    </li>
  );
}

export default CardResult;
