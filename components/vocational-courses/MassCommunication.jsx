import React from "react";
import img from "@/public/images/journalism.jpg";
import Image from "next/image";

const MassCommunication = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify">
              <h2 className="text-2xl md:text-3xl font-bold">
                Mass Communication And Journalism
              </h2>
              <p>
                {`Atal Bihari Vajpayee Skill University (ABVSU) has emerged as a leading institution for mass communication and journalism education, offering a well-rounded program that equips students with the skills and knowledge required to thrive in the fast-paced media industry. In an era where information drives public discourse and media plays a pivotal role in shaping society, the need for skilled communicators and journalists is greater than ever. ABVSU’s programs are designed to develop creative storytellers, analytical thinkers, and ethical media professionals, preparing them for diverse careers in journalism, digital media, public relations, and broadcasting.`}
              </p>
              <p>
                The mass communication and journalism curriculum at ABVSU is thoughtfully designed to cover a broad spectrum of subjects, including investigative journalism, media ethics, digital content creation, advertising, public relations, and multimedia storytelling. This interdisciplinary approach ensures that students gain a strong foundation in both theoretical concepts and practical media applications. To keep pace with evolving industry trends and technological advancements, the curriculum is continuously updated, ensuring graduates are well-prepared to navigate the challenges of the modern media landscape.
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
        <div className="flex flex-col gap-4 text-justify">

          <p>
            {`A defining aspect of ABVSU’s mass communication and journalism program is its focus on hands-on learning. Students actively participate in real-world projects, such as producing news reports, conducting interviews, and creating multimedia content for digital platforms. The university is equipped with advanced media labs, studios, and professional-grade equipment, allowing students to gain practical experience in video and audio production, editing, and live broadcasting. This immersive learning experience enhances students’ technical expertise, fosters creativity, and instills confidence in delivering impactful media content.`
            }
          </p>
          <p>The faculty at ABVSU comprises experienced professionals and scholars from diverse backgrounds in journalism, media, and communication. Their expertise and real-world experience enrich the learning environment, providing students with insights into various aspects of the media industry. Faculty members serve not only as educators but also as mentors, guiding students in their academic and professional pursuits. This mentorship is essential for helping students navigate the complexities of the media landscape and develop their unique voices as communicators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MassCommunication;
