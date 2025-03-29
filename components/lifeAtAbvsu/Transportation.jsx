import React from 'react';
import Image from 'next/image';
import transportationImg from '@/public/images/abvsu/transportation.avif';
import transportationImg2 from '@/public/images/abvsu/transportation2.avif';

const Transportation = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <h3 className="text-3xl font-bold">Transportation</h3>
        <p className="text-justify">
          {`Transportation plays a crucial role in the overall campus experience at ABVSU. The university is committed to providing efficient and reliable transportation services that ensure students and faculty can easily access the campus and surrounding areas. This focus on transportation not only facilitates smooth commutes but also enhances the overall educational experience, promoting safety, convenience, and accessibility.`}
        </p>

        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className="text-3xl font-bold">Campus Shuttle Services</h3>
            <p>
              {`ABVSU operates a dedicated campus shuttle service designed to transport students between the university and key locations within the region. These shuttles are scheduled to accommodate class timings, ensuring that students arrive on campus in a timely manner.`}
            </p>
            <p>
              {`The shuttle service is particularly beneficial for students living off-campus, offering a convenient and cost-effective means of transportation. The shuttles are well-maintained, equipped with comfortable seating, and adhere to safety regulations, making commuting a pleasant experience for all users.`}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={transportationImg}
              width={400}
              height={250}
              alt="Transportation Services"
              className="w-full h-[350px] rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={transportationImg2}
              width={400}
              height={250}
              alt="Transportation Services"
              className="w-full h-[350px] rounded-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className="text-3xl font-bold">Accessibility and Convenience</h3>
            <p>
              {`The transportation services at ABVSU are designed to meet the diverse needs of students and faculty. The university ensures that transportation options are easily accessible to all, including individuals with disabilities. Special transport routes and facilities are in place to assist students who require additional support, fostering an inclusive campus environment.`}
            </p>
            <p>
              {`Additionally, ABVSU is strategically located near major roads and public transport hubs, making commuting to the campus seamless. Students and staff can conveniently use public transport, ensuring smooth connectivity from various regions. This accessibility enhances the overall ease of travel, allowing students to focus on their academic and personal growth.`}
            </p>
          </div>
        </div>

        <h3 className='text-3xl font-bold pt-5'>Safety and Security Measures</h3>
        <p className='text-justify'>{`ABVSU prioritizes the safety and well-being of its students during transit. All university transportation services follow strict safety protocols, including routine vehicle maintenance and inspections. Additionally, the university employs experienced drivers who are trained in safe driving practices, ensuring a secure and reliable commute for all passengers.   `}</p>
        <p className='pt-2 text-justify'>{`To further enhance security, ABVSU has established clear communication channels for students to report any transportation-related concerns. This proactive approach ensures a responsive system that swiftly addresses any challenges, maintaining a safe and efficient transportation experience for everyone. `}</p>


        <h3 className='text-3xl font-bold pt-5'>Promoting Sustainable Transportation  </h3>
        <p className='text-justify'>{`Understanding the importance of sustainability, ABVSU actively encourages eco-friendly transportation options among students and staff. The university promotes the use of bicycles by providing dedicated bike lanes and secure parking areas. Additionally, initiatives such as carpooling and ride-sharing programs help reduce the carbon footprint and foster a greener, more sustainable campus environment.   `}</p>

        <h3 className='text-3xl font-bold pt-5'>Integrated Transportation Solutions  </h3>
        <p className='text-justify'>{`Beyond its shuttle services, ABVSU collaborates with local transport providers to offer integrated transportation solutions. These partnerships provide students with discounted fares and special routes to key locations, enhancing convenience and accessibility. The university continuously explores new collaborations to expand and improve transportation options for its community.   `}</p>
        <h3 className='text-3xl font-bold pt-5'>Support for Local and Regional Connectivity  </h3>
        <p className='text-justify'>{`ABVSU is committed to ensuring seamless connectivity between the campus and nearby towns and cities. Transportation services are designed to accommodate students who need to travel for internships, workshops, or recreational activities. By providing reliable and efficient transportation options, the university enables students to access valuable opportunities beyond the campus, enriching both their academic and personal experiences.   `}</p>

      </div>
    </section>
  );
};

export default Transportation;
