import React from "react";

const ReservationRoster = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6">
        <div className="text-start max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold  mb-4">Reservation Roster</h1>
          <p className="text-gray-700 mb-4 text-justify">
            The Reservation Roster at Atal Bihari Vajpayee Skill University (ABVSU) is designed to ensure the proper
            implementation of reservation policies as per government guidelines. The roster system helps in maintaining
            transparency and fairness in admissions, faculty recruitment, and other institutional processes.
          </p>
          <p className="text-gray-700 mb- text-justify">
             follows the prescribed reservation norms for Scheduled Castes (SC), Scheduled Tribes (ST), Other
            Backward Classes (OBC), Economically Weaker Sections (EWS), and Persons with Disabilities (PWD). The
            reservation roster provides a systematic way to allocate reserved seats and positions while ensuring
            compliance with regulatory mandates.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            The university updates and maintains the reservation roster regularly to track the reservation status
            across various categories. This helps in monitoring and ensuring that the allocated quotas are met while
            providing equal opportunities for all eligible candidates.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Key Features of the Reservation Roster:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-justify">
            <li>Ensures fair distribution of reserved seats and positions.</li>
            <li>Regularly updated to reflect the latest reservation policies.</li>
            <li>Maintains transparency in recruitment and admission processes.</li>
            <li>Helps in compliance with government regulations.</li>
          </ul>

          <p className="text-gray-700 mt-6">
            For more details regarding the Reservation Roster, students and faculty members can contact the university
            administration office.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReservationRoster;
