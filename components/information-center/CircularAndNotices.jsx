import { Download } from "lucide-react";
import React from "react";

const notices = [
  { id: 1, title: "Important Notice for Students", date: "March 5, 2025", file: "notice1.pdf" },
  { id: 2, title: "Exam Schedule Update", date: "March 3, 2025", file: "exam-schedule.pdf" },
  { id: 3, title: "New Academic Guidelines", date: "February 28, 2025", file: "guidelines.pdf" },
  { id: 4, title: "Exam Schedule Update", date: "March 3, 2025", file: "exam-schedule.pdf" },
  { id: 5, title: "New Academic Guidelines", date: "February 28, 2025", file: "guidelines.pdf" },
  { id: 6, title: "Exam Schedule Update", date: "March 3, 2025", file: "exam-schedule.pdf" },
  { id: 7, title: "New Academic Guidelines", date: "February 28, 2025", file: "guidelines.pdf" },
];

const CircularAndNotices = () => {
  return (
    <section className="container mx-auto p-4 py-10 max-w-7xl">
      <div className="flex flex-col gap-2 text-start py-4">
        <h3 className="text-3xl font-bold">
          Important Announcements
        </h3>
        <p>
          Stay updated with the latest news and notifications
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-blue-100 text-gray-800">
              <th className="border border-gray-300 px-4 py-2">S. No.</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Download</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={index} className="odd:bg-gray-100 even:bg-white hover:bg-gray-200">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{notice.title}</td>
                <td className="border border-gray-300 px-4 py-2">{notice.date}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <a
                    href={notice.file}
                    download
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 border border-blue-50 rounded-lg hover:bg-blue-500 hover:text-white transition"
                  >
                    <Download className="px-1" />
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CircularAndNotices;
