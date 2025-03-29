import React from "react";

const InternalComplaintCommittee = () => {
  const objective = [
    { id: 1, desc: "Ensuring a Safe and Supportive Environment" },
    { id: 2, desc: "Promoting Gender Equality" },
    { id: 3, desc: "Facilitating Fair and Transparent Processes" },
  ];

  const vision = [
    { id: 1, desc: "Zero Tolerance for Harassment and Discrimination" },
    { id: 2, desc: "Empowering Women Staff" },
    { id: 3, desc: "Building Awareness and Prevention" },
  ];

  const mission = [
    {
      id: 1,
      desc: "To establish a safe atmosphere in both the physical and social realms to prevent sexual harassment.",
    },
    {
      id: 2,
      desc: "Committed to staff members the freedom to report harassment of any kind without worrying about repercussions.",
    },
    {
      id: 3,
      desc: "To ensure that grievances will be treated delicately and with the utmost secrecy.",
    },
    {
      id: 4,
      desc: "To ensure that anti-harassment policies and procedures comply with the most recent legislative requirements by reviewing and updating them whenever required.",
    },
    {
      id: 5,
      desc: "To organize expert sessions, training sessions, and awareness campaigns to educate staff members on their legal obligations and the value of a harassment-free workplace.",
    },
  ];

  const principles = [
    {
      id: 1,
      desc: "Maintain confidentiality of all matters discussed by the ICC.",
    },
    { id: 2, desc: "Unbiased, Independent, Simple, and Fair processes." },
    {
      id: 3,
      desc: "No opinion expressed about any ICC at ABVSU outside the Committee.",
    },
    {
      id: 4,
      desc: "All members must be available and approachable at all times.",
    },
    {
      id: 5,
      desc: "Maintenance of proper conduct by the members at all times.",
    },
  ];
  
  const functions = [
    { id: 1, desc: "Assure a safe working environment at the campus." },
    {
      id: 2,
      desc: "Create an effective organizational structure for improving the status of women in the institution.",
    },
    {
      id: 3,
      desc: "Advise the management about issues influencing women's work lives and status.",
    },
    {
      id: 4,
      desc: "Sensitize all members of the University community towards gender equity.",
    },
    {
      id: 5,
      desc: "Organize workshops and awareness programs at regular intervals.",
    },
    {
      id: 6,
      desc: "Encourage participation from NGOs and law enforcement agencies.",
    },
    {
      id: 7,
      desc: "Provide a platform for registering complaints and conducting inquiries.",
    },
    {
      id: 8,
      desc: "Review safety and security measures for female employees and students.",
    },
    {
      id: 9,
      desc: "Treat sexual harassment as misconduct under the service rules.",
    },
  ];

  const members = [
    {id:1,desc:'Presiding Officer'},
    {id:2,desc:'Convener'},
    {id:3,desc:'Member'},
    {id:4,desc:'Member'},
    {id:5,desc:'Member'},
    {id:6,desc:'Member'},
    {id:7,desc:'Student Member'},
    {id:8,desc:'Student Member'},
    {id:9,desc:'External Member, NGO'}
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-[#003262] text-white rounded-xl p-8 mb-10 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Internal Complaint Committee (ICC)</h1>
        <p className="text-lg md:text-xl">
          Ensuring a safe and harassment-free environment at Atal Bihari Vajapayee Skill University
        </p>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">About ICC</h2>
        <p className="text-gray-700 mb-4">
          As per the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013, 
          Atal Bihari Vajapayee Skill University has formed the Internal Complaint Committee (ICC) at the University 
          level in the year 2023.
        </p>
        <p className="text-gray-700">
          The Internal Complaints Committee (ICC) is constituted in higher education institutions under sub-regulation (1) 
          of regulations of University Grants Commission of India in Gazette Notification Dated 2nd May 2016 for Prevention, 
          Prohibition, and Redressal of sexual harassment of women employees and students in higher educational institutions, 
          Regulations 2015.
        </p>
      </div>

      {/* Grid Layout for Objectives, Vision, Mission */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Objectives */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Objectives of ICC</h2>
          <ul className="space-y-3">
            {objective.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className="bg-blue-100 text-[#003262] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{item.id}</span>
                <span className="text-gray-700">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Vision of ICC</h2>
          <ul className="space-y-3">
            {vision.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className="bg-blue-100 text-[#003262] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{item.id}</span>
                <span className="text-gray-700">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Mission of ICC</h2>
          <ul className="space-y-3">
            {mission.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className="bg-blue-100 text-[#003262] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{item.id}</span>
                <span className="text-gray-700">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Principles and Functions Side by Side */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Principles */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Principles of ICC</h2>
          <ul className="space-y-3">
            {principles.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className="bg-blue-100 text-[#003262] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{item.id}</span>
                <span className="text-gray-700">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Functions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Functions of ICC</h2>
          <ul className="space-y-3">
            {functions.map((item) => (
              <li key={item.id} className="flex items-start">
                <span className="bg-blue-100 text-[#003262] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">{item.id}</span>
                <span className="text-gray-700">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Rules and Regulations */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Rules and Regulations</h2>
        <p className="text-gray-700">
          The ICC is constituted to help maintain a harmonious atmosphere at the Institute, and to enable women to pursue 
          their work with dignity and reassurance. The Cell has been working to raise awareness of gender equality issues.
        </p>
      </div>

      {/* Filing Complaint */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Filing Complaint</h2>
        <p className="text-gray-700 mb-4">
          Complaints must be submitted in a "Complaint Registration Form" which is provided on the respective website at 
          <span className="font-semibold text-[#003262]"> icc.cell@ABVSU.sc.in</span>.
        </p>
        <p className="text-gray-700">
          Within 24 hours of online submission, the complaint must be physically validated at the ICC office by the 
          complainant(s) for it to be processed by the committee. ICC will conduct a complete, unbiased investigation 
          by maintaining strict confidentiality.
        </p>
      </div>

      {/* Committee Composition */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-[#003262] mb-4 border-b-2 border-blue-200 pb-2">Internal Complaint Committee Composition</h2>
        <p className="text-gray-700 mb-6">
          In pursuance of the Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013 and in 
          accordance with Section 4 AICTE (Gender Sensitization, Prevention, and Prohibition of harassment of Women 
          Employees and Students and Redressal of Grievances in Technical Institutions) Regulations 2016 vide No. 
          F.AICTE/WH/2016/01 dated 10.06.2016, the Internal Complaints Committee is in place as under to deal with the 
          complaints relating to sexual harassment at the workplace.
        </p>
        
        <h3 className="text-lg font-semibold text-[#003262] mb-3">Committee Members</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {members.map((item) => (
            <div key={item.id} className="flex items-center bg-gray-50 p-3 rounded-lg">
              <span className="bg-blue-100 text-[#003262] rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-medium">{item.id}</span>
              <span className="text-gray-700 font-medium">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
        <h3 className="text-xl font-bold text-[#003262] mb-2">Need Assistance?</h3>
        <p className="text-gray-700 mb-4">The ICC is here to help maintain a safe and respectful environment for all.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
          Contact ICC
        </button>
      </div>
    </div>
  );
};

export default InternalComplaintCommittee;