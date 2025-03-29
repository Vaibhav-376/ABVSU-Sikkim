import Image from "next/image";
import React from "react";

const SeminarCommittee = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-5xl text-[#003262] mb-4">
          Seminar Committee
        </h2>
        <div className="w-24 h-1 bg-[#003262] mx-auto mb-6"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-2/3 space-y-6">
          <p className="text-lg leading-relaxed">
            The Seminar Committee at Atal Bihari Vajapayee Skill University
            (ABVSU) is a dedicated team focused on organizing academic seminars,
            workshops, and symposiums that enhance the learning experience and
            professional growth of students and faculty alike. By hosting a wide
            range of events, the committee aims to bring valuable insights from
            industry leaders, researchers, and experts to the university campus,
            fostering an environment of knowledge-sharing and innovation.
          </p>

          <p className="text-lg leading-relaxed">
            One of the primary objectives of the Seminar Committee is to provide
            a platform for intellectual engagement and skill development. The
            committee curates a lineup of guest speakers, experts, and
            researchers from diverse fields, ensuring that students gain
            exposure to current industry trends, research advancements, and
            emerging technologies. Through these sessions, students have the
            opportunity to interact directly with professionals, gaining
            insights that go beyond the classroom.
          </p>
        </div>

        <div className="lg:w-1/3 flex items-center justify-center">
          <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Seminar Committee"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-[#003262] mb-4">
            Event Coordination
          </h3>
          <p className="text-gray-700">
            The Seminar Committee is responsible for the planning and execution
            of all seminar-related activities. This includes coordinating
            schedules, organizing logistics, promoting events, and ensuring that
            each session runs smoothly. The team works closely with various
            departments to align the seminars with the academic calendar and
            curriculum, ensuring that the topics are relevant and beneficial to
            students' studies and career aspirations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-[#003262] mb-4">
            Networking Opportunities
          </h3>
          <p className="text-gray-700">
            The Seminar Committee also prioritizes collaboration and networking
            opportunities. Seminars and workshops serve as a meeting ground for
            students, faculty, and external professionals, fostering
            relationships that can lead to internships, mentorships, and career
            opportunities.
          </p>
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-8 rounded-xl">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            In addition to technical and academic sessions, the committee
            occasionally organizes seminars focused on personal growth, soft
            skills development, and entrepreneurship, broadening students'
            perspectives and preparing them for holistic success.
          </p>

          <p className="text-lg leading-relaxed">
            In its commitment to creating meaningful learning experiences, the
            Seminar Committee continuously evaluates the impact of its events.
            Feedback from attendees is collected to improve future seminars and
            address any evolving interests or needs within the university
            community. This responsive approach ensures that the committee
            remains aligned with the goals of the university and the aspirations
            of its students.
          </p>

          <p className="text-lg leading-relaxed font-medium text-[#003262]">
            Overall, the Seminar Committee at ABVSU is dedicated to creating an
            engaging, informative, and interactive platform for academic and
            professional growth. By hosting seminars that bridge the gap between
            academic learning and industry practices, the committee contributes
            to a dynamic university environment that empowers students to excel
            in their chosen fields.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeminarCommittee;
