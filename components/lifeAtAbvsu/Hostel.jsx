import React from 'react'
import img from '@/public/images/abvsu/hostel.avif'
import Image from 'next/image'

const Hostel = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <h3 className='text-3xl font-bold'>Hostel</h3>
        <p className='text-justify'>
          {`The hostel facilities at ABVSU offer a comfortable and supportive living environment, promoting a sense of community and enhancing students' overall academic experience. Understanding the importance of a conducive living space for personal growth and academic success, ABVSU has developed modern, well-equipped hostels tailored to meet the diverse needs of its students.`}
        </p>
        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='text-3xl font-bold'>Modern Accommodation Facilities </h3>
            <p>
              {`ABVSU provides a range of hostel accommodations, ensuring a safe, comfortable, and homely environment for students. The hostels are well-equipped with furnished rooms, study areas, common lounges, and recreational spaces. Students can choose from single, double, or triple occupancy, balancing privacy and affordability.`}
            </p>
            <p>
              {`To support students’ daily needs, the hostels offer 24/7 security, Wi-Fi, and laundry services. Additionally, clean and hygienic dining facilities serve nutritious meals, catering to diverse dietary preferences, promoting students’ overall health and well-being.`}
            </p>
          </div>
          <div className="w-full md:w-1/2 items-center flex justify-center">
            <Image
              src={img}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full h-[350px]  object-fit"
            />
          </div>
        </div>

        <h3 className='text-3xl font-bold pt-5'>A Supportive Community at ABVSU Hostels  </h3>
        <p className=''>{`Living in the ABVSU hostels fosters a strong sense of community, allowing students to build lasting friendships and support networks. With a diverse mix of students from various regions and backgrounds, hostel life promotes cultural exchange and mutual understanding.`}</p>

        <h3 className='text-3xl font-bold pt-5'>Study and Recreational Spaces at ABVSU Hostels  </h3>
        <p className=''>{`The hostels at ABVSU are designed to support both academic success and relaxation. Dedicated study rooms provide a quiet environment for focused learning, while common areas encourage group study sessions, discussions, and project collaboration.`}</p>
        <p className=''>{`To ensure a balanced lifestyle, the hostels also feature recreational spaces, including game rooms, TV lounges, and outdoor areas where students can unwind, socialize, and engage in leisure activities. This blend of academic and recreational facilities creates a holistic living experience for students.`}</p>

        <h3 className='text-3xl font-bold pt-5'>24/7 Support and Supervision at ABVSU Hostels </h3>
        <p className=''>{`ABVSU hostels ensure a safe and secure living environment with round-the-clock supervision. A dedicated team of wardens and support staff is available 24/7 to assist students with any concerns or issues. This constant support system not only enhances security but also fosters a sense of community and open communication among residents.`}</p>
      </div>
    </section>
  )
}

export default Hostel