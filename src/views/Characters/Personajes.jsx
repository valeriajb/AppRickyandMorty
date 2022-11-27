import React, { useEffect, useState } from "react";
import CardResult from "../../components/CardResult/CardResult";
import { useListObject } from "../../hooks/useListObject";
import {useStateCard} from '../../hooks/useStateCard'
import InputSearch from "../../components/InputSearch/InputSearch";
import ButonsPagination from "../../components/ButonsPagination/ButonPagination";
import "./Personajes.css";
function Personajes() {
  const {stateCard,setStateCard}=useStateCard()
  const [search, setSearch] = useState();

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const { listObject, page, getData, onPrev, onNext } = useListObject();
  useEffect(() => {
    getData(initialUrl);
  }, []);
  
  // useEffect(()=>{
  //   getData("https://rickandmortyapi.com/api/character"+idCharacter)
  // },idCharacter)

  //   const idCharacter = listObject.find((item) =>(
  //     item.name == search ? item.id : null
  //   ));
  //   console.log(idCharacter);
  
 
  
 
  return (
    <> 
      <InputSearch setSearch={setSearch} />
      <div className="container-character">
        <ul className="list-character">
          {listObject.map((item) => (
            <CardResult
              key={item.id}
              id={item.id}
              statusClass={item.id===stateCard}//Poner el destructuring,No es una variable
              setStateCard={setStateCard}
              name={item.name}
              description={item.species}
              image={item.image}
              gender={item.gender}
              location={item.location}
              status={item.status}
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
      </div>
    </>
  );
}

export default Personajes;
