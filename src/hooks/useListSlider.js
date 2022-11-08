import { useState } from "react";

const ListImgSlider = [
  {
    key: 1,
    img: "https://fondosmil.com/fondo/27334.jpg",
    alt: "foto1",
  },
  {
    key: 2,
    img: "https://wallpaperaccess.com/full/637645.jpg",
    alt: "foto2",
  },
  {
    key: 3,
    img: "https://fondosmil.com/fondo/27334.jpg",
    alt: "foto3",
  },
  {
    key: 4,
    img: "https://wallpaperaccess.com/full/637645.jpg",
    alt: "foto4",
  },
  {
    key: 5,
    img: "https://fondosmil.com/fondo/27334.jpg",
    alt: "foto5",
  },
  {
    key: 6,
    img: "https://wallpaperaccess.com/full/637645.jpg",
    alt: "foto6",
  },
];


const ListBarSlider = [
  {
    id: "1",
    title:"Primero"
  },
  {
    id: "2",
    title:"Primero"

  },
  {
    id: "3",
    title:"Primero"

  },
  {
    id: "4",
    title:"Primero"

  },
  {
    id: "5",
    title:"Primero"

  },
];
export function useListSlider() {
  const [listImgSlider, setListImgSlider] = useState(ListImgSlider);
  const [listBarSlider, setlistBarSlider]=useState(ListBarSlider)
  const [changeImg,setChangeImg]=useState()
  const  [stateBar, setStateBar]=useState()
  return { listImgSlider, listBarSlider,stateBar, setStateBar,changeImg,setChangeImg};
}
