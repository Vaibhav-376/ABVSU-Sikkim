import React from 'react';
import { FaBalanceScale, FaChartLine, FaCheck, FaCoins, FaGraduationCap, FaHandHoldingUsd, FaHandPointRight, FaMoneyCheckAlt, FaUsers, FaUserTie } from 'react-icons/fa';
const policies = [
  "Transparent & Accountable Financial Management",
  "Adherence to UGC, AICTE & Government Guidelines",
  "Ethical Investment & Expenditure Policies",
  "Regular Audits & Compliance Checks",
  "Sustainable Financial Strategies",
];
const FinanceCommittees = () => {
  return (<>
    <section className="py-10 ">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left Side Content */}
          <div className='justify-center'>
            <h2 className="text-3xl font-bold  mb-4">Finance Committee – ABVSU</h2>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Ensuring Financial Sustainability & Growth</h4>
            <p className="text-gray-700 mb-4">
              The Finance Committee of Atal Bihari Vajpayee Skill University (ABVSU) plays a crucial role in overseeing financial planning,
              budgeting, and resource allocation to ensure the university's long-term sustainability and growth.
            </p>
            <p className="text-gray-700 mb-4">
              The committee is responsible for maintaining fiscal discipline, financial transparency, and accountability while
              supporting the institution’s vision of providing world-class education and research opportunities.
            </p>
            <p className="text-gray-700">
              With a commitment to financial integrity and excellence, ABVSU continues to invest in state-of-the-art infrastructure,
              cutting-edge research, and student-centric initiatives, ensuring a sustainable and thriving academic environment.
            </p>
          </div>

          {/* Right Side Icon */}
          <div className="flex justify-center">
            <FaBalanceScale className="text-7xl h-32 w-32 text-blue-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-10 px-6 ">
      <h3 className="text-3xl font-bold  mb-8">Roles & Responsibilities</h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Budget Preparation & Approval */}
        <div className="bg-blue-100 p-6 rounded-2xl shadow-lg border border-blue-500 text-center">
          <FaCoins className="text-blue-500 text-5xl mb-4 mx-auto" />
          <h5 className="text-xl font-bold">Budget Preparation & Approval</h5>
          <p>Formulating the university’s annual budget, ensuring optimal allocation of resources.</p>
        </div>

        {/* Card 2: Financial Planning & Policy Implementation */}
        <div className="bg-green-100 p-6 rounded-2xl shadow-lg border border-green-500 text-center">
          <FaChartLine className="text-green-500 text-5xl mb-4 mx-auto" />
          <h5 className="text-xl font-bold">Financial Planning & Policy Implementation</h5>
          <p>Establishing policies for financial management and long-term sustainability.</p>
        </div>

        {/* Card 3: Expenditure Monitoring & Control */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-lg border border-yellow-500 text-center">
          <FaMoneyCheckAlt className="text-yellow-500 text-5xl mb-4 mx-auto" />
          <h5 className="text-xl font-bold">Expenditure Monitoring & Control</h5>
          <p>Overseeing financial transactions and ensuring cost-effectiveness.</p>
        </div>

        {/* Card 4: Revenue Generation & Resource Mobilization */}
        <div className="bg-red-100 p-6 rounded-2xl shadow-lg border border-red-500 text-center">
          <FaHandHoldingUsd className="text-red-500 text-5xl mb-4 mx-auto" />
          <h5 className="text-xl font-bold">Revenue Generation & Resource Mobilization</h5>
          <p>Exploring funding opportunities, grants, and collaborations for financial stability.</p>
        </div>

        {/* Card 5: Scholarship & Financial Aid Oversight */}
        <div className="bg-teal-100 p-6 rounded-2xl shadow-lg border border-teal-500 text-center">
          <FaGraduationCap className="text-teal-500 text-5xl mb-4 mx-auto" />
          <h5 className="text-xl font-bold">Scholarship & Financial Aid Oversight</h5>
          <p>Allocating funds for student scholarships, fellowships, and research grants.</p>
        </div>

        {/* Card 6: Compliance & Audit */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-500 text-center">
          <FaBalanceScale className="text-gray-500 text-5xl mb-4 mx-auto" />
          <h5 className="text-xl font-bold">Compliance & Audit</h5>
          <p>Ensuring adherence to financial regulations and conducting periodic audits.</p>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-8 mt-6">
      <h3 className="text-3xl font-bold mb-6 px-6">Structure of the Finance Committee</h3>
      
      <div className="flex flex-col items-center">
        {/* Chairperson Card */}
        <div className="bg-white shadow-lg border border-blue-500 p-6 text-center rounded-lg w-80">
          <FaUserTie className="text-blue-500 text-4xl mx-auto mb-3" />
          <h5 className="text-xl font-bold">Chairperson</h5>
          <p className="text-gray-600">The Vice-Chancellor or a designated authority responsible for financial oversight.</p>
        </div>
        
        {/* Vertical Line Connector */}
        <div className="w-1 h-10 bg-gray-300 my-3"></div>
        
        {/* Support Team Card */}
        <div className="bg-white shadow-lg border border-green-500 p-6 text-center rounded-lg w-80">
          <FaUsers className="text-green-500 text-4xl mx-auto mb-3" />
          <h5 className="text-xl font-bold">Support Team</h5>
          <ul className="text-left text-gray-600">
            <li className="flex items-center"><FaCheck className="text-green-500 mr-2" /> Financial planning & execution</li>
            <li className="flex items-center"><FaCheck className="text-green-500 mr-2" /> Ensuring academic financial support</li>
            <li className="flex items-center"><FaCheck className="text-green-500 mr-2" /> Providing insights into financial best practices</li>
            <li className="flex items-center"><FaCheck className="text-green-500 mr-2" /> Compliance with financial laws</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="container mx-auto px-6 py-4">
      <h3 className="font-bold text-3xl mb-4">Financial Policies & Regulations</h3>

      <div className="space-y-3  ">
        {policies.map((policy, index) => (
          <div key={index} className="flex items-center bg-transparent border-0">
            <FaHandPointRight className="text-blue-500 text-xl mr-3" />
            <p className="mb-0">{policy}</p>
          </div>
        ))}
      </div>
    </section>
  </>
  );
};

export default FinanceCommittees;
