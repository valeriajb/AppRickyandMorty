import React from "react";
import "./ListItem.css";
function ListItem({ item, stateMenu}) {
  const {key,src,title}=item;
  return (
    <a key={key} href="#" className={"item-menu "+ (stateMenu && "active")}>
      {title}
    </a>
  );
}

export default ListItem;
