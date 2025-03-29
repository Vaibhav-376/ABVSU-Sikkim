"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HtmlContent from "../common/HtmlContent";
import useRandomImages from "@/lib/hooks/useRandomImages";
import { ourExpertiesImages } from "@/lib/constants";

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
    <div className="flex flex-col gap-6 py-10">
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
          <h3 className="text-3xl font-bold container mx-auto px-6 ">
            {section.title}
          </h3>
          <div className="flex flex-col md:flex-row gap-4 items-center container mx-auto px-6 ">
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
                  className="w-full max-h-[400px] rounded-sm object-cover"
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
      <div>
        <div className="md:mx-10">
          <h2 className="font-bold text-2xl">
            Our{" "}
            <span className="text-[#003262] font-bold text-2xl">Schools</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
