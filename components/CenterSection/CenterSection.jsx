import React from "react";
import "./CenterSection.scss";
import TransHist from "./TransHist/TransHist";
const CenterSection = () => {
  return (
    // <div className="center-sec">
    //   <div className="card">Cards</div>
    //   <div className="card"></div>
    //   <div className="card">
    //     <TransHist />
    //   </div>
    //   <div className="card"></div>
    // </div>
    <div style={{ flexDirection: "row", display: "flex" }}>
      <div>
        <div className="card">Hello</div>
        <div className="card">Hello</div>
      </div>
      <div>
        <div className="card">Hello</div>
        <div className="card">Hello</div>
      </div>
    </div>
  );
};

export default CenterSection;
