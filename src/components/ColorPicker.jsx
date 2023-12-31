import React from "react";
import "../styles/picker.css";

function ColorPicker({ setAccentColor, accentColor }) {
  return (
    <div className="picker">
      <h1>Color</h1>
      <div className="customize-wrapper">
        <label htmlFor="color">Color Accent</label>
        <input
          type="color"
          name="color"
          id="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
