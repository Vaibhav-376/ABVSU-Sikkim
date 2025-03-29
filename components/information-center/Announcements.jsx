import React from "react";

const Announcements = () => {
  const news = [
    "CM Lays foundation stone for Atal Bihari Vajpayee Skill University, Sikkim .....",
  ];
  const notifications = [
    "Paramedical Courses will be available soon.....",
    "Law Courses will be available Soon....",
    "Admissions for the 2025-26 batch are opening soon...",
  ];

  return (
    <>
      <div className="flex flex-col pt-10 px-6 text-start container mx-auto max-w-5xl">
        <h3 className="text-3xl font-bold">
          Important Announcements
        </h3>
        <p className="py-2 ">
          Stay updated with the latest news and notifications
        </p>
      </div>

      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-start py-3 text-3xl font-bold transition ">
          News
        </h2>
        <div className="flex justify-center">
          <ol className="list-decimal pl-5 w-full max-w-5xl space-y-4 text-lg">
            {news.map((notice, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-md hover:bg-blue-50 transition-all "
              >
                {notice}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-6 pb-10">
        <h2 className="text-start py-3 text-3xl font-bold transition ">
          Notification
        </h2>
        <div className="flex justify-center">
          <ol className="list-decimal pl-5 w-full max-w-5xl space-y-4 text-lg">
            {notifications.map((notice, index) => (
              <li
                key={index}
                className="bg-gray-100 p-4 rounded-md shadow-md hover:bg-blue-50 transition-all "
              >
                {notice}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Announcements;
