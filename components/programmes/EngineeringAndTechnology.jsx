import React from 'react'
import img from "@/public/images/programmes/engineering.webp"
import Image from 'next/image'
import CoursesTable from './CoursesTable';

const EngineeringAndTechnology = () => {

  const courses = [
    {
      course: "Diploma Engineering",
      specialization: "Computer science / Information Technology",
      duration: "6 Semester",
      eligibility: "Passed 10th"
    },
    {
      course: "Diploma Engineering(Lateral Entry) ",
      specialization: "Computer science / Information Technology ",
      duration: "4 Semester ",
      eligibility: "10+2 PCM/ITI (2 years) / 2 years Vocational Course in Relevant Trade"
    },
    {
      course: "B. Tech",
      specialization: "Computer Science / Artificial Inteligence ",
      duration: "8 Semester ",
      eligibility: "Passed 10+2 examination with PCM. Obtained atleast 45% marks (40% for SC/ST/OBC/MINORITY)."
    },
    {
      course: "B. Tech (Lateral Entry) ",
      specialization: "Computer Science / Artificial Inteligence ",
      duration: "6 Semester ",
      eligibility: "Passed 3yr Diploma OR B.Sc.(PCM) Degree from a recognized University atleast 45% marks (40% for SC/ST/OBC/MINORITY)."
    },
    {
      course: "M Tech ",
      specialization: "Computer Science(Artificial Inteligence ) ",
      duration: "4 Semester ",
      eligibility: "B. Tech. /B.E in Relevant Subject /Candidate who has passed MSC- IT/CS, MCA is Eligibile for M.Tech Computer Science."
    },
  ];

  return (
    <section className='py-10'>
      <div className="flex flex-col gap-3 py-10 container mx-auto px-6">

        <h2 className='text-3xl font-bold text-[#003262]'>
          School of Engineering and Technology
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>The School of Engineering and Technology at AVBSU is committed to providing a comprehensive and industry-aligned education in engineering disciplines. The school offers B.Tech and M.Tech programmes, designed to balance theoretical knowledge with hands-on training, ensuring that students gain practical expertise and problem-solving skills essential for the modern technological landscape.
            </p>
            <p className='pt-5'>
            The School of Engineering and Technology offers B.Tech and M.Tech programmes that give equal importance to theory and hands on training. The syllabus has been designed taking into consideration the latest marketing trends, industry needs, and research outcomes relevant to different domains of the respective specializations.
            </p>
          </div>
          <div className="w-full md:w-1/3 my-auto">
            <Image
              src={img?.src}
              width={400}
              height={250}
              alt={" cs and it "}
              className="w-full max-h-[300px] object-fit rounded-xl"
            />
          </div>

        </div>
      </div>

      <CoursesTable courses={courses} />

    </section>
  )
}

export default EngineeringAndTechnology