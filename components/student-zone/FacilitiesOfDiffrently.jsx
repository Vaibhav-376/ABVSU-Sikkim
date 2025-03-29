import React from "react";

const FacilitiesOfDiffrently = () => {
  const keyObjectives = [
    {
      id: 1,
      heading: "Ensure Equal Access to Education",
      desc: " Facilitate an inclusive educational environment where students with disabilities have access to the same opportunities, resources, and learning experiences as their peers.",
    },
    {
      id: 2,
      heading: "Provide Technological and Infrastructure Support",
      desc: " Develop and implement infrastructure that is universally accessible, including assistive technologies that aid learning and mobility.",
    },
    {
      id: 3,
      heading: "Promote Social Integration and Participation",
      desc: "Encourage active participation in academic, co-curricular, and extracurricular activities to ensure the social inclusion of differently-abled students.",
    },
    {
      id: 4,
      heading: "Offer Personalized Support and Services",
      desc: "Provide specialized support services such as tutoring, counseling, and mentorship to address the individual needs of differently-abled students.",
    },
    {
      id: 5,
      heading: "Foster Career and Placement Opportunities",
      desc: "Ensure that students with disabilities have equal opportunities to pursue internships, jobs, and career development.",
    },
  ];

  const infrastructure = [
    {
      id: 1,
      heading: "Wheelchair Access and Ramps",
      desc: "All university buildings are equipped with wheelchair-accessible ramps, ensuring easy access to classrooms, administrative offices, libraries, laboratories, and other essential areas. Elevators are available in multi-story buildings for the convenience of students with mobility impairments.",
    },
    {
      id: 2,
      heading: "Specialized Learning Spaces",
      desc: "Dedicated classrooms and study areas are designed to accommodate differently-abled students, with extra space and seating arrangements that allow for easy movement and accessibility. Adjustable desks and ergonomic furniture are available to ensure comfort for students with various physical disabilities.",
    },
    {
      id: 3,
      heading: "Accessible Restrooms",
      desc: "Gender-neutral, fully accessible restrooms are located in all key areas of the campus, equipped with proper facilities to ensure the dignity and privacy of differently-abled students.",
    },
    {
      id: 4,
      heading: "Transport Assistance",
      desc: "The university provides transport services with vehicles that are equipped to accommodate students with mobility challenges, ensuring easy and safe movement across the campus.",
    },
  ];

  const support = [
    {
      id: 1,
      heading: "Screen Reader Software and Voice Recognition Tools",
      desc: "Students with visual impairments can access screen reader software, which allows them to read digital course materials and textbooks. Voice recognition software is also available for those who need assistance with writing or typing.",
    },
    {
      id: 2,
      heading: "Audio and Braille Course Materials",
      desc: " Course materials, including books, notes, and syllabi, are available in audio and Braille formats, ensuring that students with visual disabilities can access learning resources in a format that suits their needs.",
    },
    {
      id: 3,
      heading: "Sign Language Interpretation",
      desc: "For students with hearing impairments, sign language interpreters are available in classes, exams, and university events. Additionally, assistive listening devices (FM systems) are provided to improve communication during lectures and seminars.",
    },
    {
      id: 4,
      heading: "Customized Learning Materials",
      desc: "Students with learning disabilities can request customized learning materials, including visual aids, extra time for assignments, and audio-visual content, to support their unique learning styles.",
    },
    {
      id: 5,
      heading: "E-Learning Tools and Platforms",
      desc: "The university employs technology-enabled learning platforms that are fully accessible and user-friendly. E-learning tools are designed to support students with disabilities by offering features like text-to-speech, subtitles, and other adaptive technologies.",
    },
  ];

  const specializedService = [
    {
      id: 1,
      heading: "Dedicated Resource Center for Differently Abled Students",
      desc: "A resource center serves as the hub for all services related to differently-abled students. It provides guidance, resources, and a safe space for students to access support and information regarding accommodations, academic assistance, and career services.",
    },
    {
      id: 2,
      heading: "Academic Support and Mentorship",
      desc: "Academic counseling is available to students who require additional support in their studies. This includes personalized tutoring, note-taking services, and one-on-one mentoring to help them excel in their coursework. Peer mentorship programs are offered to create an inclusive academic environment where students with disabilities can receive guidance from their peers and faculty members.",
    },
    {
      id: 3,
      heading: "Psychosocial Support and Counseling",
      desc: "The university offers counseling and mental health services to support the emotional well-being of differently-abled students. Counseling services are available to help students manage stress, academic pressure, and any challenges they face related to their disability.",
    },
    {
      id: 4,
      heading: "Exam Support and Accommodations",
      desc: " Differently-abled students are provided with accommodations during exams, such as extended time, extra breaks, or a separate examination room. These accommodations are tailored to meet individual needs and are provided in a fair and transparent manner.",
    },
  ];

  const coCurricullar = [
    {
      id: 1,
      heading: "Inclusive Student Clubs and Activities",
      desc: "The university encourages the active participation of differently-abled students in co-curricular and extracurricular activities, including clubs, sports, and cultural events. The student body is encouraged to be inclusive, and there are dedicated spaces for differently-abled students to showcase their talents and skills, whether in arts, music, sports, or other creative outlets.",
    },
    {
      id: 2,
      heading: "Sports and Physical Activity Programs",
      desc: "Adapted sports programs are available for students with disabilities, including wheelchair basketball, adaptive yoga, and swimming. The university ensures that all sports facilities are accessible to differently-abled students.",
    },
    {
      id: 3,
      heading: "Leadership and Social Engagement Opportunities",
      desc: "Differently-abled students are encouraged to take on leadership roles in student organizations and university committees. These opportunities allow them to contribute to the university’s culture of inclusion and diversity.",
    },
  ];
  return (
    <div className="md:text-left mx-10">
      <div>
        <h2 className="font-bold text-2xl text-[#003262]">
          University Facilities for Diffrently Abled Students
        </h2>
        <p className="mt-5 text-justify ">
          At The Atal Bihari Vajapayee Skill University, we are committed to
          fostering an inclusive and accessible environment for all students,
          including those with physical, sensory, and cognitive disabilities. As
          part of our vision to build a futuristic model of education, we strive
          to ensure that every student, regardless of their abilities, has the
          resources and opportunities they need to succeed. Our approach is
          rooted in providing technology-enabled learning, support systems, and
          accessible infrastructure that empower differently-abled students to
          reach their full potential.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-[#003262] text-2xl mb-3">
          Vision and Mission
        </h2>
        <p className="text-justify">
          The university’s commitment to inclusivity and accessibility is
          reflected in our vision to create an equitable learning environment.
          By collaborating with the government, industry, and academic
          stakeholders, we aim to provide a barrier-free educational experience
          for students with disabilities. Our mission is to not only provide
          education but also to offer an environment where differently-abled
          students can thrive and contribute meaningfully to society.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262] mb-5">
          Key Objectives
        </h2>
        <div className="space-y-4 mt-4">
          {keyObjectives.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border-2 border-gray-400 p-4 w-full h-auto"
            >
              <ul className="list-disc pl-5">
                <li className="text-left">
                  <span className="font-bold text-[#003262]">
                    {item.heading}
                  </span>{" "}
                  {" : "} {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-[#003262] text-2xl">
          Accessible Infrastructure
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-0 md:gap-2">
          {infrastructure.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border-2 border-[#003262] mx-auto h-auto w-full max-w-md mt-10 p-4"
            >
              <h2 className="text-[#003262] font-bold">{item.heading}</h2>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262] mb-5">
          Assistive Technology and Learning Support
        </h2>
        <div>
          {support.map((item) => (
            <div key={item.id}>
              <ul className="list-disc mx-4 text-left ">
                <li className="my-3">
                  <span className="font-bold text-[#003262]">
                    {item.heading}
                  </span>{" "}
                  {" : "} {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-[#003262] text-2xl mb-4">
          Specialized Support Services
        </h2>
        <div>
          {specializedService.map((item) => (
            <div key={item.id} className="my-3">
              <ul className="list-disc mx-4 text-left">
                <li>
                  <span className="font-bold text-[#003262]">
                    {item.heading}
                  </span>{" "}
                  {" : "}
                  {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">
          Co-Curricular and Extracurricular Participation
        </h2>
        <div className="mt-3">
          {coCurricullar.map((item) => (
            <div key={item.id} className="my-4 text-left">
              <ul className="list-disc mx-4">
                <li>
                  <span className="font-bold text-[#003262]">
                    {item.heading}
                  </span>{" "}
                  {" : "} {item.desc}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262] mb-3">
          Awareness and Sensitization Programs
        </h2>
        <p className="mt-3 text-justify">
          To foster an environment of inclusion and respect, the university
          regularly conducts awareness programs and workshops for students,
          faculty, and staff on topics related to disability awareness, rights,
          and accessibility. These programs aim to build empathy, promote
          understanding, and break down barriers that may exist within the
          campus community.
        </p>
        <p className="mt-3 text-justify">
          The Atal Bihari Vajapayee Skill University is committed to ensuring
          that students with disabilities receive the highest level of support,
          care, and opportunity to succeed. By providing accessible
          infrastructure, assistive technology, and personalized support, we
          strive to create an inclusive academic environment where all students,
          regardless of their abilities, can thrive and excel. Our vision is to
          equip differently-abled students with the skills, knowledge, and
          confidence they need to succeed in a technology-driven world and
          contribute meaningfully to society. We are proud to provide an
          environment where every student has the opportunity to unlock their
          full potential and shape their future.
        </p>
      </div>
      <div className="mt-8 text-left">
        <h2 className="text-[#003262] font-bold">Sincerely,</h2>
        <p className="text-[#003262] font-bold">
          The Atal bihari Vajapayee Skill University
        </p>
      </div>
    </div>
  );
};

export default FacilitiesOfDiffrently;
