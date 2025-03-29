import React from "react";

const RecruitmentProcess = () => {
  const placementTraining = [
    { id: 1, desciption: "Resume Building & Cover Letter Writing" },
    { id: 2, desciption: "Interview Preparation & Mock Interviews" },
    { id: 3, desciption: "Soft Skills & Personality Development" },
    { id: 4, desciption: "Technical & Aptitude Test Training" },
  ];

  const jobNotification = [
    {
      id: 1,
      description:
        "Placement opportunities are shared through the university portal.",
    },
    {
      id: 2,
      description: "Interested students must register before the deadline.",
    },
  ];

  const screeningProcess = [
    { id: 1, description: " Academic Performance & CGPA Criteria" },
    { id: 2, description: "Skill Assessments (Technical & Soft Skills)" },
    { id: 3, description: "Aptitude & Psychometric Tests" },
    { id: 4, description: "Resume & Profile Review" },
  ];
  const selectionProcess = [
    {
      id: 1,
      heading: "Personal Interviews",
      description: "HR & Technical Rounds",
    },
    {
      id: 2,
      heading: " Group Discussions",
      description: " Communication & Teamwork Assessment",
    },
    {
      id: 3,
      heading: "Case Studies & Presentations",
      description: "Problem-Solving Skills Evaluation",
    },
    {
      id: 4,
      heading: "Live Coding / Skill Tests",
      description: "For Tech & IT Roles",
    },
  ];
  const jobOffer = [
    {id:1,description:' Selected students receive offer letters.'},
    {id:2,description:'Students can accept or decline offers based on career goals.'},
    {id:3,description:'Companies may offer internships or pre-placement offers (PPOs).'}
  ];
  const onboarding = [
    {id:1, description:'Students complete joining formalities as per company requirements.'},
    {id:2, description:' Placement cell assists in documentation, verification, and pre-joining training.'},
    {id:3,description:'Students join organizations as per the schedule.'}
  ]
  return (
    <div className="md:text-left mx-10">
      <div>
        <div className="text-2xl">
          <h2 className="font-bold">
            Recruitment Process -{" "}
            <span className="font-bold text-[#003262]">
              Atal Bihari Vajapayee University
            </span>
          </h2>
        </div>
        <p className="mt-3">
          At ABVSU, we are committed to bridging the gap between academic
          excellence and professional success. Our structured recruitment
          process ensures that students are well-prepared for career
          opportunities.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="font-bold text-[#003262] text-xl">
          Step-by-Step Recruitment Process
        </h2>
        <div>
          <ul className="list-disc mx-5">
            <li className="font-bold text-lg text-left">
              Pre-Placement Training
              <div className="flex flex-col md:grid md:grid-cols-3 gap-1 shadow-lg shadow-gray-400 rounded-3xl my-4 p-4">
                {placementTraining.map((items) => (
                  <div
                    className="rounded-xl border-2  w-full h-auto border-[#003262] text-[#003262] max-w-md mt-4 p-6"
                    key={items.id}
                  >
                    {items.desciption}
                  </div>
                ))}
              </div>
            </li>
            <li className="font-bold text-lg mt-3 text-left">
              Industry Collaboration & Placement Partnership
              <div className="font-normal">
                <p>
                  ABVSU collaborates with leading companies, ensuring access to
                  job opportunities across various industries.
                </p>
              </div>
            </li>
            <li className="font-bold text-lg mt-3 text-left">
              Job Notifications & Student Registration
              <div className="flex flex-col md:grid md:grid-cols-3 gap-1 shadow-lg shadow-gray-400 rounded-3xl my-4 p-4">
                {jobNotification.map((items) => (
                  <div
                    className="rounded-xl border-2  w-full h-auto border-[#003262] text-[#003262] max-w-md mt-4 p-6"
                    key={items.id}
                  >
                    {items.description}
                  </div>
                ))}
              </div>
            </li>
            <li className="font-bold text-lg mt-3 text-left">
              Screening & Shortlisting Process
              <div className="flex flex-col md:grid md:grid-cols-3 gap-1 shadow-lg shadow-gray-400 rounded-3xl my-4 p-4">
                {screeningProcess.map((items) => (
                  <div
                    className="rounded-xl border-2  w-full h-auto border-[#003262] text-[#003262] max-w-md mt-4 p-6"
                    key={items.id}
                  >
                    {items.description}
                  </div>
                ))}
              </div>
            </li>
            <li className="font-bold text-lg mt-3 text-left">
              Interview and Selection Process
              <div className="shadow-lg shadow-gray-400 rounded-lg p-10 mt-5">
                <div className="flex flex-col md:grid md:grid-cols-3  gap-1 rounded-3xl my-4 p-4">
                  {selectionProcess.map((items) => (
                    <div
                      key={items.id}
                      className="rounded-xl border-2 w-full h-auto border-[#003262] max-w-md mt-4 p-6"
                    >
                      <span className="font-bold ">{items.heading}</span>
                      {" : "}{" "}
                      <span className="font-normal"> {items.description}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Our placement team supports students throughout this process
                  to help them succeed.
                </p>
              </div>
            </li>
            <li className="font-bold text-lg mt-3 text-left">
              Job Offers & Acceptance
              <div className="flex flex-col md:grid md:grid-cols-3 gap-1 shadow-lg shadow-gray-400 rounded-3xl my-4 p-4">
                {jobOffer.map((items) => (
                  <div
                    key={items.id}
                    className="rounded-xl border-2 w-full h-auto border-[#003262] max-w-md mt-4 p-6"
                  >
                    <span className="font-bold ">{items.heading}</span>
                    <span className="font-normal"> {items.description}</span>
                  </div>
                ))}
              </div>
            </li>
            <li className="font-bold text-lg mt-3 text-left">
              Onboarding & Joining Facilities
              <div className="flex flex-col md:grid md:grid-cols-3 gap-1 shadow-lg shadow-gray-400 rounded-3xl my-4 p-4">
                {onboarding.map((items) => (
                  <div
                    key={items.id}
                    className="rounded-xl border-2 w-full h-auto border-[#003262] max-w-md mt-4 p-6"
                  >
                    <span className="font-bold ">{items.heading}</span>
                    <span className="font-normal"> {items.description}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left mt-10 font-serif text-[#003262]">
        <h2>📩 For Placement Assistance, Contact:</h2>
        <h2>📧 Email: placements@ABVSU.edu.in</h2>
        <h2>📍 Placement Cell, ABVSU Campus, Sikkim</h2>
        <h2>🌐 Website: www.abvsu.edu.in</h2>
      </div>
    </div>
  );
};

export default RecruitmentProcess;
