import React, { useEffect, useState } from "react";
import { useListSlider } from "../../hooks/useListSlider";
import BarSlider from "./BarSlider";
import "./Slider.css";
function Slider() {
  const {
    listImgSlider,
    listBarSlider,
    stateBar,
    setStateBar,
    changeImg,
    setChangeImg,
  } = useListSlider();



  return (
    <div className="container-slider">
      <div className="slider-items">
        {listImgSlider.map((item) => (
          <img className="slider-img" src={item.img} />
        ))}
      </div>
      <ul className="bar-slider">
        {listBarSlider.map((item) => (
          <BarSlider
            id={item.id}
            stateItem={stateBar === item.id}
            setStateBar={setStateBar}
          
          />
        ))}
      </ul>
    </div>
  );
}

export default Slider;
