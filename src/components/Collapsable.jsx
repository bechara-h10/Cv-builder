import React, { useState } from "react";
import "../styles/collapsable.css";

function Collapsable({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="collapsable-container">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={collapsed ? "collapse-button open" : "collapse-button"}
      >
        {title}
        <span>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </button>
      <div className={collapsed ? "wrapper open" : "wrapper"}>
        <div className="collapsable">{children}</div>
      </div>
    </div>
  );
}

export default Collapsable;
