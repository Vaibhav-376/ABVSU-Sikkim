import Image from 'next/image'
import React from 'react'
import CoursesTable from './CoursesTable'
import img from "@/public/images/programmes/science.webp"

const Science = () => {
  const courses = [
    {
      "course": "BSC",
      "specialization": "Physics / Chemistry / Mathematics",
      "duration": "3 Years",
      "eligibility": "10+2 with respective subjects"
    },
    {
      "course": "M.Sc.",
      "specialization": "Physics / Chemistry / Mathematics",
      "duration": "2 Years",
      "eligibility": "Graduation with respective subjects"
    },
  ]

  return (
    <section className='py-10'>
      <div className="flex flex-col gap-3 py-10 container mx-auto px-6">

        <h2 className='text-3xl font-bold'>
          School of Science – AVBSU
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>
            The School of Sciences at AVBSU is dedicated to fostering a strong foundation in scientific inquiry, research, and innovation. Established with the goal of achieving academic excellence, the school focuses on equipping students with cutting-edge knowledge and practical skills to meet the demands of an ever-evolving scientific landscape.
            </p>
            <p className='pt-5'>
              {`Our globally competitive curriculum is designed to blend theoretical knowledge with hands-on experimentation, ensuring that students are well-prepared for careers in research, industry, and academia. With a commitment to scientific exploration and discovery, the school encourages interdisciplinary learning, critical thinking, and problem-solving.`}
            </p>
          </div>
          <div className="w-full md:w-1/3 my-auto">
            <Image
              src={img?.src}
              width={400}
              height={250}
              alt={" cs and it "}
              className="w-full max-h-[300px] object-fit"
            />
          </div>

        </div>
      </div>

      <CoursesTable courses={courses} />

    </section>
  )
}

export default Science