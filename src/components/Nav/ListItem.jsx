import React from "react";
import "./ListItem.css";
function ListItem({ item }) {
  return (
    <a key={item.key} href="#" className="item-menu">
      {item.title}
    </a>
  );
}

export default ListItem;
