import React, { useEffect, useState } from "react";
import { useListSlider } from "../../hooks/useListSlider";
import "./Slider.css";
function Slider() {
  const { listImgSlider } = useListSlider();

  return (
    <ul>
      {listImgSlider.map((item) => (
        <div key={item.id}>
          <img src={item.img} />
        </div>
      ))}
    </ul>
  );
}

export default Slider;
