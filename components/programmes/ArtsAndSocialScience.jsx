import Image from 'next/image'
import React from 'react'
import CoursesTable from './CoursesTable'
import img from "@/public/images/programmes/arts.webp"

const ArtsAndSocialScience = () => {
  const courses = [
    {
      "course": "BA",
      "specialization": "General",
      "duration": "3 Years",
      "eligibility": "10+2"
    },
    {
      "course": "Bachelor of Arts (Honours)",
      "specialization": "English/ Hindi/ History/ Political Science / Sociology. ",
      "duration": "3 Years",
      "eligibility": ""
    },
    {
      "course": "MA	 ",
      "specialization": "English/ Hindi/ History/ Political Science / Sociology. ",
      "duration": "2 Years",
      "eligibility": "BA in relevant field"
    },
    {
      "course": "PG Diploma ",
      "specialization": "Social Work. ",
      "duration": "1 Year",
      "eligibility": "Graduation"
    },
    {
      "course": "Diploma ",
      "specialization": "Social Work. ",
      "duration": "1 Year",
      "eligibility": "10+2 or equivalent"
    },
    {
      "course": "BSW ",
      "specialization": "Social Work. ",
      "duration": "3 Years",
      "eligibility": "10+2"
    },
    {
      "course": "MSW",
      "specialization": "Social Work. ",
      "duration": "2 Years",
      "eligibility": "BSW"
    },
  ]

  return (
    <section className='py-10'>
      <div className="flex flex-col gap-3 py-10 container mx-auto px-6">

        <h2 className='text-3xl font-bold'>
        School of Arts, Humanities and Social Science – AVBSU
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>
            The School of Arts, Humanities, and Social Sciences at AVBSU is committed to fostering a dynamic and inclusive academic environment that promotes critical thinking, creativity, and interdisciplinary learning. The school offers a diverse range of Undergraduate (UG) and Postgraduate (PG) programmes designed to equip students with a deep understanding of culture, society, and human behavior.
            </p>
            <p className='pt-5'>
             {`With an interdisciplinary approach, our curriculum integrates innovative teaching methods, research-driven learning, and cross-disciplinary collaboration, ensuring a holistic educational experience. The school encourages intellectual exploration and creative expression, preparing students to become well-rounded individuals who can contribute meaningfully to academia, industry, and society.`}
            </p>
          </div>
          <div className="w-full md:w-1/3 my-auto">
            <Image
              src={img?.src}
              width={400}
              height={250}
              alt={" cs and it "}
              className="w-full max-h-[300px] object-cover"
            />
          </div>

        </div>
      </div>

      <CoursesTable courses={courses} />

    </section>
  )
}

export default ArtsAndSocialScience