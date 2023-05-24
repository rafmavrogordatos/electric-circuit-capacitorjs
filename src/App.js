import React, { useState } from 'react';
import './App.css';

function App() {
  const [armatureDistance, setArmatureDistance] = useState(0.01);
  const [armatureArea, setArmatureArea] = useState(0.01);
  const [sourceVoltage, setSourceVoltage] = useState(0);

  const handleArmatureDistanceChange = (event) => {
    setArmatureDistance(parseFloat(event.target.value));
  };

  const handleArmatureAreaChange = (event) => {
    setArmatureArea(parseFloat(event.target.value));
  };

  const handleSourceVoltageChange = (event) => {
    setSourceVoltage(parseFloat(event.target.value));
  };

  const renderDiagram = () => {
    const verticalLineHeight = armatureDistance * 100 + "%";

    return (
      <div className="diagram">
        <div className="capacitor-container">
          <div className="capacitor-lines">
            <div className="right-line">
              <div className="vertical-line" style={{ height: verticalLineHeight }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Electric Circuit</h1>
      <div className="inputs">
        <div className="input-group">
          <label htmlFor="armature-distance">Armature Distance (l):</label>
          <input
            type="range"
            id="armature-distance"
            min="0.01"
            max="1"
            step="0.01"
            value={armatureDistance}
            onChange={handleArmatureDistanceChange}
          />
          <span>{armatureDistance} cm</span>
        </div>
        <div className="input-group">
          <label htmlFor="armature-area">Armature Area:</label>
          <input
            type="range"
            id="armature-area"
            min="0.01"
            max="1"
            step="0.01"
            value={armatureArea}
            onChange={handleArmatureAreaChange}
          />
          <span>{armatureArea}</span>
        </div>
        <div className="input-group">
          <label htmlFor="source-voltage">Source Voltage (V):</label>
          <input
            type="range"
            id="source-voltage"
            min="-1.5"
            max="1.5"
            step="0.1"
            value={sourceVoltage}
            onChange={handleSourceVoltageChange}
          />
          <span>{sourceVoltage} V</span>
        </div>
      </div>
      {renderDiagram()}
    </div>
  );
}

export default App;
