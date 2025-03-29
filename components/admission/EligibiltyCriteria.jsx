import React from "react";

const EligibilityCriteria = () => {
  const criteriaList = [
    {
      id: 1,
      list: "To be eligible for admission to any undergraduate program at Atal bihari Vajapayee Skill University, applicants must be at least 17 years old as of December 31st of the academic year in which they seek admission.",
    },
    {
      id: 2,
      list: "For all Diploma, Advanced Diploma, and Degree programs, candidates must have completed 10+2 or an equivalent qualification.",
    },
    {
      id: 3,
      list: "Admission to the Faculty of Healthcare & Allied Sciences requires candidates to have completed 10+2 or an equivalent qualification, with Biology as a subject in their curriculum.",
    },
    {
      id: 4,
      list: "For the Skill Certificate Course in General Duty Assistant, candidates must have completed Class 10. However, in certain cases, candidates who have passed Class 8 may also be considered.",
    },
  ];

  return (
    <section className="container mx-auto ">
      <div className="font-bold text-2xl text-center mb-4">
        Eligibility <span className="text-[#003262]">Criteria</span>
      </div>

      <div className="grid md:grid-cols-2 mt-10 p-4 gap-4">
        {criteriaList.map((item) => (
          <div key={item.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside">
              <li className="text-gray-700">{item.list}</li>
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default EligibilityCriteria;
