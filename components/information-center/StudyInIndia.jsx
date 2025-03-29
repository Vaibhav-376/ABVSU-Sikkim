import React from "react";
import { FaBook, FaBriefcase, FaGift, FaHandPointRight, FaHome, FaMapMarkerAlt } from "react-icons/fa";

const StudyInIndia = () => {
  const benefits = [
    { title: "Globally Recognized Universities", description: "offering quality education." },
    { title: "Affordable Tuition & Living Costs", description: "compared to Western countries." },
    { title: "Up to 100% Scholarships", description: "for Meritorious & Deserving Students." },
    { title: "100% Placement Assistance", description: "in Top Multinational Companies." },
    { title: "State-of-the-Art Infrastructure & Research Facilities", description: "" },
    { title: "Cultural Diversity & Safe Student Environment", description: "ensuring a comfortable stay." },
  ];

  const offers = [
    { icon: <FaGift className="text-yellow-500 text-xl" />, text: "Full & Partial Scholarships Available! (Limited Seats)" },
    { icon: <FaHome className="text-green-500 text-xl" />, text: "Accommodation Support" },
    { icon: <FaBriefcase className="text-blue-500 text-xl" />, text: "Internships & Jobs in Companies to build industry exposure." },
    { icon: <FaBook className="text-red-500 text-xl" />, text: "Offline Learning Programs." },
  ];

  const steps = [
    { step: "Step 1", text: "Fill out the Application Form –", link: "#", linkText: "Click Here" },
    { step: "Step 2", text: "Submit Required Documents for Verification." },
    { step: "Step 3", text: "Scholarship Assessment & Offer Letter Issuance." },
    { step: "Step 4", text: "Get Admission & Start Your Educational Journey in Sikkim, India!" },
  ];
  return (<>
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl text-start">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Left Side - Text Content */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <h3 className="text-3xl font-bold ">
                Study in India – Your Global Future Starts Here!
              </h3>
            </div>
            <div className="flex flex-col gap-3 text-justify">

              <h4 className="text-lg font-semibold text-gray-800">
                Unlock Your Potential with World-Class Education & 100% Placement Assurance!
              </h4>
              <p className="text-gray-700 mt-3">
                Welcome to India’s Top Universities & Institutions, where innovation meets excellence! Experience a vibrant learning atmosphere, fully funded scholarships, and assured job placements in top global companies.
              </p>
              <p className="text-gray-700 mt-3">
                India has become a preferred destination for international students due to its rich academic heritage, affordable education, and globally recognized institutions. With a diverse range of courses, cutting-edge research opportunities, and a thriving job market, students can build a strong foundation for their careers.
              </p>
              <p className="text-gray-700 mt-3">
                Moreover, studying in India is not just about academics—it’s about immersing yourself in a culturally diverse environment, exploring new perspectives, and gaining practical experience through internships, live projects, and industry collaborations.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/study-in-india.jpg"
              alt="Study in India"
              className="w-full"
            />
          </div>

        </div>
      </div>
    </section>

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-start">
          Why Choose India for Higher Education?
        </h3>

        {/* Benefits List */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <FaHandPointRight className="theme-clr text-2xl mr-4" />
              <p className="text-gray-700">
                <strong>{benefit.title} </strong>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <p className="mt-6 text-gray-700 text-justify">
          Indian universities are known for producing some of the best minds in various fields, including technology,
          management, healthcare, and entrepreneurship. Graduates from Indian institutions have successfully secured
          jobs in leading global organizations and have gone on to become industry leaders and innovators.
        </p>
      </div>
    </section>

    <section className="py-12 bg-gray-50 ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-800 flex items-center">
          Exclusive Offers for International Students
        </h3>

        {/* Offers List */}
        <ul className="mt-6 space-y-4">
          {offers.map((offer, index) => (
            <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              {offer.icon}
              <p className="ml-4 text-gray-700 font-medium">{offer.text}</p>
            </li>
          ))}
        </ul>

        {/* Additional Info */}
        <p className="mt-6 text-gray-700 text-justify">
          With an increasing number of international students choosing India, we offer specialized support services
          such as orientation programs, cultural exchange initiatives, and dedicated student helplines to ensure a smooth transition.
        </p>
      </div>
    </section>

    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Title */}
        <h3 className="text-3xl font-bold text-gray-800 flex items-center">
          How to Apply?
        </h3>

        {/* Steps List */}
        <div className="mt-6 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <FaHandPointRight className="theme-clr text-xl mr-3" />
              <p className="text-gray-700 font-medium">
                <strong>{step.step}:</strong> {step.text}{" "}
                {step.link && <a href={step.link} className="text-blue-500 underline">{step.linkText}</a>}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="mt-6 text-gray-700 text-justify">
          Applying to an Indian university is a simple and transparent process. Our dedicated team assists students at
          every step, from choosing the right course to securing scholarships and completing visa formalities.
        </p>
      </div>
    </section>
  </>
  );
};

export default StudyInIndia;
