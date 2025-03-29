import Image from "next/image";
import React from "react";
import { FaUniversity } from "react-icons/fa";

const BoardOfStudies = () => {
  return (<>
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">
        Board of Studies - Atal Bihari Vajpayee Skill University (ABVSU)
      </h1>

      <div className="flex flex-wrap items-center justify-between mt-6">
        {/* Left Section */}
        <div className="flex-1 text-justify">
          <h2 className="text-gray-800 text-xl  font-semibold">
            Enhancing Skill-Based Learning & Industry Readiness
          </h2>
          <p className="mt-2 text-gray-600 leading-relaxed">
            The Board of Studies (BoS) at ABVSU is dedicated to
            fostering skill-based education that meets evolving industry
            demands. Comprising academic experts, industry leaders, and
            faculty, the BoS ensures that the curriculum aligns with modern
            workforce requirements.
          </p>
          <p className="mt-2 text-gray-600">
            Each department at ABVSU has a specialized Board of Studies
            responsible for developing, evaluating, and updating skill-focused
            programs, keeping pace with technological advancements and
            industry trends.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="">
          <Image
            width={300}
            height={300}
            className=""
            src="/images/board-of-studies.jpg"
            alt="ABVSU Board of Studies"
          />
        </div>
      </div>
    </section>

    <section className="max-w-7xl container px-6 mx-auto ">
      <h1 className=" text-3xl font-bold mb-4">Role and Responsibilities of the Board of Studies</h1>

      <ol className="list-none space-y-3 text-gray-700">
        <li className="p-3 border-b">
          <b>Curriculum Development & Revision</b> - Ensuring contemporary, practical, and industry-aligned programs.
        </li>
        <li className="p-3 border-b">
          <b>Approval of New Courses & Programs</b> - Introducing innovative and interdisciplinary programs.
        </li>
        <li className="p-3 border-b">
          <b>Academic Research & Industry Collaboration</b> - Encouraging research-driven education.
        </li>
        <li className="p-3 border-b">
          <b>Evaluation & Assessment Methods</b> - Implementing modern assessment techniques.
        </li>
        <li className="p-3">
          <b>Faculty Development & Training</b> - Organizing workshops for improved teaching methodologies.
        </li>
      </ol>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        Schools Under the Board of Studies at ABVSU
      </h1>

      <ol className="list-none text-left space-y-3 text-gray-700">
        {[
          "School of Computer Science & IT",
          "School of Commerce & Management",
          "School of Arts, Humanities, and Social Sciences",
          "School of Science",
          "School of Vocational Studies",
          "School of Agriculture",
          "School of Library Science",
          "School of Hotel Management and Tourism",
          "School of Engineering and Technology",
        ].map((school, index) => (
          <li
            key={index}
            className="flex items-center gap-2 p-3 cursor-pointer"
          >
            <FaUniversity className="text-blue-500" />
            <b>{school}</b>
          </li>
        ))}
      </ol>
    </section>
  </>
  );
};

export default BoardOfStudies;
