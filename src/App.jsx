import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Collapsable from "./components/Collapsable";
import PersonalInfo from "./components/PersonalInfo";
import EducationForm from "./components/education/EducationForm";
import CreateForm from "./components/CreateForm";
import ExperienceForm from "./components/experience/ExperienceForm";
import EducationInfo from "./components/education/EducationInfo";
import ExperienceInfo from "./components/experience/ExperienceInfo";
import ResumeLayout from "./components/ResumeLayout";
import LayoutPicker from "./components/LayoutPicker";
import ColorPicker from "./components/ColorPicker";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const [educationIndex, setEducationIndex] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("content");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [educationForms, setEducationForms] = useState([]);
  const [experienceForms, setExperienceForms] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [educationSection, setEducationSection] = useState([]);
  const [experienceSection, setExperienceSection] = useState([]);
  const [layout, setLayout] = useState("top");
  const [accentColor, setAccentColor] = useState("#0e374e");
  const createEducationSection = () => {
    const newSection = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    };
    setEducationSection([...educationSection, newSection]);
  };

  const createExperienceSection = () => {
    const newSection = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };
    setExperienceSection([...experienceSection, newSection]);
  };

  const deleteExperienceForm = (formIndex) => {
    const updatedForms = experienceForms.filter(
      (_, index) => index !== formIndex
    );
    const updatedExperienceSection = experienceSection.filter(
      (_, index) => index !== formIndex
    );

    // Update state
    setExperienceForms(updatedForms);
    setExperienceSection(updatedExperienceSection);
  };

  const deleteEducationForm = (formIndex) => {
    // Filter out the selected form and its corresponding information
    const updatedForms = educationForms.filter(
      (_, index) => index !== formIndex
    );
    const updatedEducationSection = educationSection.filter(
      (_, index) => index !== formIndex
    );

    console.log(updatedEducationSection);

    // Update state
    setEducationForms(updatedForms);
    setEducationSection(updatedEducationSection);
  };

  const createEducationForm = () => {
    const form = (
      <EducationForm
        id={educationSection.length}
        setEducationInfo={setEducationSection}
        key={educationSection.length}
        deleteForm={deleteEducationForm}
        setIsCreating={setIsCreating}
        setIsEditing={setIsEditing}
      />
    );
    setEducationForms((educationForms) => [...educationForms, form]);
  };

  const createExperienceForm = () => {
    const form = (
      <ExperienceForm
        id={experienceSection.length}
        setExperienceInfo={setExperienceSection}
        key={experienceSection.length}
        deleteForm={(formIndex) => deleteExperienceForm(formIndex)}
        setIsCreating={setIsCreating}
        setIsEditing={setIsEditing}
      />
    );
    setExperienceForms((experienceForms) => [...experienceForms, form]);
  };

  const clearResume = () => {
    setPersonalInfo({ fullName: "", email: "", phoneNumber: "", address: "" });
    setEducationForms([]);
    setEducationIndex(0);
    setEducationSection([]);
    setExperienceForms([]);
    setExperienceIndex(0);
    setEducationSection([]);
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF();
    const container = document.querySelector(".resume-wrapper");

    if (container) {
      const canvas = await html2canvas(container);
      const imageData = canvas.toDataURL("image/png");

      pdf.addImage(
        imageData,
        "PNG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      pdf.save(`${personalInfo.fullName} Resume.pdf`);
    }
  };

  return (
    <>
      <Sidebar
        selectedTab={selectedTab}
        changeSelected={setSelectedTab}
        clearResume={clearResume}
        downloadResume={downloadPDF}
      />
      <main>
        {selectedTab === "content" && (
          <>
            <Collapsable title="Personal Info">
              <PersonalInfo
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
              />
            </Collapsable>
            <Collapsable title="Education">
              {isCreating && educationForms[educationForms.length - 1]}
              {!isCreating &&
                !isEditing &&
                educationSection.map((section, index) => {
                  console.log(index);
                  return (
                    <EducationInfo
                      id={index}
                      educationInfo={section}
                      setEducationIndex={setEducationIndex}
                      setIsEditing={setIsEditing}
                      key={index}
                    />
                  );
                })}
              {!isCreating && !isEditing && (
                <CreateForm
                  title="education"
                  onClick={() => {
                    createEducationForm();
                    createEducationSection();
                    setIsCreating(true);
                  }}
                />
              )}
              {isEditing && (
                <EducationForm
                  id={educationIndex}
                  setEducationInfo={setEducationSection}
                  key={educationIndex}
                  deleteForm={(formIndex) => deleteEducationForm(formIndex)}
                  setIsCreating={setIsCreating}
                  setIsEditing={setIsEditing}
                  information={educationSection[educationIndex]}
                />
              )}
            </Collapsable>
            <Collapsable title="Experience">
              {isCreating && experienceForms[experienceForms.length - 1]}
              {!isCreating &&
                !isEditing &&
                experienceSection.map((section, index) => {
                  console.log(index);
                  return (
                    <ExperienceInfo
                      id={index}
                      experienceInfo={section}
                      setExperienceIndex={setExperienceIndex}
                      setIsEditing={setIsEditing}
                      key={index}
                    />
                  );
                })}
              {!isCreating && !isEditing && (
                <CreateForm
                  title="experience"
                  onClick={() => {
                    createExperienceForm();
                    createExperienceSection();
                    setIsCreating(true);
                  }}
                />
              )}
              {isEditing && (
                <ExperienceForm
                  id={experienceIndex}
                  setExperienceInfo={setExperienceSection}
                  key={experienceIndex}
                  deleteForm={(formIndex) => deleteExperienceForm(formIndex)}
                  setIsCreating={setIsCreating}
                  setIsEditing={setIsEditing}
                  information={experienceSection[experienceIndex]}
                />
              )}
            </Collapsable>
          </>
        )}
        {selectedTab === "customize" && (
          <>
            <LayoutPicker setLayout={setLayout} />
            <ColorPicker setAccentColor={setAccentColor} />
          </>
        )}
        <ResumeLayout
          personalInfo={personalInfo}
          educationInfo={educationSection}
          experienceInfo={experienceSection}
          layout={layout}
          accentColor={accentColor}
        />
      </main>
    </>
  );
}

export default App;
