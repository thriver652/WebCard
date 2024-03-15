import React from "react";
import "./CenterSection.scss"; // Import your SCSS file here
import TransHist from "./TransHist/TransHist";
const CenterSection = () => {
  return (
    <div className="center-section">
      <div className="row">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
      </div>
      <div className="row">
        <div className="card">
          <TransHist />
        </div>
        <div className="card">Card 4</div>
      </div>
    </div>
  );
};

export default CenterSection;
