import React from "react";
import img from "@/public/images/accreditation.jpg";
import Image from "next/image";
const Accreditation = () => {
  return (
    <section>
      <div className="container px-4 md:px-0 mx-auto py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-2/3 flex flex-col gap-4 text-justify">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003262]">
                Evaluating the Quality of Higher Education Institutions and
                Programs
              </h2>
              <p>
                The quality of higher education plays a crucial role in shaping
                the academic and professional landscape of a nation. A
                structured accreditation framework ensures that universities
                uphold high educational standards, fostering excellence in
                teaching, research, and student development.
              </p>
              <p>
                Independent accreditation bodies evaluate key aspects such as
                faculty expertise, infrastructure, curriculum relevance, and
                student success metrics. These assessments promote consistency,
                transparency, and accountability across institutions, ensuring a
                high-quality academic experience.
              </p>
              <p>
                For students, accreditation provides confidence that their
                institution meets global academic benchmarks, enhancing their
                career prospects and recognition. Employers also benefit from
                hiring graduates with skills validated through accredited
                programs.
              </p>
              <p>
                Ongoing evaluations and enhancements ensure that educational
                offerings remain aligned with industry trends and global
                advancements, helping institutions stay competitive in the
                ever-evolving academic landscape.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src={img}
                width={400}
                height={250}
                alt="Our Work"
                className="w-full max-w-[400px] h-auto rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="col-lg-6 text-center"></div>
        </div>
      </div>

      <div className="container px-4 md:px-0 mx-auto flex flex-col max-w-7xl py-10 gap-3">
        <h3 className="text-2xl md:text-3xl font-bold text-[#003262]">Certification & Recognition </h3>
        <p>
          Certification and recognition are vital in upholding the quality and
          excellence of educational institutions. At Atal Bihari Vajpayee Skill
          University (ABVSU) Sikkim, these processes serve as a testament to
          our commitment to providing high-quality education and skill-based
          training, ensuring credibility and academic integrity.
        </p>
        <p>
          {`  ABVSU is accredited by national and international bodies that assess
          key factors such as curriculum relevance, faculty expertise, research
          contributions, infrastructure, and student outcomes. These
          recognitions not only strengthen the university’s reputation but also
          guarantee that our students receive education aligned with global
          standards.`}
        </p>

        <p>
          Certification plays a crucial role in maintaining educational
          excellence, institutional efficiency, and continuous progress. It
          enhances career opportunities for students, as employers highly value
          degrees from accredited institutions. Additionally, recognized
          certifications provide students with better prospects for higher
          education at prestigious universities worldwide.
        </p>
      </div>
    </section>
  );
};

export default Accreditation;
