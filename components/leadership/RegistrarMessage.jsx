import React from "react";

const RegistrarMessage = () => {
  return (
    <div className=" py-10 px-5 md:px-10 rounded-lg shadow-md">
      <div className="md:flex md:items-start max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="md:w-3/4 w-full text-justify">
          <h2 className="text-3xl font-bold text-[#003262] mb-4">
            "Wisdom and action together have the power to change the world."
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am delighted to extend my warmest greetings to all of you as the Registrar of 
            <span className="font-semibold text-[#003262]"> Atal Bihari Vajpayee Skill University (ABVSU).</span> 
            It is an honor to be a part of this esteemed University, and I am committed to ensuring that our institution becomes a beacon of knowledge, innovation, and excellence.
          </p>

          {/* Message Content */}
          <div className="mt-6 space-y-5 text-gray-700 text-md leading-relaxed">
            <p>
              As the Registrar, my primary focus is to facilitate and enhance the academic experience for all members of the ABVSU family. Our university is dedicated to providing a nurturing and stimulating environment that fosters holistic development and empowers students to become future-ready professionals.
            </p>
            <p>
              To all students, I extend a heartfelt welcome. Your journey at ABVSU is transformative, where you will acquire not just knowledge but also skills and values that will shape your personal and professional lives. Engage in extracurricular activities and take part in research and innovation initiatives.
            </p>
            <p>
              Our esteemed faculty members are the pillars of academic excellence at ABVSU. Your dedication to imparting quality education and mentoring students is invaluable in shaping the minds of future leaders and innovators.
            </p>
            <p>
              To our dedicated staff members, your unwavering efforts in ensuring the smooth functioning of the university are deeply appreciated. Your contributions help create a conducive learning environment for all.
            </p>
            <p>
              ABVSU is committed to promoting research and innovation. We encourage interdisciplinary research, collaborations, and partnerships with industries and organizations to create impactful solutions for society.
            </p>
            <p>
              Transparency, accountability, and efficiency are at the heart of our administrative processes. My office is always open to address your queries and concerns, ensuring a seamless experience for students, faculty, and staff.
            </p>
            <p>
              Together, let us embrace integrity, ethics, and social responsibility to build an inclusive campus that celebrates diversity and fosters a sense of belonging.
            </p>
            <p className="font-semibold text-[#003262]">
              I am confident that with our collective efforts, Atal Bihari Vajpayee Skill University will emerge as a hub of excellence in technical education and research.
            </p>
          </div>

          {/* Closing Message */}
          <p className="mt-6 text-lg font-medium text-gray-800">
            I extend my best wishes to all of you for a successful and fulfilling academic year ahead. Let us work together to make ABVSU a place where dreams are nurtured and potentials are realized.
          </p>

          <p className="mt-4 text-lg font-semibold text-[#003262]">Wishing you all a rewarding and enriching academic year!</p>

          {/* Signature */}
          <div className="mt-6 text-[#003262] font-bold">
            <p>With Warm Regards,</p>
            <p>Registrar</p>
            <p>Atal Bihari Vajpayee Skill University</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/4 w-full flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="/images/user.png"
            alt="Registrar"
            className="w-64 h-64 object-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrarMessage;
