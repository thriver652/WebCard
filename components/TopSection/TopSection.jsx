import React from "react";
import "./TopSection.scss"; // Import the SCSS file

const TopSection = () => {
  return (
    <div className="top-section">
      <div>
        <div className="weekly-sumup">Weekly sumup</div>
        <div className="get-summary">
          Get summary of your weekly online transactions here.
        </div>
      </div>

      <div>
        <div>Andrew</div>
        <div>Admin Account</div>
      </div>
    </div>
  );
};

export default TopSection;
