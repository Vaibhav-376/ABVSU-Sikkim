import React from "react";

const ExaminationPolicy = () => {
  const examinationStrucure = [
    {
      id: 1,
      heading: "Formative Assessments",
      desc: "Ongoing assessments including quizzes, assignments, and lab work.",
    },
    {
      id: 2,
      heading: "Summative Assessments",
      desc: "Mid-term and final exams, project-based evaluations.",
    },
    {
      id: 3,
      heading: "Practical and Skill-Based Examinations",
      desc: "Lab exams, industry-sponsored challenges.",
    },
    {
      id: 4,
      heading: "Research and Development Evaluations",
      desc: "Research projects, presentations, and innovation assessments",
    },
  ];

  const examinationSchedule = [
    {
      id: 1,
      heading: "Mid-Term Examinations",
      desc: "Conducted halfway through the semester.",
    },
    {
      id: 2,
      heading: "Final Examinations",
      desc: "Held at the end of the semester.",
    },
    {
      id: 3,
      heading: "Make-Up Examinations",
      desc: "Available for students with valid reasons such as medical emergencies.",
    },
  ];

  const gradingSystem = [
    { id: 1, grade: "Grade A+ (90-100%)", desc: "Excellent" },
    { id: 2, grade: "Grade A (80-89%)", desc: "Very Good" },
    { id: 3, grade: "Grade B+ (70-79%)", desc: "Good" },
    { id: 4, grade: "Grade B (60-69%)", desc: "Satisfactory" },
    { id: 5, grade: "Grade C+ (50-59%)", desc: "Pass" },
    { id: 6, grade: "Grade C (40-49%)", desc: "Marginal Pass" },
    { id: 7, grade: "Grade F (Below 40%)", desc: "Fail" },
  ];

  const examinationIntegrity = [
    { id: 1, desc: "Cancellation of the Examination" },
    { id: 2, desc: "A failing grade for the course" },
    {
      id: 3,
      desc: "Possible suspension or expulsion, depending on the severity of the violation",
    },
  ];

  const support = [
    {
      id: 1,
      heading: "Tutoring and Peer Support",
      desc: "Available for students who need additional help.",
    },
    {
      id: 2,
      heading: "Counseling and Stress Management",
      desc: "Workshops and one-on-one counseling.",
    },
    {
      id: 3,
      heading: "Technology Assistance",
      desc: "Support for online exams and digital learning platforms.",
    },
  ];
  return (
    <div className="md:text-left md:mx-10 mx-5">
      <div>
        <h2 className="font-bold text-2xl text-[#003262]">
          University Examination Policy
        </h2>
        <p className="mt-4 text-justify">
          At The Atal Bihari Vajapayee Skill University, we believe that the
          assessment process is an essential component of a student's academic
          journey. In keeping with our commitment to developing a skills-driven,
          technology-enabled educational environment, our examination policy is
          designed to focus on both knowledge and the practical application of
          skills. With support from the government, industry, and academia, we
          aim to prepare students for the future by providing rigorous, fair,
          and comprehensive assessments that ensure they are industry-ready.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">
          Purpose of Examination
        </h2>
        <p className="mt-4 text-justify">
          The purpose of our examination system is to evaluate students'
          understanding of core concepts, their ability to apply knowledge to
          real-world challenges, and their preparedness for their chosen
          careers. The examinations are designed to be holistic, combining
          traditional theoretical assessments with project-based evaluations,
          presentations, and practical exams that reflect the current trends in
          technology and industry practices.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-2xl text-[#003262] mt-10">
          Examination Structure
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-0 md:gap-2 mt-5">
          {examinationStrucure.map((item) => (
            <div
              key={item.id}
              className="rounded-xl w-auto h-auto px-4 py-2 border-2 mt-1 border-[#003262]"
            >
              <h2 className="text-center font-bold text-[#003262]">
                {item.heading}
              </h2>
              <p className="text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">
          Examination Schedule
        </h2>
        <p className="text-left mt-1">
          The examination schedule will be announced at the beginning of each
          semester. Students are expected to adhere to the following timelines:
        </p>
        <div>
          {examinationSchedule.map((item) => (
            <div key={item.id} className="mt-2 text-left">
              <ul className="list-disc mx-4">
                <li>
                  <span className="font-bold text-[#003262]">
                    {item.heading}
                  </span>
                  {" : "} {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">Grading System</h2>
        <p className="mt-2 text-justify">
          The grading system at The Atal Bihari Vajapayee Skill University is
          designed to encourage students to excel while maintaining transparency
          and fairness in the evaluation process. The grading scale is as
          follows:
        </p>
        <div className="mt-4">
          {gradingSystem.map((item) => (
            <div className=" text-left" key={item.id}>
              <p>
                <span className="font-bold text-[#003262]">{item.grade}</span>{" "}
                {" : "} {item.desc}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">
          Examination Integrity and Academic Honesty
        </h2>
        <p className="text-justify mt-4">
          Academic integrity is a cornerstone of The Atal Bihari Vajapayee Skill
          University. Students are expected to adhere to the highest standards
          of honesty during examinations. Any form of cheating, plagiarism, or
          unethical behavior will result in disciplinary action, which may
          include:
        </p>

        <div className="mt-4">
          {examinationIntegrity.map((item) => (
            <div key={item.id} className="text-left mx-4">
              <ul className="list-disc">
                <li>{item.desc}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">
          Support for Student
        </h2>
        <div className="mt-3">
          {support.map((item) => (
            <div key={item.id} className="text-left">
              <ul className="list-disc mx-4">
                <li>
                  <span className="font-bold text-[#003262]">
                    {item.heading}
                  </span>{" "}
                  {" : "}
                  {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-justify">
        <p>
          The Atal Bihari Vajapayee Skill University is committed to ensuring
          that our examination system remains fair, comprehensive, and relevant
          to the needs of the students and the industry. By focusing on skills
          development, real-world application, and ethical standards, we aim to
          produce graduates who are well-prepared for the challenges of the
          future. We encourage all students to approach their studies with
          dedication and integrity, and to make the most of the opportunities
          provided to them during their academic journey.
        </p>
        <div className="mt-5">
          <h2 className="font-bold text-[#003262]">Sincerely</h2>
          <h2 className="font-bold text-[#003262]">
            Atal Bihari Vajapayee Skill University
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExaminationPolicy;
