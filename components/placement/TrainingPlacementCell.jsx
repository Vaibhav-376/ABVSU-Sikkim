import React from "react";

const TrainingPlacementCell = () => {
  const featuresOfTraining = [
    {
      id: 1,
      heading: "Industry Partnerships and Collaborations",
      description:
        "Strategic partnerships with leading industries and companies provide students with access to internships, live projects, and career opportunities aligned with current industry trends.",
    },
    {
      id: 2,
      heading: "Skills Development Programs",
      description:
        "Workshops, seminars, and certification programs focus on enhancing technical and soft skills such as leadership, AI, data science, and digital transformation.",
    },
    {
      id: 3,
      heading: "Internships and Industry Exposure",
      description:
        "Collaborations with top-tier companies ensure students gain hands-on training and professional experience.",
    },
    {
      id: 4,
      heading: "Personalized Career Counseling",
      description:
        "One-on-one career counseling sessions, mock interviews, resume-building workshops, and personality development programs help students prepare for the workforce.",
    },
    {
      id: 5,
      heading: "On-Campus Recruitment Drives",
      description:
        "Regular recruitment drives connect students with top companies and recruiters, increasing job placement success.",
    },
    {
      id: 6,
      heading: "Global Career Opportunities",
      description:
        "Industry partnerships provide students with access to international job markets, internships, and global career pathways.",
    },
    {
      id: 7,
      heading: "Alumni Network and Mentorship",
      description:
        "A strong alumni network offers guidance, industry insights, and networking opportunities to current students.",
    },
    {
      id: 8,
      heading: "Continuous Learning and Development",
      description:
        "Encouraging lifelong learning ensures students remain adaptable in an ever-evolving job market.",
    },
  ];
  return (
    <div className="md:text-left mx-10">
      <div>
        <h2 className="font-bold text-[#003262] text-3xl mb-4 text-justify ">
          University Training and Placement Cell
        </h2>
        <p>
          At The Atal bihari Vajapayee Skill University, we understand that academic
          excellence is just one part of a successful career. Equally important
          is equipping our students with the practical skills, industry
          knowledge, and professional networks that will propel them to success
          in today’s competitive job market. This is why we place great emphasis
          on our Training and Placement Cell, a key component of our vision to
          prepare students for the challenges and opportunities of the future.
        </p>
        <p className="mt-8 text-justify ">
          As a futuristic institution, we are committed to providing our
          students with more than just a degree; we aim to provide them with a
          comprehensive, skills-led education that aligns with industry trends
          and global standards. With substantial cooperation from the
          government, industry, and academia, our Training and Placement Cell
          works tirelessly to bridge the gap between academic learning and
          real-world career opportunities.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-2xl mt-8 text-[#003262] -mb-3">
          Key Features of Our Training and Placement Cell
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
          {featuresOfTraining.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border-2 border-[#003262] mx-auto h-auto w-full max-w-md mt-10 p-4"
            >
              <h2 className="text-[#003262] font-bold">{item.heading}</h2>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <p className="mt-3 text-justify">
          At The Atal bihari Vajapayee Skill University, our Training and Placement
          Cell is committed to ensuring that every student is not only
          academically prepared but also industry-ready. By focusing on skill
          development, industry exposure, and personalized career guidance, we
          empower our students to confidently step into the workforce, equipped
          with the knowledge, experience, and networks needed to succeed.
        </p>
        <p className="mt-4 text-justify">
          As a model for young India, we are shaping the future by focusing on
          the trends and skills that will define tomorrow's leaders and
          innovators. We are proud of our graduates who go on to make
          significant contributions across industries and are committed to
          continuing our work to create pathways to success for every student.
        </p>
      </div>
      <div className="mt-8 text-left">
        <h2 className="text-[#003262] font-bold">Sincerely,</h2>
        <p className="text-[#003262] font-bold   ">
          Head, Training and Placement Cell
        </p>
        <p className="text-[#003262] font-bold">
          The Atal bihari Vajapayee Skill University
        </p>
      </div>
    </div>
  );
};

export default TrainingPlacementCell;
