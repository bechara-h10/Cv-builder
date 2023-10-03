import React from "react";
import "../styles/button.css";

function Button({ logoClass, text, style, isSelected, onClick }) {
  return (
    <button
      style={style}
      className={isSelected ? "selected" : null}
      onClick={onClick}
    >
      <i className={logoClass} />
      {text}
    </button>
  );
}

export default Button;
