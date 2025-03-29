import React from "react";

const OurRecruiter = () => {
  const partner = [
    {
      id: 1,
      heading: "Skills-Led Education for Industry Relevance",
      description:
        "Our focus is on providing a practical, skills-driven education that directly aligns with industry needs. Students are equipped with the technical expertise, problem-solving abilities, and soft skills necessary to succeed in today’s competitive workforce.",
    },
    {
      id: 2,
      heading: "Technology-Enabled Learning",
      description:
        "In a world increasingly driven by technology, our students are trained using the latest digital tools and platforms. From artificial intelligence and machine learning to blockchain and data analytics, we ensure that our graduates are proficient in the technologies shaping the future of work.",
    },
    {
      id: 3,
      heading: "Industry Collaboration",
      description:
        "The Atal bihari Vajapayee Skill University works closely with leading industry partners to keep our curriculum updated and relevant. By actively engaging with industry experts and leaders, we ensure that our students gain exposure to real-world challenges, emerging trends, and the skills required by top employers.",
    },
    {
      id: 4,
      heading: "A Global Perspective",
      description:
        "We recognize that the future workforce must be globally aware and adaptable. Through international collaborations, digital platforms, and cross-cultural learning opportunities, we provide students with the global perspective and skills required to excel in diverse markets.",
    },
    {
      id: 5,
      heading: "Talent Pool Ready to Contribute",
      description:
        "Our graduates are more than just academically trained—they are equipped with practical, hands-on experience from internships, live projects, and collaborations with industry. This real-world exposure means that they are ready to hit the ground running and add value to your organization from day one.",
    },
    {
      id: 6,
      heading: "Customized Support for Your Hiring Needs",
      description:
        "Our dedicated Training and Placement Cell ensures that your recruitment process is efficient and tailored to your specific requirements. Whether you're looking for specialized skills or looking to recruit across departments, we offer personalized services to match you with the best talent.",
    },
    {
      id: 7,
      heading: "Continuous Learning and Innovation",
      description:
        "As industries evolve, so do our students. Through our ongoing partnerships with recruiters, we ensure that our graduates stay current with the latest skills and technologies. Continuous learning is embedded in our ethos, and we prepare our students to keep pace with the ever-changing demands of the workforce.",
    },
  ];

  const engageWithRecruiter = [
    {
      id: 1,
      heading: "Recruitment Drives and Campus Visits",
      description:
        "We organize regular recruitment drives and campus recruitment events, providing you with a platform to meet and recruit top talent from our pool of skilled graduates.",
    },
    {
      id: 2,
      heading: "Collaborative Skill Development",
      description:
        "We work closely with you to understand your hiring needs and design skill development programs that align with your requirements, ensuring our students are prepared for your roles.",
    },
    {
      id: 3,
      heading: "Seamless Placement Support",
      description:
        "From initial contact to final recruitment, our Training and Placement Cell provides end-to-end support, ensuring a smooth and efficient hiring process.",
    },
  ];
  return (
    <div className="md:text-left mx-10">
      <div>
        <h2 className="font-bold text-2xl text-[#003262]">Our Recruiter</h2>
        <p className="mt-3 text-justify ">
          At The Atal Bihari Vajapayee University, we are committed to shaping
          the future of young India by focusing on developing trends, fostering
          innovation, and equipping students with the essential skills needed to
          thrive in a rapidly changing world. With substantial cooperation from
          the government, industry, and academia, we are creating a seamless
          ecosystem where students receive a technology-enabled, skills-led
          education that prepares them for the future of work.
        </p>
        <p className="mt-5 text-justify">
          We recognize the importance of strong industry partnerships and are
          dedicated to working closely with recruiters like you to ensure that
          our graduates are not just job-ready but future-ready. By integrating
          cutting-edge technology into our learning environment and aligning our
          curriculum with the latest industry trends, we are preparing a
          generation of professionals who can make an immediate and lasting
          impact.
        </p>
      </div>
      <div>
        <h2 className="text-[#003262] font-bold text-2xl mt-4">
          Why Partner with us:
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-1 shadow-lg shadow-gray-400 rounded-3xl my-4 p-4">
          {partner.map((items) => (
            <div
              key={items.id}
              className="rounded-xl border-2 border-[#003262] mx-auto h-auto w-full max-w-md mt-4 p-6"
            >
              <h2 className="text-[#003262] font-bold">{items.heading}</h2>
              <p className="text-sm mt-2">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-5">
          How we Engage with Recruiters
        </h2>
        <div className="text-left">
          {engageWithRecruiter.map((items) => (
            <div key={items.id}>
              <ul className="list-disc mx-5">
                <li className="mt-2">
                  <span className="font-bold text-[#003262]">{items.heading} : </span>{" "}
                  {items.description}{" "}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-10 text-left ">
        <p>
          At The Atal Bihari Vajapayee University, we are creating a future
          where innovation, skills, and technology converge to form a workforce
          capable of tackling the challenges of tomorrow. Through our strategic
          industry partnerships and commitment to a skills-led education, we are
          confident that our graduates will be the ideal fit for your
          organization.
        </p>
        <p className="mt-4">
          We invite you to partner with us in shaping the future of India’s
          workforce. Together, let’s connect your organization with the next
          generation of skilled, tech-savvy professionals who are ready to lead
          and innovate.
        </p>
      </div>
    </div>
  );
};

export default OurRecruiter;
