import React from "react";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards-container">
      <div>Cards</div>
      <div className="row-container">
        <div className="text">&lt;</div>
        <img src="../../images/card.png" className="card-image" alt="Card" />
        <div className="text">&gt;</div>
      </div>
    </div>
  );
};

export default Cards;
