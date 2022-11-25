import React from "react";
import { Link} from "react-router-dom";

import "./ListItem.css";
function ListItem({ id, title,src,stateMenu}) {
  
  return (
    <Link to={src}className={"item-menu "+ (stateMenu && "active")}>
      {title}
    </Link>
  );
}

export default ListItem;
