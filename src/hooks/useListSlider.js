import { useState } from "react";

const ListImgSlider = [
  {
    id: 1,
    img: "https://fondosmil.com/fondo/27334.jpg",
    alt: "foto1",
  },
  {
    id: 2,
    img: "https://wallpaperaccess.com/full/637645.jpg",
    alt: "foto2",
  },
  {
    id: 3,
    img: "https://fondosmil.com/fondo/27334.jpg",
    alt: "foto3",
  },
  {
    id: 4,
    img: "https://wallpaperaccess.com/full/637645.jpg",
    alt: "foto4",
  },
  {
    id: 5,
    img: "https://fondosmil.com/fondo/27334.jpg",
    alt: "foto5",
  },
  {
    id: 6,
    img: "https://wallpaperaccess.com/full/637645.jpg",
    alt: "foto6",
  },
];



export function useListSlider() {
  const [listImgSlider, setListImgSlider] = useState(ListImgSlider);
  return { listImgSlider};
}
