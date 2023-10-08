import React from "react";
import "../styles/resumeLayout.css";

function ResumeLayout({
  personalInfo,
  educationInfo,
  experienceInfo,
  layout,
  accentColor,
}) {
  return (
    <div
      className={`resume-wrapper ${
        layout === "top" ? "top" : layout === "left" ? "left" : "right"
      }`}
    >
      <div
        className="personal-info-wrapper"
        style={{ "--accent-color": accentColor }}
      >
        <h1>{personalInfo.fullName}</h1>
        <div className="other">
          <span>
            {personalInfo.email && (
              <>
                <i className="fa-solid fa-envelope"></i>{" "}
                <span>{personalInfo.email}</span>
              </>
            )}
          </span>
          <span>
            {personalInfo.phoneNumber && (
              <>
                <i class="fa-solid fa-phone"></i>{" "}
                <span>{personalInfo.phoneNumber}</span>
              </>
            )}
          </span>
          <span>
            {personalInfo.address && (
              <>
                <i class="fa-solid fa-location-dot"></i>{" "}
                <span>{personalInfo.address}</span>
              </>
            )}
          </span>
        </div>
      </div>
      <div className="bottom-section">
        <div className="info-wrapper">
          {educationInfo && educationInfo.length !== 0 && <h3>Education</h3>}
          <div className="info">
            {educationInfo &&
              educationInfo.map((info, index) => (
                <div key={index}>
                  <div className="left-side">
                    <span>
                      {info.startDate} - {info.endDate}
                    </span>
                    <span>{info.location}</span>
                  </div>
                  <div className="right-side">
                    <span className="bold">{info.school}</span>
                    <span>{info.degree}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="info-wrapper">
          {experienceInfo && experienceInfo.length !== 0 && (
            <h3>Professional Experience</h3>
          )}
          <div className="info">
            {educationInfo &&
              experienceInfo.map((info, index) => (
                <div key={index}>
                  <div className="left-side">
                    <span>
                      {info.startDate} - {info.endDate}
                    </span>
                    <span>{info.location}</span>
                  </div>
                  <div className="right-side">
                    <span className="bold">{info.company}</span>
                    <span>{info.position}</span>
                    <span className="large">{info.description}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeLayout;
