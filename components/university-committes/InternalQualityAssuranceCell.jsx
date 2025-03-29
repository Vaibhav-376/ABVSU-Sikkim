import { TITLE_FULL } from "@/lib/constants";
import React from "react";

const InternalQualityAssuranceCell = () => {
  const objectives = [
    {
      id: 1,
      heading: "Quality Enhancement",
      desc: "Continuously improve the quality of teaching, learning, and research through strategic planning and execution of best practices in academia and administration.",
    },
    {
      id: 2,
      heading: "Academic and Administrative Monitoring",
      desc: " Ensure regular monitoring of academic and administrative processes to guarantee efficient and effective functioning of the university.",
    },
    {
      id: 3,
      heading: "Feedback Mechanism",
      desc: "Establish an effective feedback system involving students, faculty, alumni, and industry partners to continuously assess and improve the quality of education and campus services.",
    },
    {
      id: 4,
      heading: "Professional Development",
      desc: "Foster the professional development of faculty members through workshops, training programs, and seminars that enhance teaching capabilities, research expertise, and technology adoption.",
    },
    {
      id: 5,
      heading: "Innovation and Research",
      desc: "Encourage innovation in teaching, learning, and research, while ensuring that new initiatives are in line with emerging industry trends and technological advancements.",
    },
    {
      id: 6,
      heading: "Accreditation and Benchmarking",
      desc: "Work towards achieving national and international accreditations, ensuring that the university meets or exceeds quality standards in education and administrative functions.",
    },
  ];

  const rolesAndResponsibilities = [
    {
      id: 1,
      heading: "Promote Quality in Teaching and Learning",
      desc: "The IQAC ensures that the teaching-learning process is aligned with the university’s goals of skills-driven education and technology-enabled learning. It works with faculty members to integrate innovative teaching methodologies, industry-oriented curriculum, and modern educational tools.",
    },
    {
      id: 2,
      heading: "Enhance Research and Development",
      desc: "The IQAC promotes a research-driven culture and encourages faculty and students to engage in research that is both innovative and relevant to the demands of industries and society. It supports the establishment of research centers, funding for projects, and dissemination of research findings through conferences, publications, and collaborations with industry partners.",
    },
    {
      id: 3,
      heading: "Facilitate Accreditation and Compliance",
      desc: "The IQAC ensures that the university adheres to the norms and guidelines set by accrediting agencies like NAAC, UGC, and AICTE. It works to maintain compliance and prepares for accreditation visits by continuously updating systems and processes based on the latest quality standards.",
    },
    {
      id: 4,
      heading: "Organize Quality Audits and Reviews",
      desc: "The IQAC conducts regular internal quality audits and reviews of various departments and processes. This helps in identifying strengths, weaknesses, opportunities, and threats (SWOT analysis) within academic, administrative, and research domains, leading to actionable insights for improvement.",
    },
    {
      id: 5,
      heading: "Data-Driven Decision Making",
      desc: " A key function of the IQAC is to gather, analyze, and use data to drive decisions related to curriculum design, teaching effectiveness, resource allocation, and student satisfaction. By utilizing technology-enabled systems, the IQAC ensures that data-driven insights are available to guide university policies and strategies.",
    },
    {
      id: 6,
      heading: "Student Support and Development",
      desc: "The IQAC actively participates in the development of student support systems, such as academic counseling, career guidance, mentorship programs, and placements. It ensures that student-centric initiatives are in place to enhance overall student well-being and success.",
    },
    {
      id: 7,
      heading: "Implement Best Practices",
      desc: "The IQAC promotes the implementation of best practices in academic administration, student engagement, teaching methods, research activities, and overall institutional functioning. By continuously benchmarking against leading institutions, the IQAC ensures that the university remains competitive and relevant in the education sector.",
    },
  ];

  const keyIntiativesAndActivities = [
    {
      id: 1,
      heading: "Regular Academic Audits",
      desc: " The IQAC conducts periodic academic audits to ensure that the curriculum is up-to-date, relevant to industry demands, and focuses on skill development. It also evaluates the effectiveness of the teaching-learning process and suggests improvements.",
    },
    {
      id: 2,
      heading: "Workshops and Training Programs",
      desc: "The IQAC organizes workshops, faculty development programs, and seminars on quality enhancement, technological innovations, teaching methodologies, and research opportunities to equip faculty members with the latest tools and knowledge in their respective fields.",
    },
    {
      id: 3,
      heading: "Student Feedback Mechanism",
      desc: "An online and offline feedback mechanism is in place where students can provide their input on various aspects of their academic experience. This feedback is analyzed to make necessary adjustments to the curriculum, teaching strategies, and campus facilities.",
    },
    {
      id: 4,
      heading: "Collaboration with Industry",
      desc: "The IQAC encourages collaborations with industry leaders and experts to enhance the practical aspects of education. Industry-academia partnerships lead to guest lectures, internships, real-time projects, and other opportunities for students to apply their skills in real-world settings.",
    },
    {
      id: 5,
      heading: "Quality Assurance Reports",
      desc: "The IQAC prepares regular reports on the quality assurance activities undertaken by the university. These reports are shared with the university’s leadership and governing bodies, offering insights into progress and areas that require attention.",
    },
    {
      id: 6,
      heading: "Research and Innovation Support",
      desc: "The IQAC provides a platform for faculty and students to showcase their research and innovation through conferences, workshops, and exhibitions. It also works to secure research funding and provide institutional support for research initiatives.",
    },
  ];
  const outComeAndImpact = [
    { id: 1, desc: "Enhanced learning outcomes and student satisfaction." },
    { id: 2, desc: "Increased research output and academic excellence." },
    {
      id: 3,
      desc: "Strong industry linkages leading to better employability for students.",
    },
    {
      id: 4,
      desc: "Improved infrastructure and resources based on real-time feedback and audits.",
    },
    {
      id: 5,
      desc: "Successful accreditation and recognition by national and international bodies.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#003262] mb-4">
          Internal Quality Assurance Cell (IQAC)
        </h1>
        <div className="w-24 h-1 bg-[#003262] mx-auto mb-6"></div>
      </div>

      <section className="mb-12 bg-white rounded-lg shadow-md p-6 md:p-8">
        <p className="text-lg leading-relaxed mb-4">
          At The Atal Bihari Vajpayee Skill University, Sikkim, we are committed to
        
          maintaining the highest standards of academic excellence and
          continuously improving the quality of education, research, and student
          development.
        </p>
        <p className="text-lg leading-relaxed">
          The Internal Quality Assurance Cell (IQAC) plays a crucial role in
          ensuring that the university's activities and programs meet the
          expectations of the industry, government, and academia, while
          fostering a culture of quality enhancement and innovation.
        </p>
      </section>

      <section className="mb-12 grid md:grid-cols-2 gap-8">
        <div className="bg-[#f8f9fa] rounded-lg p-6 shadow-sm border-l-4 border-[#003262]">
          <h2 className="font-bold text-xl md:text-2xl text-[#003262] mb-4">
            Vision
          </h2>
          <p className="text-gray-700">
            To create an institutional culture of continuous improvement by
            fostering quality education, research, and innovation.
          </p>
        </div>
        <div className="bg-[#f8f9fa] rounded-lg p-6 shadow-sm border-l-4 border-[#003262]">
          <h2 className="font-bold text-xl md:text-2xl text-[#003262] mb-4">
            Mission
          </h2>
          <p className="text-gray-700">
            To ensure all academic and administrative processes meet global
            standards and align with our vision of developing a skills-focused,
            technology-enabled learning environment.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-bold text-2xl md:text-3xl text-[#003262] mb-6 text-center">
          Key Objectives
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-[#003262] mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-bold text-2xl md:text-3xl text-[#003262] mb-6 text-center">
          Roles and Responsibilities of IQAC
        </h2>
        <div className="space-y-4">
          {rolesAndResponsibilities.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-lg shadow-sm hover:bg-[#f8f9fa] transition-colors"
            >
              <h3 className="font-semibold text-lg text-[#003262]">
                {item.heading}
              </h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-bold text-2xl md:text-3xl text-[#003262] mb-6 text-center">
          Key Initiatives and Activities
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {keyIntiativesAndActivities.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-lg shadow-md border-t-4 border-[#003262]"
            >
              <h3 className="font-semibold text-lg text-[#003262] mb-2">
                {item.heading}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-[#003262] text-white rounded-lg p-6 md:p-8">
        <h2 className="font-bold text-2xl md:text-3xl mb-6 text-center">
          Outcome and Impact
        </h2>
        <div className="space-y-4">
          {outComeAndImpact.map((item) => (
            <div key={item.id} className="flex items-start">
              <span className="text-yellow-300 mr-2 mt-1">•</span>
              <p className="text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <p className="mt-4">
          The Internal Quality Assurance Cell (IQAC) at The {TITLE_FULL} plays a pivotal role in ensuring that we maintain
          our commitment to quality education, research, and student
          development. By focusing on continuous improvement, data-driven
          decision-making, and fostering a culture of excellence, the IQAC
          ensures that the university remains at the forefront of delivering
          futuristic, skills-oriented education in alignment with industry
          needs.
        </p>
        <p className="mt-6 mb-10">
          Together with the active participation of faculty, staff, students,
          and industry partners, the IQAC helps in shaping a strong academic
          foundation and enhancing the overall learning experience at the
          university.
        </p>
      </section>
    </div>
  );
};

export default InternalQualityAssuranceCell;
