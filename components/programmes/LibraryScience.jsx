import Image from 'next/image'
import React from 'react'
import CoursesTable from './CoursesTable'
import img from "@/public/images/programmes/library.webp"

const LibraryScience = () => {
  const courses = [
    {
      "course": "B. Library & Information Science",
      "specialization": "Library & Information Science",
      "duration": "1 Year",
      "eligibility": "Graduation"
    },
    {
      "course": "M. Library & Information Science",
      "specialization": "Library & Information Science",
      "duration": "1 Year",
      "eligibility": "B.Lib & inf.sc"
    },
  ]

  return (
    <section className='py-10'>
      <div className="flex flex-col gap-3 py-10 container mx-auto px-6">

        <h2 className='text-3xl font-bold'>
          School of Library Science – AVBSU
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>
            At AVBSU, the School of Library and Information Sciences is committed to advancing research, innovation, and professional development in the field, empowering students to become information specialists and knowledge managers in a rapidly evolving digital era.
            </p>
            <p className='pt-5'>
              {`The School of Library and Information Sciences has been set up in response to the demand for a large number of trained human resources in the field of library and information activities. The course contents of the Programmes offered by this School is meant to meet the challenge of the changing needs.`}
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

export default LibraryScience