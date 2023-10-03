import React from "react";
import "../styles/createForm.css";

function CreateForm({ title, onClick }) {
  return (
    <button onClick={onClick} className="create-form-button">
      <i className="fa-solid fa-plus"></i>{" "}
      {title.replace(/^./, title[0].toUpperCase())}
    </button>
  );
}

export default CreateForm;
