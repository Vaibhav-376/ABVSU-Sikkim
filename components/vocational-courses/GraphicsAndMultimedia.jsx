import React from "react";
import img from "@/public/images/graphics-multimedia.jpg";
import Image from "next/image";

const GraphicAndMultimedia = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify">
              <h2 className="text-2xl md:text-3xl font-bold">
                Graphic and Multimedia
              </h2>
              <p>
                {`Atal Bihari Vajpayee Skill University (ABVSU) has emerged as a
                leading institution in the field of graphic and multimedia
                education, providing students with the skills to excel in the
                ever-evolving world of visual communication and digital design.
                In an era where digital media drives storytelling, branding, and
                user engagement, the need for skilled professionals is greater
                than ever. ABVSU’s programs are designed to nurture creativity,
                enhance technical expertise, and develop critical thinking,
                ensuring that students are well-prepared to succeed in this
                dynamic industry.`}
              </p>
              <p>
                The curriculum for graphic and multimedia courses at Atal Bihari
                Vajpayee Skill University (ABVSU) covers a diverse range of
                topics, including graphic design principles, multimedia
                production, animation, video editing, web design, and digital
                marketing. This well-rounded approach ensures that students not
                only grasp fundamental design concepts but also gain hands-on
                experience with industry-standard tools and technologies. To
                keep pace with evolving trends and innovations, the curriculum
                is regularly updated, equipping students with the skills and
                knowledge required to excel in their professional careers.
              </p>

              <p>
                {`One of the key strengths of Atal Bihari Vajpayee Skill University’s (ABVSU) graphic and multimedia programs is the strong emphasis on practical learning. Students actively participate in real-world projects, applying their theoretical knowledge to hands-on experiences. Through workshops, collaborative assignments, and industry internships, they build a robust portfolio that enhances their employability in the competitive job market. ABVSU collaborates with leading design studios and multimedia companies, ensuring students gain valuable industry exposure and firsthand insights into professional expectations.`}
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
          <div className="col-lg-6 text-center"></div>
        </div>
      </div>
    </section>
  );
};

export default GraphicAndMultimedia;
