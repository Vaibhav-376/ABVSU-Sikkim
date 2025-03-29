"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HtmlContent from "../common/HtmlContent";
import useRandomImages from "@/lib/hooks/useRandomImages";
import { ourExpertiesImages } from "@/lib/constants";
import charimanMessage from "@/public/images/chairmar.webp";
import education from "@/public/images/icons/education-icon.png";
import Employability from "@/public/images/icons/employment-icon.png";
import excellence from "@/public/images/icons/excellence-icon.png";

// Sections for About Us
const aboutSections = [
  {
    title: "Atal Bihari Vajapayee Skill University",
    description: `
    <p style="margin-bottom: 1rem;">
      The Atal Bihari Vajapayee Skill University Sikkim (ABVSU) established under the Sikkim legislature assembly through its official gazette 11th July 2023 and is recognized by the UGC Act 1956 under Section 2(f). SGTU is also the member of Association of Indian Universities (AIU)..
    </p>
    <p style="margin-bottom: 1rem;">
      We may be new but our roots have been deep within the entirety of time. Our founder Respected Mr. Saurabh Singhal has been in the Education Sector. In this period we have trained more than 3 lakh students via various Government and Non-Government initiatives.
    </p>
    <p style="margin-bottom: 1rem;">
Therefore, we can proudly state that we are capable and experienced to pursue and actualize the dream of making SGTU a global tycoon in Higher education. That allows learners to achieve perfection.
    </p>
  `,
  },
  // {
  //   title: "Skill-Based Education",
  //   description: `
  //   <p style="margin-bottom: 1rem;">
  //     Driven by a commitment to excellence, Atal Bihari Vajpayee Skill University (ABVSU) Sikkim is dedicated to transforming careers,
  //     nurturing entrepreneurship, and stimulating economic growth in rural communities through skill-based education.
  //   </p>
  //   <p style="margin-bottom: 1rem;">
  //     Our approach integrates hands-on learning, industry exposure, and state-of-the-art facilities to ensure that every student
  //     is equipped with the tools they need to succeed in their chosen field. With a focus on practical training and real-world application,
  //     we bridge the gap between traditional education and industry requirements.
  //   </p>
  //   <p style="margin-bottom: 1rem;">
  //     At ABVSU Sikkim, we collaborate with leading industries, vocational training institutes, and government initiatives to provide
  //     high-quality skill development programs. From technical skills and entrepreneurship training to digital literacy and emerging technologies,
  //     we empower students to build sustainable careers in diverse sectors.
  //   </p>
  //   <p style="margin-bottom: 1rem;">
  //     Our mission is to create a self-reliant and skilled workforce that drives innovation, economic progress, and social upliftment in
  //     Sikkim and beyond. With a learner-centric approach and cutting-edge pedagogy, we are shaping the future of education and employment
  //     in the region.
  //   </p>
  // `,
  // },
];

