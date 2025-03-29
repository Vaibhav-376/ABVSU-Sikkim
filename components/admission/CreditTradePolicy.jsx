import React from "react";

const CreditTradePolicy = () => {
  const policy = [
    {
      id: 1,
      heading: "Flexibility and Mobility",
      description:
        "Students will have the option to earn credits from multiple academic disciplines and institutions, allowing them to diversify their learning experience and tailor their education to match industry needs and personal aspirations.",
    },
    {
      id: 2,
      heading: "Interdisciplinary Learning",
      description:
        "The policy encourages students to combine courses across various domains—whether technical, managerial, or creative—to ensure a holistic learning experience that fosters both technical expertise and soft skills.",
    },
    {
      id: 3,
      heading: "Industry Integration",
      description:
        "Through our collaborations with government bodies, industry leaders, and academic institutions, students can gain credit for real-world projects, internships, and research opportunities, which will be integrated into their academic transcripts.",
    },
    {
      id: 4,
      heading: "Global Learning Opportunities",
      description:
        "The policy provides students with the opportunity to undertake credit-earning programs at global partner universities and institutions, ensuring exposure to international standards, practices, and perspectives.",
    },
    {
      id: 5,
      heading: "Technology-Enabled Learning",
      description:
        "In line with our commitment to technology-enabled education, the policy supports the use of online platforms, digital tools, and virtual learning environments to facilitate credit exchanges, making learning more accessible and adaptable to the needs of modern learners.",
    },
    {
      id: 6,
      heading: "Skills-Led Approach",
      description:
        " By focusing on skills development, the Credit Trades Policy ensures that students graduate with not just academic knowledge, but also with the practical, industry-relevant skills needed to succeed in their careers.",
    },
  ];

  const studentBenefits = [
    {
      id: 1,
      heading: "Personalized Academic Journey",
      description:
        "Tailor your course selections and credit transfers to match your career aspirations.",
    },
    {
      id: 2,
      heading: "Enhanced Employability",
      description:
        "Gain real-world skills and qualifications through industry collaborations and global learning opportunities.",
    },
    {
      id: 3,
      heading: "Global Exposure",
      description:
        "Participate in international academic exchanges and internships that enhance your global perspective.",
    },
    {
      id: 4,
      heading: "Flexibility in Learning",
      description:
        "Access a range of learning modes—from traditional classroom settings to online courses and industry-specific workshops—designed to suit diverse learning styles.",
    },
  ];
  return (
    <>
      <section className="md:text-left mx-10">
        <div>
          <h2 className="font-bold text-2xl mb-2 text-[#003262]">
            ABVSU Credit Trade Policy
          </h2>
          <p className="text-justify">
            At The Atal bihari Vajapayee Skill University, we are committed to
            shaping the future of education by staying ahead of global trends
            and empowering young minds with the skills necessary to excel in an
            ever-evolving world. As part of our efforts to provide a
            transformative and skills-led learning experience, we are excited to
            introduce our Credit Trades Policy, designed to offer students
            greater flexibility, mobility, and access to diverse learning
            opportunities.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl mt-5 mb-2 text-[#003262]">
            Objective
          </h2>
          <p className="text-justify">
            The Credit Trades Policy aims to facilitate the exchange and
            transfer of academic credits between different courses, programs,
            and even external institutions—nationally and internationally. This
            will enable students to explore interdisciplinary subjects, gain
            practical skills, and tailor their academic pathways according to
            their individual career goals and interests.
          </p>
        </div>
        <div className="text-left">
          <h2 className="font-bold text-2xl mt-5 mb-2 text-[#003262]">
            Key Features Of Credit Trade Policy
          </h2>

          {policy.map((items) => (
            <div key={items.id}>
              <ul className="list-disc">
                <li className="mt-4 mx-5">
                  <span className="font-bold ">{items.heading}: </span>
                  {items.description}
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 font-bold text-2xl">
          <h2 className="text-[#003262]">Students Benefits</h2>
          <div className="flex md:flex-row flex-col gap-0 md:gap-4">
            {studentBenefits.map((items) => (
              <div
                className="rounded-xl border-2 border-[#003262] mx-auto h-auto w-full max-w-md mt-10 p-4"
                key={items.id}
              >
                <h2 className="text-[#003262]">{items.heading}</h2>
                <p className="text-sm mt-2">{items.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 text-left">
          <p>
            The Atal bihari Vajapayee Skill University’s Credit Trades Policy
            represents our ongoing commitment to creating a futuristic
            educational model that prepares our students for the challenges and
            opportunities of tomorrow. By embracing this policy, students will
            be empowered to craft a learning path that is as dynamic and diverse
            as the world they will help shape.
          </p>

          <p className="mt-4">
            We encourage all students to explore the possibilities this policy
            offers and to make the most of the opportunities available to them,
            ensuring a holistic, skills-oriented, and globally relevant
            education.
          </p>
        </div>
        <div className="mt-8 text-left">
          <h2 className="text-[#003262] font-bold">Sincerely,</h2>
          <p className="text-[#003262] font-bold">
            The Atal bihari Vajapayee Skill University
          </p>
        </div>
        <div className="mt-16">
          <p className="text-red-600 font-bold text-left">
            *The University reserves the right to modify, amend, or update these
            policies at any time without prior notice. Changes will take effect
            immediately upon publication on the official University website. It
            is the responsibility of users to review these policies periodically
            for any updates.*
          </p>
        </div>
      </section>
    </>
  );
};

export default CreditTradePolicy;
