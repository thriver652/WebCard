import React from "react";
import "./LeftSidebar.scss";

const menuItems = [
  { icon: "../../images/overview.png", text: "Overview" },
  { icon: "../../images/transactions.png", text: "Transactions" },
  { icon: "../../images/cards.png", text: "Cards" },
  { icon: "../../images/Invoices.png", text: "Invoices" },
  { icon: "../../images/Goals.png", text: "Goals" },
  { icon: "../../images/Settings.png", text: "Settings" },
];

function LeftSidebar() {
  return (
    <div className="leftsidebar">
      <div className="cloudcash-wrapper">
        <img
          src="../../images/left-cloud.png"
          alt="left-cloud"
          className="cloudcash-icon"
        />
        <div className="cloudcash-text">cloudcash</div>
      </div>
      <ul className="sidebar-list">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <img
              src={item.icon}
              alt={`${item.text} Icon`}
              className="sidebar-icon"
            />
            <span className="sidebar-text">{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="placend">
        <div className="image-container">
          <img src="../../images/cloud-below.png" alt="cloud-below" />
          <img src="../../images/UpgToPrem.png" alt="UpgToPrem" />
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
