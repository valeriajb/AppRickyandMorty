import React, { useEffect, useState } from "react";
import CardResult from "../../components/CardResult/CardResult";
import { useListObject } from "../../hooks/useListObject";
import ButonsPagination from "../../components/ButonsPagination/ButonPagination";
import "./Personajes.css";
function Personajes() {
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const {listObject, page, getData, onPrev, onNext } = useListObject();
  useEffect(() => {
    getData(initialUrl);
  }, []);
  return (
    <div className="container-character">
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
        prev={page.prev}
        next={page.next}
        page={page}
        onPrev={onPrev}
        onNext={onNext}
      />
      ,
    </div>
  );
}

export default Personajes;
