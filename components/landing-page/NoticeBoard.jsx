const notices = [
  {
    date: "05",
    month: "MAR",
    year: "25",
    text: "Schedule of Students Council Election 2025-2026",
  },
  {
    date: "13",
    month: "FEB",
    year: "25",
    text: "Call for the Annual Magazine articles",
  },
  {
    date: "01",
    month: "FEB",
    year: "25",
    text: "Filling up of Examination Form for May-June 2025.",
  },
  {
    date: "29",
    month: "JAN",
    year: "25",
    text: "Add-on Course on Analyzing Financial Markets using Financial Modelling",
  },
];

const NoticeBoard = () => {
  return (
    <div className=" container px-8 mx-auto grid md:grid-cols-2 gap-8">
      {/* Principal's Message */}
      <div className="bg-gray-100 text-gray-800 p-6 rounded-sm shadow-lg">
        <h2 className="text-2xl font-bold mb-3">{`Principal’s Message`}</h2>
        <p className="text-sm leading-relaxed">
          Atal Bihari Vajpayee Skill University (ABVSU) Sikkim is a premier
          institution dedicated to skill development, vocational training, and
          industry-driven education. With a focus on practical learning and
          innovation, ABVSU aims to bridge the gap between academia and
          industry, equipping students with the expertise needed for career
          growth and entrepreneurship
        </p>
        <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">
          View Full Message
        </a>
      </div>

      {/* Notices Section */}
      <div>
        <h2 className="text-3xl font-bold">Notices</h2>
        <div className="mt-4 space-y-4">
          {notices.map((notice, index) => (
            <div
              key={index}
              className="flex items-center border-l-4 border-white pl-4"
            >
              <div className="text-center w-16">
                <span className="text-4xl font-bold">{notice.date}</span>
                <span className="block uppercase text-sm">
                  {notice.month}, {notice.year}
                </span>
              </div>
              <p className="ml-4 text-sm">{notice.text}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-6">
          <button className="bg-white text-[#002E5B] font-semibold py-2 px-6 rounded-md">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
