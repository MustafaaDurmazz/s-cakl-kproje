import React from 'react';

const DereceInput = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="temperature-input"
      id="derece"
      placeholder="Celcius"
      value={value}
      onChange={onChange}
    />
  );
}

export default DereceInput;