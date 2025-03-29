import React from 'react'
import img from '@/public/images/abvsu/conference.avif'
import Image from 'next/image'
import { FaGlobe, FaRegCalendarAlt, FaMapMarkerAlt, FaSeedling, FaTree, FaChalkboardTeacher, FaEnvelope, FaMoneyBillWave, FaLink } from "react-icons/fa";
const events = [
  {
    title: "National Seminar on Sustainable Development & AI Integration",
    date: "July 22, 2025",
    venue: "Online & Offline (Hybrid Mode)",
    theme: "AI for Sustainability & Green Innovation",
    icons: {
      title: FaGlobe,
      date: FaRegCalendarAlt,
      venue: FaMapMarkerAlt,
      theme: FaSeedling
    },
    borderColor: "border-yellow-500"
  },
  {
    title: "Workshop on Advanced Data Science & Machine Learning",
    date: "June 5, 2025",
    venue: "Computer Science Auditorium, ABVSU",
    trainer: "Industry Experts & Data Scientists",
    icons: {
      title: FaTree,
      date: FaRegCalendarAlt,
      venue: FaMapMarkerAlt,
      trainer: FaChalkboardTeacher
    },
    borderColor: "border-green-500"
  }
];

const Conference = () => {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-4 py-10">
          <div className="w-full md:w-1/2 flex flex-col gap-4 my-auto text-justify">
            <h3 className='text-3xl font-bold'>Conference </h3>
            <p>
              {`At Atal Bihari Vajpayee Skill University (ABVSU), we cultivate a culture of research, collaboration, and continuous learning through our conferences, seminars, and workshops. These events bring together academicians, researchers, industry experts, and students to explore groundbreaking ideas and emerging trends across diverse fields.`}
            </p>
            <p>
              {`Through these interactive sessions, ABVSU aims to bridge the gap between academia and industry, fostering interdisciplinary collaborations that lead to real-world solutions. Whether discussing technological advancements, business strategies, skill development, or societal progress, our events provide a platform for critical discussions, hands-on learning, and networking opportunities to empower future leaders and innovators.`}
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
        <h3 className='font-bold text-3xl py-3'> Upcoming Conferences & Seminars</h3>

        <div className="flex flex-col md:flex-row gap-4">
          {events?.map((event, index) => (
            <div key={index} className={`border-l-4 p-4 text-sm  shadow-md rounded-lg ${event.borderColor}`}>
              <h3 className="text-sm md:text-lg  font-semibold flex items-center gap-2">
                <event.icons.title className="text-gray-700" />
                {event.title}
              </h3>
              <p className="flex items-center gap-2">
                <event.icons.date className="text-gray-500" />
                <strong>Date:</strong> {event.date}
              </p>
              <p className="flex items-center gap-2">
                <event.icons.venue className="text-gray-500" />
                <strong>Venue:</strong> {event.venue}
              </p>
              {event.theme && (
                <p className="flex items-center gap-2">
                  <event.icons.theme className="text-gray-500" />
                  <strong>Theme:</strong> {event.theme}
                </p>
              )}
              {event.trainer && (
                <p className="flex items-center gap-2">
                  <event.icons.trainer className="text-gray-500" />
                  <strong>Trainer:</strong> {event.trainer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="py-10">
          {/* Title */}
          <div className="flex items-center mb-3">
            <FaLink className=" text-2xl mr-2" />
            <h2 className="text-3xl font-bold">Registration Details</h2>
          </div>

          {/* Fees */}
          <div className="flex items-center mb-2">
            <FaMoneyBillWave className=" text-lg mr-2" />
            <p className="font-semibold">
              Fees: <span className="font-normal">Vary based on category (Student/Professional/Industry)</span>
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <FaEnvelope className=" text-lg mr-2" />
            <p className="font-semibold">
              Email: <a href="mailto:info@abvsu.ac.in" className="text-blue-600 hover:underline">info@abvsu.ac.in</a>
            </p>
          </div>
        </div>


      </div>
    </section >
  )
}

export default Conference