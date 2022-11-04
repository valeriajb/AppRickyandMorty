import { useState } from "react";

const ListNav = [
  {
    key: 1,
    title: "Personajes",
    url: "",
  },
  {
    key: 2,
    title: "Capítulos",
    url: "",
  },
  {
    key: 3,
    title: "Planes",
    url: "",
  },
];

export function useListNav() {
  const [listNav, setListNav] = useState(ListNav);
  return { listNav };
}

export default useListNav
