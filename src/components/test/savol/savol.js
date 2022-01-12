import React from "react";
import Javob from "./javob/javob";

const Savol = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            {props.malumot.id}. {props.malumot.text}
          </h5>
          <div>{props.soni} dan {props.malumot.id}</div>
        </div>
        <ul className="list-group list-group-flush mt-3">
          {props.malumot.javoblar.map((j, index) => (<Javob key={index} javob={j} activeResult={props.activeResult ? props.activeResult[j.id] : null} onBosildi={props.onBosildi} />))}
        </ul>
      </div>
    </div>
  );
};


export default Savol;