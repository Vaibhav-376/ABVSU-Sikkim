import React from "react";

const EqualOpportunityCell = () => {
  const objectiveOfEqualOpportunityCell = [
    {
      id: 1,
      heading: "Promote Inclusive Education",
      desc: "Ensuring every student has equal access to quality learning resources and facilities.",
    },
    {
      id: 2,
      heading: "Eliminate Discrimination",
      desc: "Upholding a fair, transparent, and non-discriminatory environment within the university.",
    },
    {
      id: 3,
      heading: "Empower Marginalized Communities",
      desc: "Providing mentorship, scholarships, and skill development initiatives.",
    },
    {
      id: 4,
      heading: "Support Differently-Abled Students",
      desc: "Implementing accessible infrastructure and assistive learning technologies.",
    },
    {
      id: 5,
      heading: "Foster a Safe & Respectful Campus",
      desc: "Addressing grievances related to bias, harassment, or discrimination.",
    },
  ];

  const policiesAndInitiatives = [
    {
      id: 1,
      heading: "Scholarships & Financial Assistance",
      desc: "Special financial aid programs for students from disadvantaged backgrounds.",
    },
    {
      id: 2,
      heading: " Accessible Campus & Infrastructure",
      desc: "Ramps, special seating, and digital resources for differently-abled students.",
    },
    {
      id: 3,
      heading: " Awareness & Sensitization Programs",
      desc: "Workshops on gender equality, disability rights, and cultural sensitivity.",
    },
    {
      id: 4,
      heading: "Grievance Redressal Mechanism",
      desc: "A dedicated platform to address complaints regarding discrimination or exclusion.",
    },
    {
      id: 5,
      heading: "Career Guidance & Skill Development",
      desc: "Special training programs to boost employability and confidence.",
    },
  ];

  const EOC = [
    {
      id: 1,
      desc: "Students from Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes (OBC)",
    },
    { id: 2, desc: "Students with disabilities (PwD)" },
    {
      id: 3,
      desc: "Women facing gender-based challenges in education or career growth",
    },
    {
      id: 4,
      desc: "Any individual facing discrimination based on religion, ethnicity, language, or background",
    },
  ];

  return (
    <div className="md:text-left md:mx-10 mx-4">
      <div>
        <h2 className="font-bold text-[#003262] text-2xl">
          Equal Opportunity Cell (EOC)-Promoting Inclusion & Diversity at ABVSU
        </h2>
        <h2 className="font-semibold text-lg mt-2">
          Ensuring Fairness, Equity, and Inclusion for All
        </h2>
        <p className="mt-5 text-justify">
          At Atal Bihari Vajapayee Skill University (ABVSU), we firmly believe
          in the power of diversity and equal opportunity. Our Equal Opportunity
          Cell (EOC) is dedicated to fostering an inclusive, bias-free, and
          accessible environment where every student, faculty, and staff member
          is empowered to achieve their full potential.
        </p>
        <p className="mt-5 text-justify">
          The EOC ensures that individuals from all backgrounds—including
          differently-abled students, economically weaker sections, minorities,
          and underrepresented communities—are given the support, resources, and
          opportunities they deserve to thrive academically and professionally.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-10">
          Objectives Of the Equal Opportuinity Cell
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-2 mt-5">
          {objectiveOfEqualOpportunityCell.map((item) => (
            <div
              key={item.id}
              className="rounded-lg w-auto mb-2 h-auto border-2 border-[#003262] p-4"
            >
              <h2 className="text-center font-bold text-[#003262] text-xl">
                {item.heading}
              </h2>
              <p className="text-justify mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">
          Policies & Initiatives
        </h2>
        <div className="mt-5">
          {policiesAndInitiatives.map((item) => (
            <div key={item.id}>
              <ul className="list-disc mx-4 my-3 text-left">
                <li>
                  <span className="font-bold text-[#003262] ">
                    {item.heading}
                  </span>{" "}
                  {" : "} {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-2xl text-[#003262] mt-10">
          Who Can Approach the EOC
        </h2>
        <div>
          {EOC.map((item) => (
            <div
              className="border-2 rounded-lg p-3 my-1 border-[#003262] mt-4"
              key={item.id}
            >
              <ul className="list-disc mx-4 text-left">
                <li>{item.desc}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">How to Reach Us?</h2>
        <div className="mt-5">
          <span> <span className="font-bold text-[#003262] text-xl">Location</span> : Equal Opportunity Cell, ABVSU Campus, Namchi, Sikkim</span><br />
          <span> <span className="font-bold text-[#003262] text-xl">Email </span>: info@ABVSU.ac.in</span>
        </div>
      </div>
    </div>
  );
};

export default EqualOpportunityCell;
