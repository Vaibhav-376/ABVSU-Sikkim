import React from 'react'
import img from "@/public/images/programmes/cs-and-it.webp"
import Image from 'next/image'
import CoursesTable from './CoursesTable';

const ComputerScienceDetails = () => {

  const courses = [
    { course: "DCA", specialization: "Diploma Computer Application", duration: "2 Semesters", eligibility: "10+2" },
    { course: "BCA", specialization: "Bachelor of Computer Application", duration: "6 Semesters", eligibility: "10+2 with Maths or equivalent" },
    { course: "BCA Lateral Entry", specialization: "Bachelor of Computer Application", duration: "4 Semesters", eligibility: "10+2 & DCA / 1 year Diploma in Computer" },
    { course: "PGDCA", specialization: "Post Graduate Diploma in Computer Application", duration: "2 Semesters", eligibility: "Graduation in Relevant Stream" },
    { course: "MCA", specialization: "Master of Computer Application", duration: "4 Semesters", eligibility: "Graduation in Relevant Stream" },
    { course: "BSc", specialization: "Computer Science / Information Technology", duration: "6 Semesters", eligibility: "10+2 with Maths or equivalent" },
    { course: "MSc", specialization: "Computer Science / Information Technology", duration: "4 Semesters", eligibility: "B. Tech / B.Sc. (I.T/CS)/PGDCA" },
  ];

  return (
    <section className='py-10'>
      <div className="flex flex-col gap-3 py-10 container mx-auto px-6">

        <h2 className='text-3xl font-bold text-[#003262]'>
          School of Computer Science And Information Technology
        </h2>
        <div className="flex flex-col md:flex-row gap-20">
          <div className="content w-full md:w-2/3 text-justify">
            <p>The School of Computer Science and Information Technology at Atal Bihari Vajpayee Skill University (ABVSU) is dedicated to providing industry-focused education in the fields of information technology, software engineering, computer applications, and specialized domain-specific technologies. The school aims to equip students with cutting-edge technical skills, problem-solving abilities, and hands-on experience to meet the growing demands of the digital world.
            </p>
            <p className='pt-5'>
              With a curriculum that integrates theoretical knowledge with practical applications, the school ensures that students are prepared for careers in software development, cybersecurity, data science, artificial intelligence, cloud computing, and other emerging areas of technology. ABVSU emphasizes skill-based learning, industry collaboration, and real-world project exposure, enabling graduates to become proficient IT professionals and innovators in the tech industry.
            </p>
          </div>
          <div className="w-full md:w-1/3 my-auto">
            <Image
              src={img?.src}
              width={400}
              height={250}
              alt={" cs and it "}
              className="w-full max-h-[400px] rounded-xl object-cover"
            />
          </div>

        </div>
      </div>

      <CoursesTable courses={courses} />

    </section>
  )
}

export default ComputerScienceDetails