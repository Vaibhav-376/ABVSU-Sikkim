import Image from 'next/image'
import React from 'react'
import img from "@/public/images/programmes/hotel.webp"

const HotelManagement = () => {
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
          School of Hotel Management – AVBSU
        </h2>
        <div className="flex flex-col md:flex-row gap-20">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>
              The School of Hotel Management and Tourism at AVBSU is dedicated to providing comprehensive and industry-focused education in the field of hospitality and tourism management. The school aims to equip students with in-depth knowledge of the various aspects and nuances of hotel management, both in India and abroad.
            </p>
            <p className='pt-5'>
              {`At AVBSU, the School of Hotel Management and Tourism strives to develop skilled professionals and future leaders who can drive innovation and excellence in the hospitality and tourism sector..`}
            </p>
          </div>
          <div className="w-full md:w-1/3 my-auto">
            <Image
              src={img?.src}
              width={400}
              height={250}
              alt={" cs and it "}
              className="w-full  object-cover rounded-xl"
            />
          </div>

        </div>
      </div>
      <div className="flex container mx-auto justify-center text-red-500 "> Courses List will be available soon....</div>
      {/* <CoursesTable courses={courses} /> */}
    </section>
  )
}

export default HotelManagement