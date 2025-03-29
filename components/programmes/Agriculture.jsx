import Image from 'next/image'
import React from 'react'
import img from "@/public/images/programmes/agriculture.webp"

const Agriculture = () => {
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

        <h2 className='text-3xl font-bold text-[#003262]'>
          School of Agriculture – AVBSU
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>
              At AVBSU, the School of Agriculture is committed to shaping the future of farming, agribusiness, and rural development, empowering students to contribute meaningfully to food security, environmental conservation, and agricultural innovation.
            </p>
            <p className='pt-5'>
              {`Through its diverse academic programmes, the school fosters scientific advancements, practical training, and technology-driven solutions in the field of agriculture. Additionally, it seeks to establish national and international collaborations in agricultural education, research, and knowledge management, ensuring that students are exposed to global best practices for sustainable agricultural development.`}
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
      <div className="flex container mx-auto justify-center text-red-500 "> Courses List will be available soon....</div>
      {/* <CoursesTable courses={courses} /> */}
    </section>
  )
}

export default Agriculture