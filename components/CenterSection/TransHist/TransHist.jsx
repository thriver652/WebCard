import React from "react";
import "./TransHist.scss";

const TransHist = () => {
  return (
    <div className="transhist-cont">
      <div className="trans-txt">Transactional History</div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Receiver</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Deposit</td>
            <td>2024-03-15</td>
            <td>$500.00</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>Deposit</td>
            <td>2024-03-15</td>
            <td>$500.00</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>Deposit</td>
            <td>2024-03-15</td>
            <td>$500.00</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>Deposit</td>
            <td>2024-03-15</td>
            <td>$500.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransHist;
