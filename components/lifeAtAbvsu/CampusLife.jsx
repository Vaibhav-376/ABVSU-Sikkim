import Image from 'next/image'
import React from 'react'
import img from '@/public/images/abvsu/campus.jpg'
import img2 from '@/public/images/abvsu/campus2.avif'

const CampusLife = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <h3 className='text-3xl font-bold pb-4'>Campus Life</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <p>
              Campus life at Atal Bihari Vajpayee Skill University (ABVSU) is a dynamic and enriching experience, playing a vital role in the holistic development of students. Nestled in a thriving educational environment, ABVSU offers a perfect blend of academic excellence and vibrant campus culture, ensuring that students grow academically, socially, and personally.
            </p>

            <p>
              A defining feature of life at ABVSU is the strong sense of community and collaboration among students. With a diverse student body from various backgrounds, the university fosters an inclusive and multicultural atmosphere. This diversity is celebrated through festivals, cultural events, and interactive activities, allowing students to exchange ideas, embrace different traditions, and build meaningful connections. The welcoming campus environment at ABVSU ensures that students form lifelong friendships and professional networks, extending beyond their academic journey.
            </p>
          </div>
          <div className="w-full md:w-1/2 items-center flex justify-center">
            <Image
              src={img}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full min-h-[300px] rounded-lg object-fit"
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
              className="w-full min-h-[300px] rounded-lg object-fit"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <p>
              Campus life at Atal Bihari Vajpayee Skill University (ABVSU) is a dynamic and enriching experience, playing a vital role in the holistic development of students. Nestled in a thriving educational environment, ABVSU offers a perfect blend of academic excellence and vibrant campus culture, ensuring that students grow academically, socially, and personally.
            </p>

            <p>
              A defining feature of life at ABVSU is the strong sense of community and collaboration among students. With a diverse student body from various backgrounds, the university fosters an inclusive and multicultural atmosphere. This diversity is celebrated through festivals, cultural events, and interactive activities, allowing students to exchange ideas, embrace different traditions, and build meaningful connections. The welcoming campus environment at ABVSU ensures that students form lifelong friendships and professional networks, extending beyond their academic journey.
            </p>
          </div>
        </div>
        <p className=''>{`Sports also play an integral role in campus life at ABVSU. The university promotes a healthy lifestyle through various sporting activities and competitions. Students can join different sports teams, participate in tournaments, and enjoy recreational activities in the university’s state-of-the-art facilities. The emphasis on sports not only contributes to physical well-being but also instills values of discipline, teamwork, and perseverance among students.`}</p>
      </div>
    </section>
  )
}

export default CampusLife