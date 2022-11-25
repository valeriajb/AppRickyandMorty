import { useState } from "react";
export const initialUrl="https://rickandmortyapi.com/api/character"
export function useListObject(url) {
  const [listObject, setListObject] = useState([]);
  const [page, setPage] = useState([]);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setListObject(data.results); setPage(data.info);
    })
    .catch((error) => console.log(error));

  return { listObject,page,setPage}

}

