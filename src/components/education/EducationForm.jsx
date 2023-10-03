import React, { useState } from "react";
import Button from "../Button";
import "../../styles/form.css";

function EducationForm({
  setEducationInfo,
  id,
  deleteForm,
  setIsCreating,
  setIsEditing,
  information = {
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  },
}) {
  const [inputValues, setInputValues] = useState(information);
  const editEducationInfo = (key, e) => {
    setInputValues({ ...inputValues, [key]: e.target.value });
    setEducationInfo((prevEducationInfo) => {
      const updatedEducationInfo = prevEducationInfo.map((item, index) => {
        if (index === id) {
          // Update the specific item in the array
          return { ...item, [key]: e.target.value };
        }
        return item;
      });
      return updatedEducationInfo;
    });
  };

  return (
    <form id={id} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="school">
        <p>School</p>
        <input
          id="school"
          name="school"
          placeholder="Enter school / university"
          onChange={(e) => editEducationInfo("school", e)}
          value={inputValues.school}
        />
      </label>
      <label htmlFor="degree">
        <p>Degree</p>
        <input
          id="degree"
          name="degree"
          placeholder="Enter Degree / Field Of Study"
          onChange={(e) => editEducationInfo("degree", e)}
          value={inputValues.degree}
        />
      </label>
      <label htmlFor="startDate">
        <p>Start Date</p>
        <input
          id="startDate"
          name="startDate"
          placeholder="Enter Start Date"
          type="date"
          onChange={(e) => editEducationInfo("startDate", e)}
          value={inputValues.startDate}
        />
      </label>
      <label htmlFor="endDate">
        <p>End Date</p>
        <input
          id="endDate"
          name="endDate"
          placeholder="Enter End Date"
          type="date"
          onChange={(e) => editEducationInfo("endDate", e)}
          value={inputValues.endDate}
        />
      </label>
      <label htmlFor="location">
        <p>
          Location <span>(Optional)</span>
        </p>
        <input
          id="location"
          name="location"
          placeholder="Enter Location"
          onChange={(e) => editEducationInfo("location", e)}
          value={inputValues.location}
        />
      </label>
      <div className="buttons-wrapper">
        <button
          className="delete-form-button"
          id={id}
          onClick={(e) => {
            deleteForm(id);
            setIsCreating(false);
            setIsEditing(false);
          }}
        >
          <i className="fa-solid fa-trash"></i> Delete
        </button>
        <button
          className="save-form-button"
          onClick={() => {
            setIsCreating(false);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
