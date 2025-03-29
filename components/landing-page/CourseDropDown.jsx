import React, { useState } from "react";

const data = {
  "Under Graduate": {
    "Faculty of Commerce and Management": [
      "B.Com (Hons)",
      "BBA",
      "BCA",
      "B.Com Professional",
    ],
    "Faculty of Science": ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Math", "BTech"],
    "Faculty of Arts": ["BA English", "BA History", "BA Economics"],
  },
  "Post graduate": {
    "Faculty of Commerce and Management": ["M.Com", "MBA"],
    "Faculty of Science": ["M.Sc Physics", "M.Sc Chemistry"],
    "Faculty of Arts": ["MA English", "MA Sociology"],
  },
  "PG Diploma": {
    "Faculty of Management": ["PGDM Marketing", "PGDM HR"],
    "Faculty of Tech": ["PGD in Data Science"],
  },
  Diploma: {
    "Faculty of Engineering": ["Diploma in Civil", "Diploma in Mech"],
    "Faculty of Design": ["Diploma in Interior Design"],
  },
  Certificate: {
    "Faculty of Tech": ["Cert. in AI", "Cert. in Web Dev"],
    "Faculty of Business": ["Cert. in Digital Mktg"],
  },
  Integrated: {
    "Faculty of Law": ["BA LLB", "BBA LLB"],
    "Faculty of Tech": ["B.Tech + M.Tech"],
  },
};

const CourseDropDown = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
    setSelectedFaculty("");
    setSelectedProgram("");
  };

  const handleFacultyChange = (e) => {
    setSelectedFaculty(e.target.value);
    setSelectedProgram("");
  };

  const levels = Object.keys(data);
  const faculties = selectedLevel ? Object.keys(data[selectedLevel]) : [];
  const programs =
    selectedLevel && selectedFaculty
      ? data[selectedLevel][selectedFaculty]
      : [];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#003262] mb-4">
        ABVSU Academic Programs Suited For You
      </h2>
      <div className="flex flex-wrap gap-4 justify-center mt-5 bg-gray-100 shadow-md p-14 rounded-xl">
        <select
          value={selectedLevel}
          onChange={handleLevelChange}
          className="w-64 p-2 border rounded-lg bg-gray-100"
        >
          <option value="">Select Course Level</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>

        <select
          value={selectedFaculty}
          onChange={handleFacultyChange}
          disabled={!selectedLevel}
          className="w-64 p-2 border rounded-lg bg-gray-100"
        >
          <option value="">
            {selectedLevel ? "Select Faculty" : "Select Course Level First"}
          </option>
          {faculties.map((faculty) => (
            <option key={faculty} value={faculty}>
              {faculty}
            </option>
          ))}
        </select>

        <select
          value={selectedProgram}
          onChange={(e) => setSelectedProgram(e.target.value)}
          disabled={!selectedFaculty}
          className="w-64 p-2 border rounded-lg bg-gray-100"
        >
          <option value="">
            {selectedFaculty ? "Select Course*" : "Select Faculty First"}
          </option>
          {programs.map((program) => (
            <option key={program} value={program}>
              {program}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CourseDropDown;
