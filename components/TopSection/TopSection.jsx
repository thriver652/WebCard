import React from "react";
import "./TopSection.scss";

const TopSection = () => {
  return (
    <div className="top-section">
      <div>
        <div className="weekly-sumup">Weekly Summary</div>
        <div className="get-summary">
          Get a summary of your weekly online transactions here.
        </div>
      </div>

      <div className="profile-container">
        <div className="icon-container">
          <img src="/images/mail.png" alt="Mail Icon" />
          <img src="/images/notify.png" alt="Notify Icon" />
          <img src="/images/profile.png" alt="Profile Icon" />
        </div>
        <div className="profile-info">
          <div className="profile-name">Andrew</div>
          <div className="profile-role">Admin Account</div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
