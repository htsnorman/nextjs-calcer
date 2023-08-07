'use client';
import React, { useState, useEffect } from 'react';

const VizInputs = ({ onTotalWaterChange }) => {
  const [vizValue, setVizValue] = useState(0);
  const [vizEgysegValue, setVizEgysegValue] = useState(0);
  const [vizAlapdijValue, setVizAlapdijValue] = useState(0);
  const [vizCsatornadijValue, setVizCsatornadijValue] = useState(0);

  const handleVizChange = (event) => {
    setVizValue(parseInt(event.target.value || '0'));
  };

  const handleVizEgysegChange = (event) => {
    setVizEgysegValue(parseInt(event.target.value || '0'));
  };

  const handleVizAlapdijChange = (event) => {
    setVizAlapdijValue(parseInt(event.target.value || '0'));
  };

  const handleVizCsatornadijChange = (event) => {
    setVizCsatornadijValue(parseInt(event.target.value || '0'));
  };

  const calculateTotalWater = () => {
    return vizValue * vizEgysegValue + vizAlapdijValue + vizCsatornadijValue;
  };

  const totalWater = calculateTotalWater();

  // Call the onTotalVizChange callback when the totalViz value changes
  useEffect(() => {
    onTotalWaterChange(totalWater);
  }, [totalWater]);

  // Format the totalViz value with a thousand separator (".") for Hungarian locale
  const formattedTotalViz = totalWater.toLocaleString('hu-HU');

  return (
    <>
      Víz &nbsp;&nbsp;
      <input
        name="viz"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={vizValue}
        onChange={handleVizChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Víz egység &nbsp;&nbsp;
      <input
        name="viz-egyseg"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={vizEgysegValue}
        onChange={handleVizEgysegChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;
      Víz alapdíj &nbsp;&nbsp;
      <input
        name="viz-alapdij"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={vizAlapdijValue}
        onChange={handleVizAlapdijChange}
      />
&nbsp;&nbsp;&nbsp;&nbsp;
Víz Csatorna díj &nbsp;&nbsp;
      <input
        name="viz-csatornadij"
        className="input text-emerald-950 w-20 text-center"
        type="number"
        value={vizCsatornadijValue}
        onChange={handleVizCsatornadijChange}
      />

      &nbsp;&nbsp;&nbsp;&nbsp;
      Víz Összesen: &nbsp;&nbsp;
      <span>{formattedTotalViz} .-</span>
    </>
  );
};

export default VizInputs;