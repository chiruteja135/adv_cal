import React from 'react';

function HistoryPopup({ calculations, clearHistory, onClose }) {
  return (
    <div className="history-popup">
      <div className="history-content">
        <button className="clear-history" onClick={clearHistory}>
          Clear History
        </button>
        <ul>
          {calculations.map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HistoryPopup;
