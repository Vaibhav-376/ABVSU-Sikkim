import React from "react";
import { FaBullhorn, FaCheckCircle, FaHandshake, FaExclamationCircle } from 'react-icons/fa'; // Import icons for objectives and responsibilities

const DisciplineCommittee = () => {
  const keyObjective = [
    { id: 1, desc: 'To promote a culture of respect, accountability, and integrity within the university community.', icon: <FaBullhorn className="text-2xl text-[#003262]" /> },
    { id: 2, desc: "To enforce ABVSU's code of conduct by addressing violations in a consistent and impartial manner.", icon: <FaExclamationCircle className="text-2xl text-[#003262]" /> },
    { id: 3, desc: "To support students in understanding the importance of personal responsibility and ethical behavior.", icon: <FaCheckCircle className="text-2xl text-[#003262]" /> },
    { id: 4, desc: "To provide guidance on appropriate conduct and assist in conflict resolution when necessary.", icon: <FaHandshake className="text-2xl text-[#003262]" /> }
  ];

  const responsibilities = [
    { id: 1, desc: 'Conducting awareness programs on the importance of discipline and responsible conduct.' },
    { id: 2, desc: 'Reviewing and investigating any reported incidents of misconduct or violations of the code of conduct.' },
    { id: 3, desc: 'Facilitating meetings and hearings to address grievances or disputes in a fair and transparent process.' },
    { id: 4, desc: "Imposing corrective actions or sanctions when necessary, in line with ABVSU's policies." }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans p-6 md:px-10 md:py-8">
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold text-[#003262] mb-4">Discipline <span className="text-[#003262]">Committee</span></h2>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed text-justify">
          At Atal Bihari Vajapayee Skill University (ABVSU), we uphold the values of
          respect, integrity, and responsibility, which form the foundation of
          our academic environment. To ensure that these values are maintained
          and that all students can thrive in a positive and supportive
          atmosphere, ABVSU has established a dedicated Discipline Committee. The
          committee’s role is to oversee student conduct, enforce university
          policies, and promote a culture of respect across campus.
        </p>
        
        <p className="mt-4 text-lg text-gray-700 leading-relaxed text-justify">
          The Discipline Committee is composed of faculty members,
          administrative officials, and student representatives who work
          together to foster a safe and respectful environment. They are
          responsible for monitoring disciplinary standards and responding to
          any incidents that may disrupt the academic experience or well-being
          of our campus community. With a focus on fairness and transparency,
          the committee is committed to upholding ABVSU's code of conduct,
          ensuring that all students adhere to the principles of professionalism
          and mutual respect.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#003262] mb-4">Key Objectives of the Discipline Committee</h3>
        <div className="space-y-4">
          {keyObjective.map((item) => (
            <div key={item.id} className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg transition duration-300">
              {item.icon}
              <p className="text-lg text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#003262] mb-4">The Responsibilities of the Discipline Committee Include:</h3>
        <div className="space-y-4">
          {responsibilities.map((item) => (
            <div key={item.id} className="flex items-start space-x-4 hover:bg-gray-100 p-4 rounded-lg transition duration-300">
              <FaCheckCircle className="text-2xl text-[#003262]" />
              <p className="text-lg text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          ABVSU's Discipline Committee aims to create an environment where students can learn and grow in a respectful and orderly setting. We believe that by upholding a high standard of discipline, we can help students develop into responsible and ethical leaders who are well-prepared to contribute to society. The committee’s efforts are focused not only on addressing misconduct but also on educating students about the importance of maintaining a positive reputation and contributing to a harmonious community.
        </p>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          In conclusion, the Discipline Committee at ABVSU is dedicated to building a campus culture that values ethical behavior, respect for others, and personal accountability. By providing clear guidelines and a support system, the committee strives to ensure that ABVSU remains a place where students can pursue their academic goals in a peaceful, positive, and motivating environment.
        </p>
      </div>
    </div>
  );
};

export default DisciplineCommittee;
