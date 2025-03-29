import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Scholarship = () => {
  const scholarShip = [
    { id: 1, description: "100% Scholarship (MS – 1) (80% – 100%)" },
    { id: 2, description: "50% Scholarship (MS – 2) (65% – 79%)" },
    { id: 3, description: "25% Scholarship (MS – 3) (60% – 64%)" },
  ];

  const otherConcession = [
    {
      id: 1,
      description:
        "EC: University Employee’s siblings, wards & spouse (50% Concession)",
    },
    { id: 2, description: "PH: Physically Handicapped (50% Concession)" },
    {
      id: 3,
      description:
        "FD: Freedom Fighter/Defence Personnel/Police and paramilitary Wards (50% Concession)",
    },
    {
      id: 4,
      description:
        "SC: Siblings Concession – Siblings of Continuing Students (50% Concession)",
    },
    {
      id: 5,
      description:
        "HD: Higher Degree Concession for the Students of Sikkim Professional University (50% Concession)",
    },
    { id: 6, description: "SQ: Sikkim Quota Allotment (50% Concession)" },
    {
      id: 7,
      description:
        "MC: Minority Concession (50% for Muslim/Sikh/Jain/Christian/Buddhist and Zoroastrianism (Parsis) Students)",
    },
  ];

  return (
    <section className="flex flex-col items-center lg:items-start lg:px-20 px-6 ">
      <div className="max-w-3xl w-full">
        <h1 className="font-extrabold text-3xl text-center lg:text-left">
          Fee Concessions /
          <span className="text-[#003262]"> Scholarships </span>
        </h1>
        <p className="text-lg mt-3 text-gray-700 text-center lg:text-left">
          MS: Merit Scholarship
          <span className="block text-sm text-gray-500">
            (On the basis of Marks Obtained in the last Qualifying Examination)
          </span>
        </p>

        <div className="mt-4">
          {scholarShip.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2 border-b border-gray-300"
            >
              <FaCheckCircle className="text-[#003262]" />
              <span className="text-lg text-gray-800">{item.description}</span>
            </div>
          ))}
        </div>

        <h2 className="font-extrabold text-2xl mt-10 text-center lg:text-left">
          Other Scholarships <span className="text-[#003262]">and Concessions</span>
        </h2>
        <div className="mt-3">
          {otherConcession.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2 border-b border-gray-300"
            >
              <FaCheckCircle className="text-[#003262]" />
              <span className="text-lg text-left text-gray-800">{item.description}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center lg:text-center text-[#003262] font-semibold">
          <p>* Above mentioned Concession/Scholarships apply only to Tuition Fees *</p>
          <p>* Only one of the above Concessions/Scholarships can be availed *</p>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
