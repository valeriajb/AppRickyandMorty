import React, { useEffect, useState } from "react";
import CardResult from "../../components/CardResult/CardResult";
import { useListObject, initialUrl} from "../../hooks/useListObject";
import ButonsPagination from "../../components/ButonsPagination/ButonPagination";
import "./Personajes.css";
function Personajes() {
  const { listObject, page, setPage } = useListObject(initialUrl);
  


  return (
    <div className="container-personajes">
      <ul className="list-character">
        {listObject.map((item) => (
          <CardResult
            key={item.id}
            name={item.name}
            species={item.species}
            image={item.image}
          />
        ))}
      </ul>
      <ButonsPagination
        anterior={page.prev}
        siguiente={page.next}
        page={page}
        
      />
    </div>
  );
}

export default Personajes;
