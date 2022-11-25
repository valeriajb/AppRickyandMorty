import React from "react";
import "./ListItem.css";
function ListItem({ id, title,stateMenu}) {
  
  return (
    <a  href="#" className={"item-menu "+ (stateMenu && "active")}>
      {title}
    </a>
  );
}

export default ListItem;
