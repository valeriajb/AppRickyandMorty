import React, { useEffect, useState } from "react";

export function useListObject() {
  const [listObject, setListObject] = useState([]);
  const [page, setPage] = useState([]);

  const getData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setListObject(data.results);
        setPage(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrev = () => {
    getData(page.prev);
  };
  const onNext = () => {
    getData(page.next);
  };
  return { listObject, page, getData, onPrev, onNext };
}
