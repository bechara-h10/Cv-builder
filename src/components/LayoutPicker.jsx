import React from "react";
import "../styles/picker.css";

function LayoutPicker({ setLayout }) {
  return (
    <div className="picker">
      <h1>Layout</h1>
      <div className="customize-wrapper visuals">
        <div className="visual-wrapper">
          <div
            className="top-visual visual"
            onClick={() => setLayout("top")}
          ></div>
          <span>Top</span>
        </div>
        <div className="visual-wrapper">
          <div
            className="left-visual visual"
            onClick={() => setLayout("left")}
          ></div>
          <span>Left</span>
        </div>
        <div className="visual-wrapper">
          <div
            className="right-visual visual"
            onClick={() => setLayout("right")}
          ></div>
          <span>Right</span>
        </div>
      </div>
    </div>
  );
}

export default LayoutPicker;
