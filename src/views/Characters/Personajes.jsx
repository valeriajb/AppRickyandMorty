import React, {useEffect} from "react";
import CardResult from "../../components/CardResult/CardResult";
import {useListObject} from '../../hooks/useListObject'
import ButonsPagination from "../../components/ButonsPagination/ButonPagination";
import "./Personajes.css";
function Personajes() {
    const{listObject,page,getData,onPrev,onNext}=useListObject()
    const initialUrl = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    getData(initialUrl);
  }, []);
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
        onPrev={onPrev}
        onNext={onNext}
      />
    </div>
  );
}

export default Personajes;
