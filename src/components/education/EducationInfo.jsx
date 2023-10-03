import React from "react";
import "../../styles/information.css";

function EducationInfo({ id, educationInfo, setEducationIndex, setIsEditing }) {
  return (
    <div
      id={id}
      className="information-wrapper"
      onClick={() => {
        setIsEditing(true);
        setEducationIndex(id);
      }}
    >
      {educationInfo.school}
    </div>
  );
}

export default EducationInfo;
