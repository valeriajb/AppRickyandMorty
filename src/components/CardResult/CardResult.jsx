import React from "react";
import "./CardResult.css";
function CardResult({
  title,
  name,
  description,
  image,
  gender,
  location,
  status,
  setStateCard,
  id,
  statusClass,
}) {
  return (
    <li className="card-item" onClick={console.log("hh")}>
      <div className={"information-card " + (statusClass && "active")}>
        {image ? (
          <img  src={image}></img>
        ) : (
          <h1>{title}</h1>
        )}
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className={"description-card " + (statusClass && "active")}>
        {gender ? <h5>Su genero es: {gender}</h5> : null}
        {location ? (
          <p>
            Lugar de residencia: <span>{location.name}</span>
          </p>
        ) : null}
        {status ? <h6>{status}</h6> : null}
      </div>
    </li>
  );
}

export default CardResult;
