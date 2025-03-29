"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import transport from "@/public/images/infrastruture/bus.jpg";
import cafeteria from "@/public/images/infrastruture/Cafeteria.jpg";
import seminarHalls from "@/public/images/infrastruture/seminar-hall.webp";
import UMS from "@/public/images/infrastruture/UMS Mobile Application.jpg";
import digitalClassroom from "@/public/images/infrastruture/digital-classroom.jpg";
import wifi from "@/public/images/infrastruture/WiFi-enabled Campus.jpg";
import Image from "next/image";

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

const development = [
  {
    id: 1,
    heading: "Digital Classroom",
    desc: "Our digital classrooms are designed to accommodate 35-40 students comfortably, featuring state-of-the-art furniture and an advanced audio-visual system including projectors, smart boards, and recording facilities.",
    image: digitalClassroom,
  },
  {
    id: 2,
    heading: "Cafeteria",
    desc: "Indulge in a culinary journey at our cafeteria, serving delectable dishes ranging from Asian, North Indian, South Indian to Continental cuisines until late at night. Take away your favorite meals for added convenience.",
    image: cafeteria,
  },
  {
    id: 3,
    heading: "Transport",
    desc: "Enjoy the convenience of our pick-up and drop-off services, available at affordable rates, catering to locations in and around East Sikkim and West Sikkim.",
    image: transport,
  },
  {
    id: 4,
    heading: "Seminar Halls",
    desc: "Engage in insightful discussions and presentations in our 100-seater seminar halls, perfect for hosting guest speakers, performances, and town-hall sessions.",
    image: seminarHalls,
  },
  {
    id: 5,
    heading: "UMS Mobile Application",
    desc: "Access all academic and non-academic activities seamlessly through our Unified Mobile Application, available on both mobile and web platforms.",
    image: UMS,
  },
  {
    id: 6,
    heading: "WiFi-enabled Campus",
    desc: "Stay connected with our WiFi-enabled campus, granting easy access to online resources and our Unified Management System (UMS), supporting your educational journey.",
    image: wifi,
  },
];
const InstituteDevelopmentPlan = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="container mx-auto py-10 px-6 text-justify max-w-7xl">
      <h2 className=" text-[#003262] text-3xl font-bold pb-4">
        University Institutional Development Plan
      </h2>
      <p className="text-gray-700 pb-6">
        At Atal Bihari Vajpayee Skill University (ABVSU) Sikkim, we are
        committed to fostering innovation in education, equipping students with
        essential skills, and preparing them for the future workforce through
        our well-structured Institutional Development Plan.
      </p>

      <p className="pb-6">
        Our Institutional Development Plan outlines the strategic goals and
        initiatives that will guide the university’s growth, ensuring that we
        continue to provide world-class education, research, and development
        opportunities for students, faculty, and the wider community.
      </p>

      <h3 className="text-xl text-[#003262] font-bold pb-4">
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

      {/* CARDS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003262] mb-4">
              Campus and Infrastructure
            </h2>
            <div className="w-20 h-1 bg-[#003262] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {development.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.heading}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#003262] mb-3 text-center">
                    {item.heading}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-8 ">
        <h3 className="text-2xl font-bold text-[#003262] mb-4">
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
        <p className="font-semibold text-[#003262] mt-4">Sincerely,</p>
        <p className=" text-[#003262] font-bold">
          Atal Bihari Vajpayee Skill University, Sikkim
        </p>
      </div>
    </section>
  );
};

export default InstituteDevelopmentPlan;
