import React from "react";
import "./BarSlider.css";

function BarSlider({ id, setStateBar, stateItem }) {
  return (
    <li
      onClick={setStateBar(id)}
      className={stateItem?"bar-slider-item active":"bar-slider-item"}
    ></li>
  );
}

export default BarSlider;
