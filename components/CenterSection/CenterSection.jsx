import React from "react";
import "./CenterSection.scss";
import Cards from "./Cards/Cards";
import TransHist from "./TransHist/TransHist";
import Goals from "./Goals/Goals";
const CenterSection = () => {
  return (
    <div className="center-section">
      <div className="row">
        <div className="card">
          <Cards />
        </div>
        <div className="card">
          <TransHist />
        </div>
      </div>
      <div className="row">
        <div className="card">
          <Cards />
        </div>
        <div className="card">
          <TransHist />
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
