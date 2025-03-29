import React from "react";
import img from "@/public/images/inspiration.jpg";
import img2 from "@/public/images/accreditation.jpg";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify my-auto">
              <h2 className="text-2xl md:text-3xl font-bold">
                Why Choose Atal Bihari Vajpayee Skill University (ABVSU)
              </h2>
              <p>
                Welcome to Atal Bihari Vajpayee Skill University (ABVSU), where
                education meets innovation and skill development. We are
                committed to empowering students with industry-relevant
                expertise, fostering a culture of excellence, and preparing
                future-ready professionals. At ABVSU, we bridge the gap between
                education and employability, equipping learners with the skills
                and knowledge needed to thrive in a dynamic world.
              </p>
            </div>
            <div className="w-full md:w-1/3 relative">
              <div className="absolute inset-0 bg-white/20 blur-lg "></div>
              <Image
                src={img2}
                width={400}
                height={250}
                alt="Our Work"
                className="w-full max-w-[400px] h-auto object-cover  
      sepia-[50%] grayscale-[20%] brightness-90 contrast-75 opacity-90 
      border border-white/30 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 relative">
              <div className="absolute inset-0 bg-white/20 blur-lg "></div>
              <Image
                src={img}
                width={400}
                height={250}
                alt="Our Work"
                className="w-full max-w-[400px] h-auto object-cover  
      sepia-[50%] grayscale-[20%] brightness-90 contrast-75 opacity-90 
      border border-white/30 shadow-lg"
              />
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify my-auto">
              <h2 className="text-2xl md:text-3xl font-bold">
                Empowering Future Leaders through Education and Values
              </h2>
              <p>
                At Atal Bihari Vajpayee Skill University (ABVSU), we believe
                that education extends beyond acquiring knowledge—it is about
                shaping individuals into skilled, responsible, and
                forward-thinking professionals. By integrating cutting-edge
                technology with India’s rich cultural and ethical values, we
                cultivate both technical expertise and personal integrity. Our
                mission is to empower students with the skills and mindset
                needed to drive innovation, contribute to society, and make a
                meaningful impact on the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
