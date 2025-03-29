"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const developmentPlan = [
  {
    title: "Curriculum Innovation and Industry Alignment",
    objective:
      "Ensure our academic programs are continually evolving to reflect industry demands, emerging technologies, and global trends.",
    actionPlan: [
      "Regular curriculum updates in collaboration with industry experts.",
      "Introduction of interdisciplinary programs in AI, data science, and emerging technologies.",
      "Implementation of a project-based, hands-on learning approach.",
      "Expansion of industry internships and corporate partnerships.",
    ],
  },
  {
    title: "Technology-Enabled Learning and Infrastructure Development",
    objective: "Create a state-of-the-art digital learning environment.",
    actionPlan: [
      "Expansion of e-learning platforms and digital resources.",
      "Integration of AI-driven learning management systems.",
      "Development of advanced research facilities.",
      "Establishment of a robust IT infrastructure.",
    ],
  },
  {
    title: "Research and Innovation Ecosystem",
    objective: "Build a strong research-oriented culture.",
    actionPlan: [
      "Establishment of research centers in key areas.",
      "Encouraging faculty and student-led research collaborations.",
      "Development of innovation hubs and technology incubators.",
      "Hosting hackathons, research symposia, and innovation challenges.",
    ],
  },
  {
    title: "Global Engagement and International Collaborations",
    objective: "Provide global exposure and collaborative opportunities.",
    actionPlan: [
      "Strengthen and establish academic partnerships worldwide.",
      "Offer student exchange programs and international internships.",
      "Facilitate faculty exchange programs and research collaborations.",
      "Develop platforms for virtual global learning.",
    ],
  },
  {
    title: "Faculty Development and Excellence",
    objective: "Recruit and develop world-class faculty.",
    actionPlan: [
      "Regular faculty training programs.",
      "Promotion of continuous learning and research engagement.",
      "Attracting distinguished visiting faculty.",
      "Encouraging faculty involvement in community outreach.",
    ],
  },
  {
    title: "Student-Centric Initiatives",
    objective: "Provide an enriching academic experience.",
    actionPlan: [
      "Development of mentorship and career counseling programs.",
      "Establishment of platforms for extracurricular and leadership activities.",
      "Enhancement of placement and internship support systems.",
      "Strengthening student-alumni networks.",
    ],
  },
  {
    title: "Sustainability and Community Impact",
    objective: "Integrate sustainability and social responsibility.",
    actionPlan: [
      "Launch sustainability-focused initiatives like green campuses.",
      "Promote social innovation projects.",
      "Engage in partnerships with non-profit organizations.",
    ],
  },
];

const InstituteDevelopmentPlan = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="container mx-auto py-10 px-6 text-justify max-w-7xl">
      <h2 className="text-3xl font-bold pb-4">
        University Institutional Development Plan
      </h2>
      <p className="text-gray-700 pb-6">
        At Atal Bihari Vajpayee Skill University (ABVSU) Sikkim, we are
        committed to fostering innovation in education, equipping students with
        essential skills, and preparing them for the future workforce through
        our well-structured Institutional Development Plan.
      </p>

      <p className="pb-6">Our Institutional Development Plan outlines the strategic goals and initiatives that will guide the university’s growth, ensuring that we continue to provide world-class education, research, and development opportunities for students, faculty, and the wider community.</p>

      <h3 className="text-xl font-bold pb-4">
        Key Focus Areas of the Institutional Development Plan:
      </h3>
      <div className="space-y-6">
        {developmentPlan.map((item, index) => (
          <div key={index} className="border p-2  bg-white">
            <button
              className="w-full text-left text-md font-semibold flex justify-between"
              onClick={() => setSelected(selected === index ? null : index)}
            >
              {index + 1}. {item.title}
              <span>
                {selected === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {selected === index && (
              <div className="mt-3 text-gray-700 px-4">
                <p className="font-semibold">Objective:</p>
                <p className="pb-2 px-4">{item.objective}</p>
                <p className="font-semibold">Action Plan:</p>
                <ul className="list-disc pl-8">
                  {item.actionPlan.map((action, idx) => (
                    <li key={idx}>{action}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 ">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Timeline and Evaluation
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The Institutional Development Plan is designed for implementation over
            <strong> five years</strong>, with periodic evaluations. Key
          performance indicators will be tracked in areas like:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Student satisfaction</li>
          <li>Research output</li>
          <li>Industry engagement</li>
          <li>Global partnerships</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Annual reviews will involve feedback from stakeholders to ensure
          alignment with our mission.
        </p>
        <p className="font-semibold text-gray-900 mt-4">Sincerely,</p>
        <p className="text-gray-800 font-medium">
          Atal Bihari Vajpayee Skill University, Sikkim
        </p>
      </div>
    </section>
  );
};

export default InstituteDevelopmentPlan;
