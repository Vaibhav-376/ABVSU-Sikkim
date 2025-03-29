import React from "react";

const AluminiAssociation = () => {
  const visionMission = [
    {
      id: 1,
      desc: "Foster an enduring connection between the university and its alumni.",
    },
    {
      id: 2,
      desc: "Provide platforms for alumni to share their expertise, experiences, and success stories with current students.",
    },
    {
      id: 3,
      desc: "Offer networking and career development opportunities to support alumni at every stage of their professional journey.",
    },
    {
      id: 4,
      desc: "Engage alumni in the university's mission of creating a technology-enabled, skills-driven educational environment.",
    },
  ];

  const objective = [
    {
      id: 1,
      heading: "Create Networking Opportunities",
      desc: "Provide a platform for alumni to network with each other, industry professionals, and faculty members, fostering both personal and professional connections.",
    },
    {
      id: 2,
      heading: "Support Career Growth",
      desc: "Facilitate career advancement by offering alumni access to job opportunities, internships, and professional development programs.",
    },
    {
      id: 3,
      heading: "Give Back to the University",
      desc: "Enable alumni to contribute their time, expertise, and resources to help shape the future of the university, its students, and its academic programs.",
    },
    {
      id: 4,
      heading: "Promote Lifelong Learning",
      desc: "Offer ongoing educational opportunities, including webinars, workshops, and certifications, to help alumni stay updated on industry trends and emerging technologies.",
    },
    {
      id: 5,
      heading: "Build a Strong Community",
      desc: " Ensure that alumni feel a strong sense of belonging to the university, encouraging them to engage with students, faculty, and peers.",
    },
  ];
  const benefits = [
    {
      id: 1,
      heading: "Career Development and Placement Assistance",
      desc: "The Alumni Association works in close partnership with the university’s Training and Placement Cell to provide alumni with access to career counseling, job placement services, and exclusive job listings from industry partners. Alumni have the opportunity to participate in career fairs, recruitment drives, and industry-specific networking events hosted by the university.",
    },
    {
      id: 1,
      heading: "Professional Networking Events",
      desc: "Regular alumni networking events, seminars, and conferences are organized to connect alumni across different industries and professions. These events serve as a platform for sharing knowledge, experiences, and career opportunities. Industry leaders and influential alumni are invited to guest speak at these events, allowing for a greater exchange of insights on emerging trends, technologies, and career pathways.",
    },
    {
      id: 1,
      heading: "Continuous Learning and Development",
      desc: "Alumni are encouraged to participate in skill enhancement programs, including online courses, workshops, and webinars, tailored to meet the evolving needs of the industry. The university offers alumni-exclusive access to learning resources, certification programs, and online platforms to ensure they stay ahead in their professional fields.",
    },
    {
      id: 1,
      heading: "Mentorship Programs",
      desc: "Alumni can serve as mentors for current students, offering guidance on academic, career, and personal development. This creates a strong support system where students can benefit from real-world insights and advice. The mentorship program also allows alumni to give back to their alma mater by sharing their expertise and helping shape the next generation of leaders.",
    },
    {
      id: 1,
      heading: "Alumni Scholarships and Grants",
      desc: "The Alumni Association has established a fund to support scholarships and grants for deserving students, particularly those from economically disadvantaged backgrounds. Alumni contributions help make education more accessible for future generations of students. Alumni can also contribute to funding research projects, faculty development, and infrastructure improvements, helping the university grow and evolve.",
    },
    {
      id: 1,
      heading: "Alumni-Student Interaction",
      desc: "Through guest lectures, workshops, and industry-specific interactions, alumni can directly contribute to the education of current students, enriching their learning experiences with real-world knowledge and practical insights. Alumni are invited to return to campus for events, lectures, and as judges for university competitions, fostering a deeper sense of connection between past and present members of the university community.",
    },
  ];

  const event = [
    {
      id: 1,
      heading: "Annual Alumni Meet",
      desc: "The university organizes an annual alumni reunion, where graduates from various batches come together to reconnect, share experiences, and celebrate their journey. The meet also serves as an opportunity to reflect on the university’s progress and future direction. Special awards and recognition are given to distinguished alumni who have made significant contributions to their fields or to society.",
    },
    {
      id: 2,
      heading: "Regional Alumni Chapters",
      desc: " Regional chapters of the Alumni Association are set up in major cities and countries to ensure that alumni can stay connected with each other, regardless of where they are located. These chapters organize regular meetups, networking events, and seminars.",
    },
    {
      id: 3,
      heading: "Alumni-Driven Initiatives",
      desc: " Alumni are encouraged to initiate and participate in various events, research projects, and social impact initiatives that benefit the university community. This could include organizing conferences, launching alumni-led publications, or contributing to charitable endeavors.",
    },
    {
      id: 4,
      heading: "Online Alumni Portal",
      desc: "An exclusive online platform is available for alumni to stay connected with the university, engage in discussions, access resources, and track career opportunities. The portal also allows alumni to maintain their personal profiles, share achievements, and update contact information.",
    },
    // {id:1,heading:'' ,desc:''},
  ];
  return (
    <div className="md:text-left md:mx-10 mx-5">
      <div>
        <h2 className="font-bold text-[#003262] text-2xl">
          University Alumini Association
        </h2>
        <p className="mt-3 text-left">
          At The Atal Bihari Vajapayee Skill University, we recognize that our
          alumni are an invaluable part of our community and play a key role in
          the university’s continued growth and success. The University Alumni
          Association aims to keep our graduates connected, engaged, and
          empowered, offering a platform for lifelong learning, professional
          networking, and contributions to the development of future generations
          of students.
        </p>

        <p className="mt-7 text-left">
          As a futuristic model for young India, we pride ourselves on
          cultivating a strong bond between the university and its alumni. By
          focusing on current trends and skills, we foster a culture of
          continuous development, collaboration, and innovation that extends
          well beyond graduation.
        </p>
      </div>
      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-10 mb-3">
          Vision and Mission
        </h2>
        <p className="text-left">
          Our vision is to create a dynamic, engaged, and supportive alumni
          network that actively contributes to the university’s goals, while
          providing opportunities for personal and professional growth for all
          members. The Alumni Association exists to maintain a lifelong
          connection with our graduates, ensuring they remain an integral part
          of the university's progress.
        </p>

        <p className="text-left mt-5 font-semibold mb-7">
          The mission of the alumini association is to:
        </p>
        {visionMission.map((item) => (
          <div className="text-left mx-4" key={item.id}>
            <ul className="list-disc">
              <li>{item.desc}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-4">Objectives</h2>
        {objective.map((item) => (
          <div key={item.id} className="mx-4 mt-4 text-left">
            <ul className="list-disc">
              <li>
                <span className="font-bold text-[#003262]">{item.heading}</span>{" "}
                {": "}
                {item.desc}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-10 ">
          Alumini service and benefits
        </h2>
        {benefits.map((item) => (
          <div key={item.id}>
            <ul className="list-disc mx-4 mt-4 text-left">
              <li>
                <span className="font-bold text-[#003262]">{item.heading}</span>{" "}
                {" : "} {item.desc}
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-10 mb-4">
          Alumini Events and Engagement
        </h2>
        {event.map((item) => (
          <div key={item.id}>
            <ul className="list-disc mx-4 mb-4 text-left">
              <li>
                <span className="font-bold text-[#003262]">{item.heading}</span>{" "}
                {" : "}
                {item.desc}
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-bold text-[#003262] text-2xl mt-10">
          Giving Back to the University
        </h2>
        <p className="mt-4 text-left">
          The university encourages alumni to contribute in a variety of ways,
          whether through financial support, professional expertise, or time.
          Contributions help fund scholarships, support research, enhance
          infrastructure, and provide ongoing development opportunities for both
          students and faculty.
        </p>
        <p className="mt-6 text-left">
          Alumni can choose to donate to specific university programs, projects,
          or initiatives, or they can offer their time through mentoring, guest
          lectures, and other activities that directly benefit the student
          community.
        </p>
        <p className="mt-6 text-left">
          The Atal Bihari Vajapayee Skill University Alumni Association is designed
          to foster a lifelong connection between graduates and their alma
          mater. As we continue to build a futuristic, skills-led educational
          environment, the contributions of our alumni will play an essential
          role in shaping the university's future and enhancing the experiences
          of current and future students.
        </p>
        <p className="mt-6 text-left">
          We are proud of the success and achievements of our alumni and are
          committed to ensuring that they continue to thrive long after they
          graduate. Together, we are shaping the future of education, industry,
          and society.
        </p>
      </div>
    </div>
  );
};

export default AluminiAssociation;
