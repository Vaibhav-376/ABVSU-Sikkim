import React from "react";
import img from "@/public/images/inspiration.jpg";
import Image from "next/image";

const OurInspiration = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-28">
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003262]">
                Our Inspiration
              </h2>
              <p>
                At Atal Bihari Vajpayee Skill University (ABVSU) Sikkim, our
                mission is driven by India's rich cultural heritage, holistic
                values, and a shared vision of empowering individuals through
                education. We believe that education is not just a fundamental
                right but also a catalyst for societal transformation. Our
                commitment extends beyond delivering quality education—we strive
                to cultivate socially responsible, globally conscious
                individuals who are equipped with the skills and knowledge to
                shape a better future
              </p>
              <p>
                The spirit of India, marked by its diversity, resilience, and
                commitment to unity, deeply influences our mission at Atal
                Bihari Vajpayee Skill University (ABVSU) Sikkim. Sikkim, known
                for its rich cultural heritage, scenic beauty, and harmonious
                coexistence of communities, serves as a beacon of inspiration
                for our institution. The values of inclusivity, sustainability,
                and respect for tradition are integral to our educational
                philosophy. By embracing these principles, ABVSU cultivates a
                learning environment that celebrates diversity, fosters
                innovation, and promotes sustainable practices—empowering
                students with ethical values and the drive to create a lasting
                impact on society.
              </p>
            </div>
            <div className="w-full md:w-1/3 relative">
              <div className="absolute inset-0 bg-white/20 blur-lg "></div>
              <Image
                src={img}
                width={400}
                height={250}
                alt="Our Work"
                className="w-full max-w-[400px] h-auto object-cover  
                  sepia-[50%] grayscale-[20%] brightness-90 contrast-75 opacity-90 
                  border border-white/30 shadow-lg rounded-xl"
              />
            </div>
          </div>
          <div className="col-lg-6 text-center"></div>
        </div>
      </div>
    </section>
  );
};

export default OurInspiration;
