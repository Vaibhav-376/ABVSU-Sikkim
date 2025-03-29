import React from "react";
import { FaNewspaper, FaCalendarAlt, FaTrophy } from "react-icons/fa";

const NewsRecentEventsAndAchievements = () => {
  // JSON data inside the component
  const newsData = [
    {
      id: 1,
      icon: FaNewspaper,
      title: "Latest News",
      description: "Stay updated with the latest happenings at ABVSU.",
      link: "#",
      btnText: "Read More",
    },
    {
      id: 2,
      icon: FaCalendarAlt,
      title: "Upcoming Events",
      description: "Join our exciting events and seminars.",
      link: "#",
      btnText: "View Events",
    },
    {
      id: 3,
      icon: FaTrophy,
      title: "Our Achievements",
      description: "Discover the remarkable achievements of our students and faculty.",
      link: "#",
      btnText: "Explore More",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            News | Events | <span className="theme-clr">Achievements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div key={item.id} className="bg-white shadow-md  p-6 text-center hover:shadow-xl transition">
              <div className="flex justify-center theme-clr text-6xl">
                <item.icon />
              </div>
              <h5 className="text-xl font-semibold theme-clr mt-4">{item.title}</h5>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <a href={item.link} className="mt-4 inline-block theme-bg text-white px-4 py-2 rounded-md hover:shadow-lg transition">
                {item.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsRecentEventsAndAchievements;
