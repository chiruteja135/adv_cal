import React, { useState } from 'react';
import HistoryPopup from './historypopup'; // Import the new component
import './App.css'; // Make sure to import your CSS file

function History({ calculations, clearHistory }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="history">
      <label>
        <input
          type="checkbox"
          checked={showPopup}
          onChange={togglePopup}
        />
        Show History
      </label>
      {showPopup && (
        <HistoryPopup
          calculations={calculations}
          clearHistory={clearHistory}
          onClose={togglePopup}
        />
      )}
    </div>
  );
}

export default History;
