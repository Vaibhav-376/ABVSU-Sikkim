import React from 'react'
import img from '@/public/images/abvsu/library.avif'
import img2 from '@/public/images/abvsu/library2.avif'
import Image from 'next/image'

const Library = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <h3 className='text-3xl font-bold'>Library</h3>
        <p className='text-justify'>
          {`The library at Atal Bihari Vajpayee Skill University (ABVSU) is a vital resource for students, faculty, and researchers, fostering a culture of knowledge and academic excellence. Designed to support the university’s skill-focused education, the library serves as an information hub, providing access to a vast collection of books, journals, digital resources, and research materials. It plays a crucial role in enhancing the learning experience and equipping students with the knowledge needed for academic and professional success.`}
        </p>
        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='text-3xl font-bold'>Extensive Collection of Resources            </h3>
            <p>
              {`The library at Atal Bihari Vajpayee Skill University (ABVSU) offers an extensive collection of books, journals, research papers, and digital resources across a wide range of disciplines. With thousands of volumes in fields like engineering, computer science, business, humanities, and social sciences, students have access to essential literature and reference materials for their studies and research.`}
            </p>
            <p>
              {`Beyond physical books, the library provides a comprehensive digital collection, including e-books, online journals, and databases. This allows students to access information anytime, anywhere, ensuring a flexible and technology-driven learning experience. ABVSU's commitment to integrating digital resources keeps students updated with the latest research and industry trends`}
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
              className="w-full h-[350px] object-fit"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='text-3xl font-bold'>Modern Facilities and Study Spaces</h3>

            <p>
              The library at Atal Bihari Vajpayee Skill University (ABVSU) is designed to enhance student comfort and productivity. It offers a variety of study spaces, including individual study carrels, group study rooms, and comfortable seating areas. Equipped with modern furniture and technology, these spaces create an ideal environment for focused study, collaborative projects, and group discussion
            </p>

            <p>
              For those seeking a quiet and reflective environment, the library features dedicated areas for independent research and reading. With ample natural light and a peaceful atmosphere, it fosters an engaging and conducive space for academic excellence, encouraging students to fully immerse themselves in their studies.
            </p>
          </div>
        </div>

        <h3 className='text-3xl font-bold'>Advanced Technological Integration</h3>
        <p className=''>{`Understanding the pivotal role of technology in modern education, the library at ABVSU is equipped with state-of-the-art facilities, including computers with internet access, printing services, and multimedia resources. These tools enable students to conduct research, complete assignments, and utilize online learning platforms efficiently.`}</p>

        <h3 className='text-3xl font-bold pt-5'>Supportive Library Staff</h3>
        <p className=''>{`The library staff at ABVSU consists of trained librarians and information specialists who are dedicated to supporting students in their academic journeys. They are available to assist with research inquiries, provide guidance on using library resources, and offer workshops on information literacy. This personalized support ensures that students can effectively navigate the wealth of information available to them and make the most of the library’s offerings.`}</p>

        <h3 className='text-3xl font-bold pt-5'>Research and Learning Support </h3>
        <p className=''>{`The library actively promotes research and learning by organizing workshops and seminars on various topics, such as effective research strategies, citation management, and academic writing. These workshops are designed to enhance students’ research skills and equip them with the tools necessary for success in their academic endeavors. The library also provides access to research guides and subject-specific resources, helping students locate relevant materials for their coursework and projects. `}</p>

        <h3 className='text-3xl font-bold'>  </h3>
        <p className=''>{`   `}</p>

      </div>
    </section>
  )
}

export default Library