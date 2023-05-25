import React, { useState, useEffect } from 'react';

const LearningObject = () => {
  const [mass, setMass] = useState(0);
  const [acceleration, setAcceleration] = useState(0);
  const [force, setForce] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    calculateForce(mass, acceleration);
  }, [mass, acceleration]);

  useEffect(() => {
    setIsAnimating(true);
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(animationTimeout);
  }, [force]);

  const handleMassChange = (event) => {
    const newMass = parseFloat(event.target.value);
    setMass(newMass);
  };

  const handleAccelerationChange = (event) => {
    const newAcceleration = parseFloat(event.target.value);
    setAcceleration(newAcceleration);
  };

  const calculateForce = (mass, acceleration) => {
    const newForce = mass * acceleration;
    setForce(newForce);
  };

  return (
    <div>
      <h1>Δεύτερος Νόμος Κίνησης του Νεύτωνα</h1>
      <div>
        <label htmlFor="mass-slider">Μάζα (kg):</label>
        <input
          type="range"
          id="mass-slider"
          min="0"
          max="10"
          step="0.1"
          value={mass}
          onChange={handleMassChange}
        />
        <span>{mass} kg</span>
      </div>
      <div>
        <label htmlFor="acceleration-slider">Επιτάχυνση (m/s²):</label>
        <input
          type="range"
          id="acceleration-slider"
          min="0"
          max="10"
          step="0.1"
          value={acceleration}
          onChange={handleAccelerationChange}
        />
        <span>{acceleration} m/s²</span>
      </div>
      <div className={`force-container ${isAnimating ? 'animate' : ''}`}>
        <p>Δύναμη (Ν):</p>
        <div className="force-value">{force}</div>
      </div>
    </div>
  );
};

export default LearningObject;
