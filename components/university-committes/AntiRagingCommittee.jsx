import React from "react";

const AntiRaggingCommittee = () => {
  const committeeMembers = [
    [
      "1",
      "Head of Institution",
      "Dr.(Prof.) Swami Prasad Sinha",
      "Vice Chancellor chariperson of Comittee",
      "vc@abvsu.edu, 03595263126",
    ],
    [
      "2",
      "Member",
      "Dr. Ankur Johari",
      "Pro VC",
      " info@ABVSU.ac.in, ankurjohari@ABVSU.ac.in,9540578695",
    ],
    [
      "3",
      "Representative of Faculty Members",
      "Dr. P Prasant",
      "Deputy Pro VC",
      "7710301027, dyprovc@ABVSU.ac.in",
    ],
    [
      "4",
      "Member ",
      "Mr. Mridanku Shekhar Pramanick	 ",
      "Registrar ",
      "9331087216, registrar@ABVSU.ac.in ",
    ],
    [
      "5",
      "Representative of Civil & Police Administration	 ",
      "Dr. Tshering Namgyal Gyatso Lepcha	 ",
      " Sr. Superintendent of Police	",
      " 03595-263726, spsouth@sikkimpolice.nic.in",
    ],
    [
      "6",
      "Representative of NGO involved in Youth Activity	",
      " Ms. Saraswati Rai	",
      " President, Voice	",
      " 9647961138, saraswatihomosapien@gmail.com",
    ],
    [
      "7",
      "Representative of Parents	 ",
      "Mrs. Ongchen Bhutia	 ",
      "Parents ",
      "9083106217",
    ],
    [
      "8",
      "Representative of Parents	",
      "Mrs. Alamara Khatoon Ansari	 ",
      " Parents",
      " 7076583364",
    ],
    [
      "8",
      " Representative of Student	",
      " Ms. Nikita Chettri	",
      " Students",
      " 7679318699",
    ],
    [
      "9",
      "Representative of Student	",
      " Ms. Shahin Akhtari Ansari	",
      "Students ",
      "9083317648 ",
    ],
    [
      "10",
      "Representative of Local Media	 ",
      " Mr. Anish Pradhan	",
      "Local Media, Reporter, Fastest Fast Sikkim	 ",
      " 7047082110, anishpradhan707@gmail.com",
    ],
  ];

  const squadMembers = [
    [
      "1",
      "Representative Of Teaching Staff",
      "Sweety, Assistant Professor",
      "sweetympharmcology@gmail.com, 9999389921",
    ],
    [
      "2",
      "Representative Of Non-Teaching Staff",
      "Vikash Yadav, Manager Administration, ABVSU",
      "suvikash4591@gmail.com, 8076939777",
    ],
    [
      "3",
      "Representative Of Non-Teaching Staff",
      "Ms. Rabina Chettri, Program Manager, ABVSU",
      "programmanagerABVSU@gmail.com, 7584905374",
    ],
    [
      "4",
      "Representative Of Non-Teaching Staff",
      "Bishal Basnett, System Administrator, ABVSU",
      "bishalchettri1590@gmail.com, 7584937139",
    ],
    [
      "5",
      "Representative Of Non-Teaching Staff",
      "Geeta Rai, Admin cum Office Executive",
      "7318906324",
    ],
    [
      "6",
      "Representative Of Non-Teaching Staff",
      "Kushal Gurung, Admin cum Office Executive",
      "7431957544",
    ],
  ];

  return (
    <div className="md:text-left text-center mx-4 md:mx-10">
      <div className="mt-7">
        <h2 className="font-bold text-2xl text-[#003262]">
          Ref.No: ABVSU/RO/2024/013 Date: 14th June 2024
        </h2>
        <h1 className="font-bold text-2xl text-[#003262] mt-3">Notification</h1>

        <p className="mt-6">
          <strong className="text-[#003262]">Subject:</strong> Constitution of Anti-ragging Committee, Atal
          Bihari Vajapayee Skill University (ABVSU) – Namchi, South Sikkim reg.
        </p>

        <p className="mt-10 text-justify">
          The ABVSU, Sikkim has constituted the Anti-Ragging Committee for the
          Academic Year of the Campus as per the clause 6.3 (a) of UGC
          Regulations on Curbing the Menace of Ragging in Higher Education,
          2009. Following are the members of the Anti-Ragging Committee:
        </p>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-[#003262] text-white text-center">
              <th className="border border-white px-4 py-2">Sr. No.</th>
              <th className="border border-white px-4 py-2">Composition</th>
              <th className="border border-white px-4 py-2">Name</th>
              <th className="border border-white px-4 py-2">Designation</th>
              <th className="border border-white px-4 py-2">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {committeeMembers.map((row, index) => (
              <tr key={index} className="text-center">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className="border border-gray-400 px-4 py-2 text-left"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <p>The tenure of the Committee will be 1 year.</p>
        <p className="mt-8 text-[#003262] font-bold">
          Registrar, Atal Bihari Vajapyaee
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-2xl text-[#003262]">
          Ref: ABVSU/RO/2024/014 Date: 14th June 2024
        </h2>
        <h2 className="mt-3 font-bold text-[#003262] text-xl">
          Anti-Ragging Squad
        </h2>
        <p className="text-left">
          The following members have been selected to the Anti-Ragging squad of
          the University to curb the menace of ragging in and around the Campus:
        </p>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-[#003262] text-white text-center">
              <th className="border border-white px-4 py-2">Sr. No.</th>
              <th className="border border-white px-4 py-2">Composition</th>
              <th className="border border-white px-4 py-2">
                Name & Designation
              </th>
              <th className="border border-gray-400 px-4 py-2">
                E-mail ID & Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {squadMembers.map((row, index) => (
              <tr key={index} className="text-center">
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className="border border-gray-400 px-4 py-2 text-left"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <h2>The tenure of the Committee will be 1 year.</h2>
        <p className="font-bold text-[#003262]">Registrar, Atal Bihari Vajapayee Skill University</p>
      </div>
    </div>
  );
};

export default AntiRaggingCommittee;
