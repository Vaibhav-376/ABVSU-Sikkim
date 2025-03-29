import React from 'react'

const CoursesTable = ({courses}) => {
    return (
        <div className="container mx-auto p-6 bg-white">
        <h4 className="text-2xl font-semibold mb-4 text-[#003262]">Courses Offered</h4>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-[#003262] text-white">
                <th className="p-2 text-center border border-gray-300">Course</th>
                <th className="p-2 text-center border border-gray-300 w-1/3">Specialization</th>
                <th className="p-2 text-center border border-gray-300">Duration</th>
                <th className="p-2 text-center border border-gray-300">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index} className="border border-gray-300 hover:bg-gray-100">
                  <td className="p-2 text-start border border-gray-300">{course.course}</td>
                  <td className="p-2 text-start border border-gray-300 max-w-md break-words">
                    {Array.isArray(course.specialization) ? course.specialization.join(", ") : course.specialization}
                  </td>
                  <td className="p-2 text-start border border-gray-300">{course.duration}</td>
                  <td className="p-2 text-start border border-gray-300">{course.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    )
}

export default CoursesTable