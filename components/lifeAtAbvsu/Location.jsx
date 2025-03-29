import React from 'react'
import img from '@/public/images/abvsu/location.avif'
import img2 from '@/public/images/abvsu/location2.avif'
import Image from 'next/image'

const Location = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <h3 className='text-3xl font-bold pt-3'>Discover ABVSU: A Campus Like No Other</h3>
        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='text-3xl font-bold pt-3'>Why Choose Atal Bihari Vajpayee Skill University?</h3>
            <p>
              {`Welcome to Atal Bihari Vajpayee Skill University (ABVSU), where education goes beyond traditional classrooms to create a dynamic, skill-oriented, and future-focused learning environment. Our university is committed to empowering students with industry-relevant skills, fostering innovation, and equipping them with the knowledge and values needed to succeed in their careers and contribute meaningfully to society.`}
            </p>
            <p>
              {`At ABVSU, students don’t just learn—they experience hands-on education in a setting that blends academic excellence with practical industry exposure, ensuring they are fully prepared for the evolving job market.`}
            </p>
          </div>
          <div className="w-full md:w-1/2 items-center flex justify-center">
            <Image
              src={img}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full h-[350px] object-fit"
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
              className="w-full h-[350px] rounded-lg object-fit"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='text-3xl font-bold'>A Unique Campus Experience in the Heart of Nature</h3>

            <p>
              Nestled in the serene landscapes of Sikkim, Atal Bihari Vajpayee Skill University (ABVSU) offers a one-of-a-kind learning environment surrounded by lush greenery, rolling hills, and a peaceful atmosphere.
            </p>

            <p>
              Students at ABVSU experience an enriching academic setting that fosters creativity, skill development, and focus, allowing them to grow both professionally and personally in a tranquil yet dynamic campus environment.
            </p>
          </div>
        </div>


        <h3 className='text-3xl font-bold pt-3'>A Global Hub of Learning & Excellence </h3>
        <p className='text-justify'>{`At Atal Bihari Vajpayee Skill University (ABVSU), we provide world-class skill-based education with a practical and industry-oriented approach. Our state-of-the-art infrastructure, strong industry partnerships, and student-centric learning model prepare students for real-world challenges, ensuring they graduate with job-ready skills and global competence. `}</p>
      </div>
    </section>
  )
}

export default Location