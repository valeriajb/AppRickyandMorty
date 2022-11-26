import { useState } from "react";

const ListNav = [
  {
    id: 1,
    title: "Personajes",
    url: "/Personajes",
  },
  {
    id: 2,
    title: "Capítulos",
    url: "/Episodies",
  },
  {
    id: 3,
    title: "Planes",
    url: "/Planes",
  },
];

export function useListNav() {
  const [listNav, setListNav] = useState(ListNav);
  return { listNav };
}

export default useListNav
