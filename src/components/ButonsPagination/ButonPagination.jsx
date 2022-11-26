import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "./ButonsPagination.css";
function ButonPagination({ prev, next, onPrev, onNext }) {
  const [numberPage, setNumberPage] = useState(1);
  const allFunctionNext = () => {
    onNext();
    setNumberPage(numberPage + 1);
  };
  const allFunctionPrev = () => {
    onPrev();
    setNumberPage(numberPage - 1);
  };
  return (
    <div className="container-pagination">
      {prev ? (
        <TiChevronLeftOutline
          onClick={allFunctionPrev}
          className=" btn btnPrev"
        />
      ) : null}
      <span className="number-span">{numberPage}</span>
      {next ? (
        <TiChevronRightOutline
          onClick={allFunctionNext}
          className="btn btnNext"
        />
      ) : null}
    </div>
  );
}

export default ButonPagination;
