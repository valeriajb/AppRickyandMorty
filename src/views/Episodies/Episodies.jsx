import React, { useEffect, useState } from "react";
import ButonPagination from "../../components/ButonsPagination/ButonPagination";
import '../../components/ButonsPagination/ButonsPagination.css'
import CardResult from '../../components/CardResult/CardResult'
import '../../components/CardResult/CardResult.css'
import { useListObject } from "../../hooks/useListObject";

function Episodies() {
  const initialUrl = "https://rickandmortyapi.com/api/episode";
  const { listObject, getData, page, onPrev, onNext } = useListObject();

  useEffect(() => {
    getData(initialUrl);
  }, []);

  return (
    <div>
      <ul className="list-character">
        {listObject.map((item) => (
          <CardResult
            key={item.id}
            title={item.name}
            name={item.episode}
            species={item.created}
          />
        ))}
      </ul>
      <ButonPagination 
        prev={page.prev}
        next={page.next}
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}

export default Episodies;
