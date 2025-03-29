import Image from 'next/image'
import React from 'react'
import CoursesTable from './CoursesTable'
import img from "@/public/images/programmes/vocational.webp"

const VocationalStudies = () => {
  const courses = [
    {
      "course": "D.Voc",
      "specialization": "D.Voc",
      "duration": "1 Year",
      "eligibility": "12th/ITI/Diploma"
    },
    {
      "course": "B.Voc",
      "specialization": "B.Voc",
      "duration": "3 Years",
      "eligibility": "12th/ITI/Diploma"
    },
    {
      "course": "M.Voc",
      "specialization": "M.Voc",
      "duration": "2 Years",
      "eligibility": "B.Voc"
    },

  ]

  return (
    <section className='py-10'>
      <div className="flex flex-col gap-3 py-10 container mx-auto px-6">

        <h2 className='text-3xl font-bold'>
          School of Vocational Studies – AVBSU
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>
              The School of Vocational Studies at AVBSU is committed to providing industry-oriented education that bridges the gap between the conventional education system and real-world professional demands. With a focus on skill development, hands-on training, and career readiness, the school equips students with the practical expertise needed to excel in various industries.
            </p>
            <p className='pt-5'>
              {`Our programmes are designed to align with modern industry trends, ensuring that graduates are well-prepared for the workforce. Through experiential learning, internships, and collaborations with industry leaders, the school fosters a learning environment that promotes innovation, employability, and entrepreneurship.`}
            </p>
          </div>
          <div className="w-full md:w-1/3 my-auto">
            <Image
              src={img?.src}
              width={400}
              height={250}
              alt={" cs and it "}
              className="w-full  object-cover"
            />
          </div>

        </div>
      </div>

      <CoursesTable courses={courses} />
    </section>
  )
}

export default VocationalStudies