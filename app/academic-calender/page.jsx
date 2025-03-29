import PageLinks from "@/components/common/pageLink";
import React from "react";

const page = () => {
  const academicCalendar = [
    {
      section: "Semester 1 (August - December)",
      events: [
        {
          event: "Start of Semester 1",
          dates: "August 1, 2025",
          details:
            "Semester 1 begins with classes, project-based learning, and industry-focused workshops.",
        },
        {
          event: "Induction & Orientation Week",
          dates: "August 1 - August 7, 2025",
          details:
            "A week dedicated to introducing new students to the university's culture, facilities, and academic expectations.",
        },
        {
          event: "End of Add/Drop Period",
          dates: "August 14, 2025",
          details: "Last day for students to add or drop courses without penalty.",
        },
        {
          event: "Mid-Semester Break",
          dates: "October 1 - October 7, 2025",
          details: "A break to allow students to recharge and reflect on their academic progress.",
        },
        {
          event: "Final Examinations",
          dates: "December 15 - December 21, 2025",
          details: "End-of-semester examinations for all courses.",
        },
      ],
    },
    {
      section: "Semester 2 (January - May)",
      events: [
        {
          event: "Start of Semester 2",
          dates: "January 11, 2026",
          details:
            "Semester 2 begins with new projects, interdisciplinary learning, and skill-building workshops.",
        },
        {
          event: "Technology and Innovation Week",
          dates: "March 15 - March 19, 2026",
          details:
            "Showcasing the latest trends in technology, research, and innovation through hackathons, workshops, and competitions.",
        },
        {
          event: "Final Examinations",
          dates: "May 15 - May 21, 2026",
          details: "End-of-semester examinations for all courses.",
        },
      ],
    },
  ];

  return (
    <>
      <PageLinks
        title="Academic Calendar"
        imageUrl="/images/pagelinks/terms.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Academic Calendar", link: "/academic-calendar" },
        ]}
      />
      <div className="mx-4 md:mx-10 mt-10 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl text-[#003262] mb-6 text-center">
            University Academic Calendar
          </h2>

          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#003262]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Event/Activity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Dates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider w-2/3">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {academicCalendar.map((section, index) => (
                  <React.Fragment key={`section-${index}`}>
                    <tr className="bg-gray-50">
                      <td colSpan="3" className="px-6 py-4 text-center font-bold text-lg text-[#003262]">
                        {section.section}
                      </td>
                    </tr>
                    {section.events.map((event, i) => (
                      <tr key={`event-${index}-${i}`} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {event.event}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                          {event.dates}
                        </td>
                        <td className="px-6 py-4 text-gray-700 w-2/3">{event.details}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
