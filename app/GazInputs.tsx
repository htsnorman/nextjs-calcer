'use client';
import React, { useState, useEffect } from 'react';

const GazInputs = ({ onTotalGasChange }) => {
  const [gazValue, setGazValue] = useState(0);
  const [gazEgysegValue, setGazEgysegValue] = useState(0);
  const [gazAlapdijValue, setGazAlapdijValue] = useState(0);

  const handleGazChange = (event) => {
    setGazValue(parseInt(event.target.value || '0'));
  };

  const handleGazEgysegChange = (event) => {
    setGazEgysegValue(parseInt(event.target.value || '0'));
  };

  const handleGazAlapdijChange = (event) => {
    setGazAlapdijValue(parseInt(event.target.value || '0'));
  };

  const calculateTotalGas = () => {
    return gazValue * gazEgysegValue + gazAlapdijValue;
  };

  const totalGas = calculateTotalGas();

  // A totalGas érték változásakor hívjuk meg az onTotalGasChange callbacket
  useEffect(() => {
    onTotalGasChange(totalGas);
  }, [totalGas]);

  // Formázzuk a totalGas értékét az ezreseknél "." elválasztóval
  const formattedTotalGas = totalGas.toLocaleString('hu-HU');

  return (
    <>
      Gáz &nbsp;&nbsp;
      <input
        name="gaz"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={gazValue}
        onChange={handleGazChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Gáz egység &nbsp;&nbsp;
      <input
        name="gaz-egyseg"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={gazEgysegValue}
        onChange={handleGazEgysegChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Gáz alapdíj &nbsp;&nbsp;
      <input
        name="gaz-alapdij"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={gazAlapdijValue}
        onChange={handleGazAlapdijChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Gáz Összesen: &nbsp;&nbsp;
      <span>{formattedTotalGas} .-</span>
    </>
  );
};

export default GazInputs;