import Image from 'next/image'
import React from 'react'
import img from '@/public/images/abvsu/computerlab.avif'
import img2 from '@/public/images/abvsu/computerlab2.avif'

const ComputerLab = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <h3 className='text-3xl font-bold'>Computer Lab</h3>
        <p className='text-justify'>The Computer Lab at Atal Bihari Vajpayee Skill University (ABVSU) is a key facility that supports high-quality education in technology and engineering. Equipped with modern hardware and the latest software, the lab serves as a vital resource for students across disciplines, especially in computer science, information technology, and engineering. Designed for hands-on learning, it enables students to gain practical experience that complements their theoretical knowledge, preparing them for real-world challenges in the ever-evolving tech industry.</p>
        <div className="flex flex-col md:flex-row gap-4 pt-5">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='py-3 font-bold text-3xl'>State-of-the-Art Facilities</h3>
            <p>
              Campus life at Atal Bihari Vajpayee Skill University (ABVSU) is a dynamic and enriching experience, playing a vital role in the holistic development of students. Nestled in a thriving educational environment, ABVSU offers a perfect blend of academic excellence and vibrant campus culture, ensuring that students grow academically, socially, and personally.
            </p>

            <p>
              A defining feature of life at ABVSU is the strong sense of community and collaboration among students. With a diverse student body from various backgrounds, the university fosters an inclusive and multicultural atmosphere. This diversity is celebrated through festivals, cultural events, and interactive activities, allowing students to exchange ideas, embrace different traditions, and build meaningful connections. The welcoming campus environment at ABVSU ensures that students form lifelong friendships and professional networks, extending beyond their academic journey.
            </p>
          </div>
          <div className="w-full md:w-1/2 items-center flex justify-center">
            <Image
              src={img}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full h-[350px]  object-fit"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 items-center flex justify-center">
            <Image
              src={img2}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full h-[350px]  object-fit"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <p>
              The lab is stocked with a wide range of software applications that cater to different fields of study. From programming languages such as Python, Java, and C++ to design software like AutoCAD and MATLAB, students have the resources to engage in various projects and assignments. Specialized software for data analysis, web development, and cybersecurity further enriches the learning experience, allowing students to explore their interests and deepen their skills in specific areas.
            </p>
          </div>
        </div>
        <div className="pt-10">
          <h3 className='font-bold text-3xl'>
            Hands-On Learning Experience
          </h3>
          <p className='text-justify'>{`
        One of the primary objectives of the Computer Lab at ABVSU is to provide a hands-on learning environment where students can apply theoretical concepts in practical scenarios. Students are encouraged to work on individual and group projects, allowing them to collaborate, share ideas, and develop problem-solving skills. This experiential learning approach enhances their understanding of complex topics and prepares them for real-world challenges.
        `}
          </p>
        </div>
        <div className="pt-10">
          <h3 className='font-bold text-3xl'>
            Supportive Learning Environment
          </h3>
          <p className='text-justify'>{`
        The lab is staffed by experienced instructors and lab technicians who are available to provide guidance and support to students. They assist with troubleshooting technical issues, offer tutorials on software usage, and provide insights into best practices for programming and software development. This supportive environment fosters a culture of learning and collaboration, where students can seek help and learn from one another.
        `}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComputerLab