import React from "react";

function ExperienceInfo({
  id,
  experienceInfo,
  setExperienceIndex,
  setIsEditing,
}) {
  return (
    <div
      id={id}
      className="information-wrapper"
      onClick={() => {
        setIsEditing(true);
        setExperienceIndex(id);
      }}
    >
      {experienceInfo.company}
    </div>
  );
}

export default ExperienceInfo;
