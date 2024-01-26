import React from 'react';

const DereceDonusturButton = ({ onClick, id, text }) => {
  return (
    <button
      onClick={onClick}
      id={id}
      type="button"
      className="conversion-button"
    >
      {text}
    </button>
  );
}

export default DereceDonusturButton;