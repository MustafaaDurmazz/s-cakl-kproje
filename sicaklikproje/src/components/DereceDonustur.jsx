import React, { useState } from 'react';
import DereceInput from './DereceInput';
import DereceDonusturButton from './DereceDonusturButton';
import SonucLabel from './SonucLabel';

function DereceDonustur() {
  const [derece, setDerece] = useState('');
  const [sonuc, setSonuc] = useState('');

  function handleClick(event) {
    const inputValue = parseFloat(derece);

    if (!derece.trim()) {
      alert("Lütfen bir derece değeri girin.");
      return;
    }

    if (event.target.id === 'kel') {
      const kelvinSonuc = (inputValue + 273).toFixed(2);
      setSonuc(`Sonuç: ${kelvinSonuc} °K`);
    } else if (event.target.id === 'fah') {
      const fahrenheitSonuc = ((9/5) * inputValue + 32).toFixed(2);
      setSonuc(`Sonuç: ${fahrenheitSonuc} °F`);
    }

    setDerece('');
  }

  function handleChange(event) {
    const inputValue = event.target.value;
    setDerece(inputValue);
  }

  return (
    <div className="temperature-converter">
      <h3 className='title'>Derece Dönüştürücü</h3>
      <DereceInput value={derece} onChange={handleChange} />
      <div className="button-container">
        <DereceDonusturButton onClick={handleClick} id='kel' text="Kelvin'e Dönüştür" />
        <DereceDonusturButton onClick={handleClick} id='fah' text="Fahrenheit'a Dönüştür" />
      </div>
      <SonucLabel sonuc={sonuc} />
      <p>Mustafa Durmaz  &copy; 2024 </p>
    </div>
  );
}

export default DereceDonustur;