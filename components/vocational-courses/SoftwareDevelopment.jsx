import React from "react";
import img from "@/public/images/software-development.jpg";
import Image from "next/image";

const SoftwareDevelopment = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify">
              <h2 className="text-2xl md:text-3xl font-bold">
                Software Development
              </h2>
              <p>
                The software development curriculum at Atal Bihari Vajpayee
                Skill University (ABVSU) covers a diverse range of subjects,
                including programming languages, software engineering
                principles, database management, web and mobile application
                development, and cloud computing. Designed to provide a
                well-rounded education, the curriculum equips students with a
                deep understanding of software development processes. Regular
                updates ensure alignment with industry trends and emerging
                technologies, enabling graduates to stay ahead in the
                ever-evolving tech landscape.
              </p>
              <p>
                {` A key highlight of Atal Bihari Vajpayee Skill University’s (ABVSU) software development program is its strong focus on hands-on learning. Students actively participate in practical projects and real-world applications, enabling them to apply theoretical concepts in meaningful ways. This experiential approach enhances technical proficiency while also cultivating critical thinking and problem-solving skills. ABVSU collaborates with leading tech companies and startups to offer internship opportunities, allowing students to work on real software development projects and gain valuable industry experience.`}
              </p>
              <p>
                The faculty at Atal Bihari Vajpayee Skill University (ABVSU)
                consists of seasoned professionals and academicians with
                extensive expertise in software development. They bring a blend
                of theoretical knowledge and practical industry experience,
                providing students with comprehensive guidance throughout their
                academic journey. Through personalized mentorship, faculty
                members help students grasp complex coding concepts, refine
                their problem-solving abilities, and develop proficiency in
                software project management, ensuring they are well-prepared for
                the evolving tech landscape.
              </p>
            </div>
            <div className="w-full md:w-1/3 relative my-auto">
              <div className="absolute inset-0 bg-white/20 blur-lg "></div>
              <Image
                src={img}
                width={400}
                height={250}
                alt="Our Work"
                className="w-full max-w-[400px] h-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
