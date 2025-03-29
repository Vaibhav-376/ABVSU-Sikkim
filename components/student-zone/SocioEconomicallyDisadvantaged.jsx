import React from "react";
import missionAndVission from "@/public/images/missionAndVision.jpg";
import Image from "next/image";

const SocioEconomicallyDisadvantaged = () => {
  const objective = [
    {
      id: 1,
      heading: "Provide Financial Support",
      desc: "Assist students with scholarships, grants, and fee concessions to make education accessible to those from economically disadvantaged backgrounds.",
    },
    {
      id: 2,
      heading: "Offer Academic Assistance",
      desc: "Support students in their academic journey through mentorship programs, tutoring, and remedial classes.",
    },
    {
      id: 3,
      heading: "Promote Skill Development",
      desc: " Organize skill development workshops, certification courses, and industry-specific training sessions.",
    },
    {
      id: 4,
      heading: "Foster Social Integration",
      desc: "Encourage participation in university activities, events, and leadership programs.",
    },
    {
      id: 5,
      heading: "Provide Career Guidance and Placement Support",
      desc: "Help students secure internships, industry placements, and job opportunities.",
    },
  ];

  const initiatives = [
    {
      id: 1,
      heading: "Scholarships and Financial Aid",
      desc: "Full or partial fee waivers, government scholarships, and university-sponsored awards.",
    },
    {
      id: 2,
      heading: "Mentorship Programs",
      desc: "Senior students, faculty members, and alumni offer academic and career guidance.",
    },
    {
      id: 3,
      heading: "Academic and Remedial Support",
      desc: "Special tutorials and remedial classes.",
    },
    {
      id: 4,
      heading: "Skill Development and Industry Exposure",
      desc: "Workshops, internships, and guest lectures.",
    },
    {
      id: 5,
      heading: "Personality Development and Leadership Training",
      desc: "Confidence-building and communication improvement.",
    },
    {
      id: 6,
      heading: "Placement Assistance",
      desc: "Resume-building workshops, mock interviews, and placement drives.",
    },
    {
      id: 7,
      heading: "Social Integration and Cultural Activities",
      desc: " University events to build a sense of community.",
    },
    {
      id: 8,
      heading: "Psychosocial Support",
      desc: " Counseling services for stress and career anxiety.",
    },
  ];

  const collaboration = [
    {
      id: 1,
      heading: "Government Bodies",
      desc: "Leveraging grants and scholarships.",
    },
    {
      id: 2,
      heading: "Industry Partners",
      desc: "Facilitating skill development and job placements.",
    },
    {
      id: 3,
      heading: "NGOs and Social Organizations",
      desc: "Ensuring no student is left behind.",
    },
  ];

  return (
    <div className="md:text-left md:mx-10 mx-5">
      <div>
        <h2 className="font-bold text-2xl text-[#003262] mb-3">
          Socio-Economically Disadvantaged Group (SEDG) Cell
        </h2>
        <p className="text-justify">
          At The Atal Bihari Vajapayee Skill University, we are committed to
          creating an inclusive and equitable learning environment that empowers
          students from all walks of life. The Socio-Economically Disadvantaged
          Group (SEDG) Cell is a key initiative in this direction, aimed at
          providing support, resources, and opportunities for students from
          socio-economically disadvantaged backgrounds. As a futuristic model
          for young India, the university focuses on nurturing talent by
          bridging gaps and fostering equal access to quality education.
        </p>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-2xl text-[#003262] mt-8">
            Mission and Vision
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-full md:w-1/2">
              <p className="text-justify mt-8">
                The SEDG Cell is dedicated to promoting the welfare of students
                from marginalized socio-economic groups by offering tailored
                support in areas of academic performance, personal development,
                career opportunities, and social integration. With strong
                cooperation from government bodies, industry partners, and
                academic departments, we aim to ensure that all students,
                regardless of their socio-economic status, have the tools and
                opportunities to succeed in the modern, technology-driven world.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <Image
                src={missionAndVission}
                alt="Mission and Vision"
                width={325}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">Key Objectives</h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-2">
          {objective.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border-2 border-[#003262] mx-auto h-auto w-full max-w-md mt-10 p-4"
            >
              <h2 className="text-[#003262] font-bold">{item.heading}</h2>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-10 mb-4">
          Support Initiatives
        </h2>
        <div className="space-y-4 mt-4">
          {initiatives.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border-2 border-gray-400 p-4 w-full h-auto"
            >
              <ul className="list-disc pl-5">
                <li className="text-left">{item.desc}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">Admission Support</h2>
        <p className="">
          The SEDG Cell provides guidance to prospective students regarding the
          admission process, eligibility for financial aid, and scholarships.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262] mb-4">
          Collaboration with Industry and Goverment
        </h2>
        <div>
          {collaboration.map((item) => (
            <div key={item.id} className="">
              <ul className="list-disc mx-4 text-left">
                <li>
                  <span className="font-bold text-[#003262]">{item.desc}</span>{" "}
                  {" : "} {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262] mb-4 ">Conclusion</h2>
        <p className="text-left">
          At The Atal Bihari Vajapayee Skill University, we firmly believe that
          every student, regardless of their socio-economic background, deserves
          an equal opportunity to succeed. The Socio-Economically Disadvantaged
          Group (SEDG) Cell is committed to leveling the playing field by
          providing necessary resources, guidance, and support.
        </p>

        <p className="mt-7 text-left">We are proud of the diversity and talent that our SEDG students bring to our university, and we are dedicated to helping them achieve their fullest potential.</p>
      </div>
    </div>
  );
};

export default SocioEconomicallyDisadvantaged;
