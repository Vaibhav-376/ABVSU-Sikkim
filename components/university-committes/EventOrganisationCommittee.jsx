import React from "react";

const EventOrganisationCommittee = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6">
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Event Organisation <span className="text-[#003262]">Committee</span>
        </h1>
        <p className="mt-4 text-gray-600">
          The Event Organisation Committee at Atal Bihari Vajapayee Skill University
          (ABVSU) plays a pivotal role in coordinating and executing a variety of
          events and activities that foster learning, engagement, and unity
          within the university community. Comprising faculty members, student
          representatives, and administrative staff, this committee works
          collaboratively to ensure that each event is successful, impactful,
          and aligned with the university's goals and values.
        </p>
        <p className="mt-4 text-gray-600 ">
          One of the key goals of the committee is to provide a platform for
          students to enhance their skills and network with peers, industry
          leaders, and academicians. In organizing academic and extracurricular
          activities, the committee encourages student participation and
          hands-on involvement, which cultivates leadership, communication, and
          organizational skills. The team provides students with the opportunity
          to apply their classroom knowledge in real-world scenarios, thus
          bridging the gap between theory and practice.
        </p>
        <p className="mt-4 text-gray-600 ">
          In addition to providing opportunities for personal and professional
          development, the Event Organisation Committee promotes the spirit of
          teamwork and unity among students and staff. Events such as cultural
          fests and sports meets are organized to celebrate diversity and foster
          community spirit. These events bring together students from various
          backgrounds, promoting harmony and cultural exchange, and instilling
          pride in the university community.
        </p>
        <p className="mt-4 text-gray-600 ">
          The committee also focuses on innovative and sustainable practices
          while organizing events. Whether it's reducing waste, managing
          resources effectively, or encouraging eco-friendly practices,
          sustainability is a core consideration in the planning process. This
          emphasis on sustainability is aimed at educating and inspiring
          students and faculty to adopt responsible practices both in and
          outside the university.
        </p>

        <p className="mt-4 text-gray-600 ">
          Overall, the Event Organisation Committee at ABVSU is committed to
          creating memorable, enriching, and impactful events that contribute to
          the holistic development of the university's community. Their
          dedication ensures that each event not only aligns with the mission
          and vision of the university but also enhances the overall student
          experience, making ABVSU a vibrant, inclusive, and forward-thinking
          institution.
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 p-4 flex justify-center">
        <img
          src="https://placehold.co/600x400"
          alt="Event Organisation Committee"
          className="rounded-lg shadow-lg w-full md:w-3/4"
        />
      </div>
    </div>
  );
};

export default EventOrganisationCommittee;
