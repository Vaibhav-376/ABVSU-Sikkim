export default function GoverningBody() {
  return (
    <div className="container mx-auto px-6 py-10 max-w-6xl">
      <div className="">
        <h2 className=" text-3xl font-bold text-[#003262]">Authorities of ABVSU</h2>
        <p className="text-lg mb-4">The following shall be the authorities of the university:</p>

        {/* Governing Body */}
        <section className="mb-8">
          <h3 className=" text-3xl font-semibold mb-3">The Governing Body</h3>
          <p className="py-2">The Governing Body shall have the following members:</p>
          <ul className="list-inside  text-sm border border-gray-300 divide-y divide-gray-300">
            <li className="p-2">The Chancellor</li>
            <li className="p-2">The Vice-Chancellor</li>
            <li className="p-2">The Secretary to the Department of Sikkim in the Education Department or their nominee</li>
            <li className="p-2">5 (five) persons nominated by the sponsoring body, out of which 2 (two) shall be eminent educationists/Skill Development Experts</li>
            <li className="p-2">One expert of finance, nominated by the Chancellor</li>
          </ul>

          <p className="mt-3 py-2">The Governing Body shall be the supreme authority and principal governing body of the university. It shall have the following powers:</p>
          <ul className="list-inside text-sm border border-gray-300 divide-y divide-gray-300">
            <li className="p-2">To provide general superintendence and directions and to control the functioning of the University</li>
            <li className="p-2">To review the decisions of other authorities of the University</li>
            <li className="p-2">To approve the budget and annual report of the University</li>
            <li className="p-2">To lay down the extensive policies to be followed by the University</li>
            <li className="p-2">To recommend to the sponsoring body the dissolution of the University if necessary</li>
            <li className="p-2">Such other powers as may be specified by the statutes</li>
          </ul>
          <p className="mt-3">The Governing Body shall meet at least 3 (three) times in a calendar year. The quorum of the meeting shall be 2/3 of the members.</p>
        </section>

        {/* Board of Management */}
        <section className="mb-8">
          <h3 className=" text-3xl font-semibold mb-3">The Board of Management</h3>
          <p className="py-2">The Board of Management shall consist of the following members:</p>
          <ul className="list-inside text-sm border border-gray-300 divide-y divide-gray-300">
            <li className="p-2">The Vice-Chancellor</li>
            <li className="p-2">The Secretary to the Government of Sikkim in the Education Department or their nominee</li>
            <li className="p-2">2 members of the Governing Body, nominated by the sponsoring body</li>
            <li className="p-2">3 persons, who are not members of the Governing Body, nominated by the sponsoring body</li>
            <li className="p-2">3 persons from amongst the teachers, nominated by the sponsoring body</li>
            <li className="p-2">2 teachers, nominated by the Vice-Chancellor</li>
          </ul>
          <p className="mt-3 py-3">The Vice-Chancellor shall be the chairperson of the Board of Management. The powers and functions of the Board of Management shall be such as may be specified by the Statutes.</p>
          <p>The quorum for the meeting of the Board of Management shall be at least 2/3 of the members. The Secretary to the Government, Education Department, Sikkim, or in their absence, the Director of Higher Education, shall be present in each meeting where decisions on government policies or instructions are to be taken.</p>
        </section>

        {/* Academic Council */}
        <section className="mb-8">
          <h3 className=" text-3xl font-semibold mb-3">The Academic Council</h3>
          <p className="py-2">The Academic Council shall consist of the Vice-Chancellor and such members as may be specified by the Statutes. The Vice-Chancellor shall be the chairperson of the Academic Council.</p>
          <p>The Academic Council shall be the principal academic body of the university and shall coordinate and exercise general supervision over the academic policies of the university.</p>
          <p>The quorum for meetings of the Academic Council shall be such as may be specified by the statutes.</p>
        </section>

        {/* Finance Committee */}
        <section className="mb-8">
          <h3 className=" text-3xl font-semibold mb-3">The Finance Committee</h3>
          <p>The Finance Committee shall be the principal financial body of the University to take care of financial matters. The constitution, powers, and functions of the Finance Committee shall be such as may be prescribed.</p>
        </section>

        {/* Planning Board */}
        <section className="mb-8">
          <h3 className=" text-3xl font-semibold mb-3">The Planning Board</h3>
          <p>The Planning Board shall be the principal planning body of the University and shall ensure that the infrastructure and academic support system meet the norms of the University Grants Commission or the respective councils.</p>
          <p>The constitution of the Planning Board, term of office of its members, and its powers and functions shall be such as may be prescribed.</p>
        </section>

        {/* Other Authorities */}
        <section>
          <h3 className=" text-3xl font-semibold mb-3">Other Authorities</h3>
          <p>The constitution, powers, and functions of other authorities of the university shall be such as may be prescribed.</p>
        </section>
      </div>
    </div>
  );
}
