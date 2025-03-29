import React from 'react'
import img from '@/public/images/accreditation.jpg'
import img2 from '@/public/images/abvsu/sports.avif'
import Image from 'next/image'

const SportsTraining = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <h3 className='text-3xl font-bold pt-3'>SportsTraining</h3>
        <p className='text-justify pt-2'>
          {`At Atal Bihari Vajpayee Skill University (ABVSU), sports training is an essential part of the university’s vision to promote physical fitness, discipline, and teamwork alongside skill-based education. Understanding the significance of sports in holistic student development, ABVSU offers structured training programs across various sports, encouraging students to actively participate in physical activities.`}
        </p>
        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='text-3xl font-bold pt-3'>State-of-the-Art Sports Facilities </h3>
            <p>
              {`At Atal Bihari Vajpayee Skill University (ABVSU), students have access to modern sports facilities designed to support various athletic disciplines. The campus includes well-maintained playing fields, indoor sports complexes, and dedicated training areas for sports such as basketball, football, cricket, badminton, and athletics. These facilities provide a professional training environment, encouraging students to develop their skills and compete at higher levels.`}
            </p>
            <p>
              {`ABVSU is also committed to investing in high-quality sports equipment and resources. Students benefit from advanced training gear, fitness equipment, and expert coaching, ensuring a well-rounded athletic experience. By fostering a culture of excellence in sports, the university promotes an active and healthy lifestyle for all students.`}
            </p>
          </div>
          <div className="w-full md:w-1/2 items-center flex justify-center">
            <Image
              src={img}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full h-[350px] rounded-lg object-fit"
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
            <h3 className='text-3xl font-bold'>Comprehensive Training Programs</h3>

            <p>
              At Atal Bihari Vajpayee Skill University (ABVSU), a wide range of sports training programs are available to cater to both amateur and competitive athletes. These programs focus on developing fundamental skills, improving physical fitness, and enhancing overall athletic performance. Under the guidance of experienced coaches, students receive expert training and support to help them reach their full potential.
            </p>

            <p>
              The sports training curriculum is designed to cover all key aspects of athletic development, including strength and conditioning, skill enhancement, and strategic gameplay. Students engage in regular practice sessions, fitness training, and competitive events, ensuring a holistic and well-rounded approach to sports. Through these programs, ABVSU fosters a culture of discipline, teamwork, and excellence in athletics.
            </p>
          </div>
        </div>

        <h3 className='text-3xl font-bold'>Encouraging Teamwork and Leadership</h3>
        <p className=''>{`At Atal Bihari Vajpayee Skill University (ABVSU), sports play a crucial role in developing teamwork, leadership, and communication skills among students. The university actively encourages students to join sports teams and participate in intercollegiate competitions, fostering camaraderie, mutual support, and discipline.`}</p>
        <p className='pt-2'>{`Through team sports, students learn the importance of collaboration, strategic thinking, and shared responsibility, while individual sports promote self-discipline and resilience. Coaches at ABVSU emphasize these qualities, preparing students not just for sports competitions but also for future challenges in their personal and professional lives.`}</p>

        <h3 className='text-3xl font-bold pt-5'>Supportive SportsTraining Staff</h3>
        <p className='text-justify'>{`Through team sports, students learn the importance of collaboration, strategic thinking, and shared responsibility, while individual sports promote self-discipline and resilience. Coaches at ABVSU emphasize these qualities, preparing students not just for sports competitions but also for future challenges in their personal and professional lives.`}</p>

        <h3 className='text-3xl font-bold pt-5'>Research and Learning Support </h3>
        <p className='text-justify'>{`The library actively promotes research and learning by organizing workshops and seminars on various topics, such as effective research strategies, citation management, and academic writing. These workshops are designed to enhance students’ research skills and equip them with the tools necessary for success in their academic endeavors. The library also provides access to research guides and subject-specific resources, helping students locate relevant materials for their coursework and projects. `}</p>

        <h3 className='text-3xl font-bold pt-3'>Fitness and Wellness Initiatives at ABVSU  </h3>
        <p className='text-justify'>{`At Atal Bihari Vajpayee Skill University (ABVSU), fitness and wellness are integral to student development. The university conducts workshops, fitness camps, and health seminars to educate students about the benefits of physical activity, nutrition, and mental well-being. These initiatives encourage a holistic approach to health, helping students adopt healthy lifestyle choices that support both academic success and personal well-being.   `}</p>

        <h3 className='text-3xl font-bold pt-3'> Career Opportunities in Sports </h3>
        <p className='text-justify'>{`For students interested in a career in the sports industry, ABVSU provides career guidance and industry exposure.    `}</p>
        <p className='text-justify'>{`ABVSU also facilitates internships, hands-on training, and workshops with industry professionals, ensuring students gain practical experience and insights into the sports world. By equipping students with the right skills, certifications, and opportunities, ABVSU helps them build successful careers in sports, fitness, and wellness-related fields.`}</p>
      </div>
    </section>
  )
}

export default SportsTraining