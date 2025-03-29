import React from "react";

const PlacementContact = () => {
  return (
    <div className="md:text-left mx-10">
      <div>
        <h2 className="font-bold text-3xl text-[#003262]">Placement Contact</h2>
        <p className="text-justify mt-4">
          The Placement Cell at Atal Bihari Vajapayee Skill University (ABVSU)
          is dedicated to assisting students in securing job opportunities with
          top recruiters. The cell works closely with companies and
          organizations to facilitate campus placements, internships, and career
          guidance programs.
        </p>
        <p className="mt-5 text-justify">
          For any inquiries related to placements, students and recruiters can
          contact the Placement Cell through the details provided below:
        </p>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-[#003262] text-2xl">
          Placement Cell Contact Details
        </h1>
        <div className="text-left">
          <div className="mt-3">
            <span className="font-bold">Address</span>
            <p>
              Atal Bihari Vajapyaee Skill University, Placement Cell, Campus
              Office
            </p>
          </div>
          <div className="mt-3">
            <span className="font-bold">Email</span>
            <p>info@abvsu.ac.in</p>
          </div>
          <div className="mt-3">
            <span className="font-bold">Phone</span>
            <p>+91 9818841348</p>
          </div>
          <div className="mt-3">
            <span className="font-bold">Office Hours</span>
            <p>Monday to Friday, 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementContact;
