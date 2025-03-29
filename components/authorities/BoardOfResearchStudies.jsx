import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

const BoardOfResearchStudies = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Side Content */}
          <div className='text-justify'>
            <h2 className="text-3xl font-bold  mb-4">Board of Research Studies</h2>
            <p className="text-gray-700 mb-4">
              The Board of Research Studies at Atal Bihari Vajpayee Skill University (ABVSU) serves as a key academic body
              responsible for maintaining and improving educational standards across various disciplines.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mt-4">Functions of the Board of Studies</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>To recommend and update courses of study, teaching methodologies, and examination structures.</li>
              <li>To prepare a panel of paper setters and examiners for semester-end examinations.</li>
              <li>To advise on academic matters referred by the faculty or Academic Council.</li>
              <li>To recommend books, study materials, and online resources relevant to the curriculum.</li>
              <li>To assess the effectiveness of existing academic programs and suggest modifications.</li>
              <li>To encourage interdisciplinary collaboration and integration of research into academic programs.</li>
            </ul>
          </div>

          {/* Right Side Animation/Icon */}
          <div className="flex justify-center animate-pulse">
          <div className="flex justify-center animate-pulse">
            <FaBookOpen className="text-7xl h-44 w-44 rounded-md  text-blue-500 animate-bounce " />

          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardOfResearchStudies;