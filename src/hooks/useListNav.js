import { useState } from "react";

const ListNav = [
  {
    id: 1,
    title: "Personajes",
    url: "",
  },
  {
    id: 2,
    title: "Capítulos",
    url: "",
  },
  {
    id: 3,
    title: "Planes",
    url: "",
  },
];

export function useListNav() {
  const [listNav, setListNav] = useState(ListNav);
  return { listNav };
}

export default useListNav
