'use client';
import React, { useState, useEffect } from 'react';

const AramInputs = ({ onTotalElectricityChange }) => {
  const [electricityValue, setElectricityValue] = useState(0);
  const [electricityEgysegValue, setElectricityEgysegValue] = useState(0);
  const [electricityAlapdijValue, setElectricityAlapdijValue] = useState(0);

  const handleElectricityChange = (event) => {
    setElectricityValue(parseInt(event.target.value || '0'));
  };

  const handleElectricityEgysegChange = (event) => {
    setElectricityEgysegValue(parseInt(event.target.value || '0'));
  };

  const handleElectricityAlapdijChange = (event) => {
    setElectricityAlapdijValue(parseInt(event.target.value || '0'));
  };

  const calculateTotalElectricity = () => {
    return electricityValue * electricityEgysegValue + electricityAlapdijValue;
  };

  const totalElectricity = calculateTotalElectricity();

  // Értesítjük a Page komponenst az új értékről, amikor totalElectricity változik
  useEffect(() => {
    onTotalElectricityChange(totalElectricity);
  }, [totalElectricity, onTotalElectricityChange]);

  // Formázzuk a totalElectricity értékét az ezreseknél "." elválasztóval
  const formattedTotalElectricity = totalElectricity.toLocaleString('hu-HU');

  return (
    <>
      Villany &nbsp;&nbsp;
      <input
        name="electricity"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={electricityValue}
        onChange={handleElectricityChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Villany egység &nbsp;&nbsp;
      <input
        name="electricity-egyseg"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={electricityEgysegValue}
        onChange={handleElectricityEgysegChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Villany alapdíj &nbsp;&nbsp;
      <input
        name="electricity-alapdij"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={electricityAlapdijValue}
        onChange={handleElectricityAlapdijChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Villany Összesen: &nbsp;&nbsp;
      <span>{formattedTotalElectricity} .-</span>
    </>
  );
};

export default AramInputs;