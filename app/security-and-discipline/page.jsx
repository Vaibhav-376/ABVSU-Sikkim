import PageLinks from "@/components/common/pageLink";
import React from "react";

const page = () => {
  const securityHeadings = [
    { id: 1, heading: "Comprehensive Security Measures" },
    { id: 2, heading: "Promoting Discipline and Respect" },
    { id: 3, heading: "Encouraging Responsible Behavior" },
    { id: 4, heading: "Support Services" },
  ];

  const comprehensiveMeasures = [
    {
      id: 1,
      heading: "24/7 Surveillance",
      desc: "The campus is monitored through a network of CCTV cameras strategically placed throughout the premises, ensuring constant surveillance and quick response to any incidents.",
    },
    {
      id: 2,
      heading: "Security Personnel",
      desc: "A dedicated team of trained security personnel is present on campus around the clock. They are responsible for maintaining order, assisting students, and responding promptly to any security concerns.",
    },
    {
      id: 3,
      heading: "Access Control",
      desc: "Access to certain areas of the campus, including hostels and laboratories, is restricted to authorized individuals. Students are required to carry their identification cards at all times to ensure that only registered individuals can enter these areas.",
    },
    {
      id: 4,
      heading: "Emergency Protocols",
      desc: "ABVSU has established clear emergency procedures for various scenarios, including medical emergencies, fire alarms, and natural disasters. Regular drills and training sessions are conducted to prepare students and staff for potential emergencies.",
    },
  ];
  const promitingDisciplineAndRespect = [
    {
      id: 1,
      heading: "Code of Conduct",
      desc: "ABVSU has a comprehensive code of conduct that outlines the expected behavior of all students and staff. This code promotes values such as respect, honesty, and responsibility.",
    },
    {
      id: 2,
      heading: "Regular Workshops",
      desc: " The university conducts workshops and seminars on topics related to discipline, ethics, and respect for diversity. These sessions help cultivate a culture of understanding and cooperation among students from various backgrounds.   ",
    },
    {
      id: 3,
      heading: "Conflict Resolution",
      desc: " ABVSU encourages open communication and provides avenues for conflict resolution. Students are urged to address disputes amicably, and mediation services are available to assist in resolving conflicts when necessary.",
    },
  ];

  const encouragingBehaviour = [
    {
      id: 1,
      heading: "Awareness Campaigns",
      desc: "The university organizes awareness campaigns on topics such as anti-bullying, substance abuse prevention, and mental health. These campaigns aim to educate students and foster a supportive community.",
    },
    {
      id: 2,
      heading: "Peer Mentorship Programs",
      desc: "Older students are encouraged to mentor younger peers, fostering a sense of responsibility and leadership within the student body. This initiative helps create a positive and supportive campus culture.",
    },
    {
      id: 3,
      heading: "Feedback Mechanisms",
      desc: "ABVSU values the input of its students regarding security and discipline. Regular feedback is collected through surveys and suggestion boxes to address concerns and improve campus safety measures.",
    },
  ];

  const supportService = [
    {
      id: 1,
      heading: "Counseling Services",
      desc: "Professional counselors are available to provide support for academic stress, personal issues, and mental health concerns. Students are encouraged to seek help whenever needed.",
    },
    {
      id: 2,
      heading: "Reporting Mechanisms",
      desc: "The university has established confidential reporting mechanisms for students to report incidents of harassment, discrimination, or any breaches of discipline. Prompt action is taken to address these issues in a fair and just manner.",
    },
    {
      id: 3,
      heading: "Student Grievance Redressal",
      desc: "A formal grievance redressal system is in place, allowing students to voice their concerns and seek resolution for any issues they may encounter during their time at the university.",
    },
  ];
  return (
    <>
      <PageLinks
        title="Security and Discipline"
        imageUrl="/images/pagelinks/terms.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Security and Discipline", link: "/security-and-discipline" },
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003262] mb-6">
            Security and Discipline
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Atal Bihari Vajapayee Skill University (ABVSU), security and
            discipline are paramount to creating a safe and conducive learning
            environment. We are committed to ensuring the well-being of our
            community while fostering an atmosphere of respect, integrity, and
            responsibility.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#003262] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#003262]">
                  Comprehensive Security Measures
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                ABVSU employs a multi-faceted approach to security that includes:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {comprehensiveMeasures.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-[#003262]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003262]">{item.heading}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#003262] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  2
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#003262]">
                  Promoting Discipline and Respect
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Discipline is fundamental at ABVSU. We emphasize adherence to
                rules to maintain a respectful and harmonious environment:
              </p>
              <div className="space-y-6">
                {promitingDisciplineAndRespect.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-[#003262]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003262]">{item.heading}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#003262] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  3
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#003262]">
                  Encouraging Responsible Behavior
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                ABVSU promotes responsible behavior among students through various
                initiatives:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {encouragingBehaviour.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-[#003262]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003262]">{item.heading}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#003262] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  4
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#003262]">
                  Support Services
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                ABVSU provides comprehensive support services to ensure student
                well-being:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {supportService.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-[#003262]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003262]">{item.heading}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default page;
