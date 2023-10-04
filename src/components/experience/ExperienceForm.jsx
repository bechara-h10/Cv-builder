import React, { useState } from "react";
import "../../styles/form.css";

function ExperienceForm({
  setExperienceInfo,
  id,
  deleteForm,
  setIsCreating,
  setIsEditing,
  information = {
    company: "",
    position: "",
    startDate: "",
    location: "",
    description: "",
  },
}) {
  const [inputValues, setInputValues] = useState(information);
  const editExperiencenInfo = (key, e) => {
    setInputValues({ ...inputValues, [key]: e.target.value });
    setExperienceInfo((prevExperinceInfo) => {
      const updatedExperinceInfo = prevExperinceInfo.map((item, index) => {
        if (index === id) {
          // Update the specific item in the array
          return { ...item, [key]: e.target.value };
        }
        return item;
      });
      return updatedExperinceInfo;
    });
  };

  return (
    <form id={id} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="school">
        <p>Company Name</p>
        <input
          id="company"
          name="company"
          placeholder="Enter Compnay Name"
          onChange={(e) => editExperiencenInfo("company", e)}
          value={inputValues.company}
        />
      </label>
      <label htmlFor="position">
        <p>Position Title</p>
        <input
          id="position"
          name="position"
          placeholder="Enter Position Title"
          onChange={(e) => editExperiencenInfo("position", e)}
          value={inputValues.position}
        />
      </label>
      <label htmlFor="startDate">
        <p>Start Date</p>
        <input
          id="startDate"
          name="startDate"
          placeholder="Enter Start Date"
          type="date"
          onChange={(e) => editExperiencenInfo("startDate", e)}
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
          onChange={(e) => editExperiencenInfo("endDate", e)}
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
          onChange={(e) => editExperiencenInfo("location", e)}
          value={inputValues.location}
        />
      </label>
      <label htmlFor="description">
        <p>
          Description <span>(Optional)</span>
        </p>
        <textarea
          id="description"
          name="description"
          placeholder="Enter Description"
          onChange={(e) => editExperiencenInfo("description", e)}
          value={inputValues.description}
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

export default ExperienceForm;