const AboutUsComponent = () => {
  const { images, loading } = useRandomImages(ourExpertiesImages);

  return (
    <>
      <div className="flex flex-col gap-6 py-5 md:mx-24">
        {aboutSections.map((section, index) => (
          <motion.div
            key={index}
            className={`py-12 ${
              index % 2 === 0 ? "!bg-white !text-black" : "theme-bg !text-white"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-bold container text-[#003262] text-center mx-auto px-6 ">
              {section.title}
            </h3>
            <div className="flex flex-col md:flex-row gap-24 items-center container mx-auto px-6 ">
              <motion.div
                className="w-full md:w-2/3 text-justify"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <HtmlContent content={section.description} />
              </motion.div>

              <motion.div
                className="w-full md:w-1/3 flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {!loading && (
                  <Image
                    src={
                      index % 2 === 0 ? images?.firstImage : images?.secondImage
                    }
                    width={400}
                    height={250}
                    alt={section.title}
                    className="w-full max-h-[400px] rounded-lg m-10 object-cover"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-lg overflow-hidden shadow-xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-300">
              <Image
                src={charimanMessage}
                alt="Dr. Sourabh Singhal"
                layout="fill"
                // objectFit="cover"
                className="hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-6">
            <div className="space-y-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#003262]">
                Chairman's Message
              </h2>
            </div>

            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                Skilling is the essential ingredient that keeps the wheels of
                progress and development of a person running smoothly. The
                primary aim of skill development is to help the youth recognize
                their potential so as to maximize their contribution in nation
                building.
              </p>
              <p className="text-lg leading-relaxed">
                The youth of a nation are the future leaders. We have always
                focused on doing right things and doing things right which I
                feel is a balancing act, and requires the development of good
                strategic operations to deliver the services in the most
                effective and efficient way possible.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-800">
                Dr. Sourabh Singhal
              </h3>
              <p className="text-gray-500">Chairman</p>
            </div>
          </div>
        </div>
      </div>

      {/* education employability employment */}
      <div className="w-full bg-[#003262] py-16 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-12 items-stretch justify-center text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex-1 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <Image
                  src={education}
                  width={60}
                  height={60}
                  alt="Education icon"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Education</h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                Providing necessary theoretical knowledge along with practical
                applicability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex-1 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <Image
                  src={Employability}
                  width={60}
                  height={60}
                  alt="Employability icon"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Employability
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                Facilitating individual skill proficiency and capabilities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex-1 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-white/15">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <Image
                  src={excellence}
                  width={60}
                  height={60}
                  alt="Employment icon"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Employment</h2>
              <p className="text-sm md:text-base leading-relaxed opacity-90">
                Provision of a supporting hand to students in their pursuit for
                employment and career development
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* education employability employment */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 sm:p-8">
              <div className="flex justify-center mb-4">
                <div className="bg-[#003262] bg-opacity-10 p-3 rounded-full">
                  <svg
                    className="w-8 h-8 text-[#003262]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#003262] mb-4">
                Vision
              </h2>
              <p className=" text-base leading-relaxed">
                At ABVSU Sikkim, our mission is to empower individuals by
                providing them with accessible, high-quality education and skill
                development opportunities. We aim to foster personal growth,
                enhance employability, and contribute to the creation of a
                skilled workforce that drives progress and innovation,
                benefiting both individuals and industries.
              </p>
              <p className=" text-base leading-relaxed mt-3">
                We believe that education is a powerful tool for positive
                change, and we are committed to making it available to all,
                regardless of background or circumstances. Through our diverse
                range of programs, we cater to the unique needs of every
                learner, ensuring they receive tailored support and resources to
                succeed in their chosen fields.
              </p>
              <p className=" text-base leading-relaxed mt-3">
                Our programs are designed to equip individuals with the
                practical skills and knowledge needed to excel in a rapidly
                evolving global economy. We focus not only on technical
                expertise but also on building soft skills, such as
                communication, problem-solving, and leadership, which are
                essential for thriving in today's workforce.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 sm:p-8">
              <div className="flex justify-center mb-4">
                <div className="bg-[#003262] bg-opacity-10 p-3 rounded-full">
                  <svg
                    className="w-8 h-8 text-[#003262]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
              </div>
              <h2 className="text-center text-2xl lg:text-3xl font-bold text-[#003262] mb-4">
                Mission
              </h2>
              <p className=" text-base leading-relaxed mt-3">
                At ABVSU Sikkim, our vision is to be a leading catalyst in
                transforming lives by bridging the gap between education and
                employment. We strive to create a world where every individual
                has the opportunity to develop their skills, realize their
                potential, and build a successful, sustainable career,
                contributing to a brighter and more inclusive future for all.
              </p>
              <p className=" text-base leading-relaxed mt-3">
                We envision a future where education is universally accessible,
                where every learner, regardless of background, can pursue a path
                that leads to meaningful employment and career growth. By
                providing practical, hands-on training in both technical and
                soft skills, we aim to help individuals navigate the
                complexities of the modern workforce and become agents of
                positive change within their communities.
              </p>
              <p className=" text-base leading-relaxed mt-3">
                Our goal is to foster a global workforce that is diverse,
                adaptable, and resilient. We believe in the power of lifelong
                learning and are committed to offering continuous development
                opportunities, ensuring that our learners stay ahead of industry
                trends and maintain a competitive edge throughout their careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsComponent;
