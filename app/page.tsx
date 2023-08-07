// page.tsx
'use client';
import React, { useState } from 'react';
import GazInputs from './GazInputs';
import VizInputs from './VizInputs';
import AramInputs from './AramInputs';

export default function Page() {
  const [totalGas, setTotalGas] = useState(0);
  const [totalWater, setTotalWater] = useState(0);
  const [totalElectricity, setTotalElectricity] = useState(0);

  const handleTotalGasChange = (value) => {
    setTotalGas(value);
  };

  const handleTotalWaterChange = (value) => {
    setTotalWater(value);
  };

  const handleTotalElectricityChange = (value) => {
    setTotalElectricity(value);
  };


  return (
    <>
      <br />
      <br />
      <h1 className="text-5xl font-bold animate-pulse">Bia Kalkulátor ❤️ 🐶 </h1>
      <br /> <br /> <br /> <br />

      <div>
        <br />
        {/* Átadjuk a handleTotalGasChange függvényt a GazInputs komponensnek */}
        🔥 <GazInputs onTotalGasChange={handleTotalGasChange} />
      </div>

      <div>
        <br />
        {/* Átadjuk a handleTotalWaterChange függvényt a VizInputs komponensnek */}
        💧 <VizInputs onTotalWaterChange={handleTotalWaterChange} />
      </div>

      <div>
        <br />
        {/* Átadjuk a handleTotalElectricityChange függvényt a AramInputs komponensnek */}
        ⚡ <AramInputs onTotalElectricityChange={handleTotalElectricityChange} />
      </div>

      <br /> <br /> <br /> <br />

      {/* Táblázat a kiszámolt eredményekkel */}
      <div style={{ textAlign: 'center' }}>
        <br />
        <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '70%' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Gáz Összesen</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Víz Összesen</th>
              <th style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>Áram Összesen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{totalGas} .-</td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{totalWater} .-</td>
              <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{totalElectricity} .-</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
}