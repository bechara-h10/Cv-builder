import React from "react";
import Button from "./Button";
import "../styles/sidebar.css";

function Sidebar({ selectedTab, changeSelected }) {
  return (
    <nav>
      <Button
        text="Content"
        logoClass="fa-solid fa-newspaper"
        isSelected={selectedTab === "content" ? true : false}
        onClick={() => changeSelected("content")}
      />
      <Button
        text="Customize"
        logoClass="fa-solid fa-pen-to-square"
        isSelected={selectedTab === "customize" ? true : false}
        onClick={() => changeSelected("customize")}
      />
      <Button
        logoClass="fa-solid fa-trash"
        text="Clear Resume"
        style={{ color: "red" }}
      />
    </nav>
  );
}

export default Sidebar;
