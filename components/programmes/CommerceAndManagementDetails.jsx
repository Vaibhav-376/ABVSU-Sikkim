import Image from 'next/image';
import React from 'react'
import CoursesTable from './CoursesTable';
import img from "@/public/images/programmes/commerce.webp"

export const CommerceAndManagementDetails = () => {
  const courses = [
    {
      "course": "MBA",
      "specialization": "Banking & Finance / Finance/ Human Resource/ Information Technology / Marketing Management",
      "duration": "4 Semester",
      "eligibility": "Graduation in any discipline"
    },
    {
      "course": "MBA",
      "specialization": "Supply Chain Management/ Hospital and Health Care Management/ Hotel Management / Retail Management/ Digital Marketing Management ",
      "duration": "4 Semester",
      "eligibility": "Graduation in any discipline"
    },
    {
      "course": "BBA",
      "specialization": "General",
      "duration": "6 Semester",
      "eligibility": "10+2 or equivalent"
    },
    {
      "course": "BCOM",
      "specialization": "General",
      "duration": "3 years",
      "eligibility": "10+2 or equivalent"
    },
    {
      "course": "M Com",
      "specialization": "General",
      "duration": "2 year",
      "eligibility": "B.Com or equivalent"
    },
    {
      "course": "Post Graduate Diploma",
      "specialization": "Supply Chain Management / Hospital and Health Care Management/ Hotel Management / Retail Management / Digital Marketing Management",
      "duration": "2 Semester",
      "eligibility": "Graduation or equivalent"
    },
    {
      "course": "Diploma",
      "specialization": "Supply Chain Management / Hospital and Health Care Management/ Hotel Management / Retail Management / Digital Marketing Management",
      "duration": "2 Semester",
      "eligibility": "10+2"
    },
    {
      "course": "Adv Diploma",
      "specialization": "Supply Chain Management / Hospital and Health Care Management/ Hotel Management / Retail Management / Digital Marketing Management",
      "duration": "4 Semester",
      "eligibility": "10+2"
    }
  ]

  return (
    <section className='py-10'>
      <div className="flex flex-col gap-3 py-10 container mx-auto px-6">

        <h2 className='text-3xl font-bold'>
          School of Commerce and Management – AVBSU
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="content w-full md:w-2/3 text-justify my-auto">
            <p>
              The School of Commerce and Management at AVBSU is dedicated to fostering excellence in business education, research, and professional development. With a strong focus on innovation, leadership, and industry-driven learning, the school aims to produce highly skilled professionals and researchers in the fields of Business, Commerce, and Management.
            </p>
            <p className='pt-5'>
             {` We offer a range of Undergraduate (UG), Postgraduate (PG), and Doctoral programmes, designed to equip students with the theoretical knowledge and practical expertise required to thrive in today’s dynamic business environment. Our curriculum integrates modern business trends, case studies, and hands-on learning to ensure holistic development.`}
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

