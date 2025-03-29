import React from "react";
import { PiArrowFatLineDownFill } from "react-icons/pi";

const AdmissionProcess = () => {
  const admissionProcess = [
    {
      id: 1,
      Steps: "Step 1",
      heading: "Explore Our Programs",
      description:
        "Browse our diverse programs to find the one that aligns with your interests and career goals. Each program page provides detailed information about the curriculum, faculty, and potential career paths.",
    },
    {
      id: 2,
      Steps: "Step 2",
      heading: "Prepare Your Application",
      description:
        "Gather all necessary documents, including any test scores required for your chosen program. Ensure you meet the specific program requirements.",
    },
    {
      id: 3,
      Steps: "Step 3",
      heading: "Submit Your Application",
      description:
        "Complete the online application form available on our website. Ensure all information is accurate and complete before submission. Our secure and user-friendly application portal makes it easy. We also support physical application submission for nearby residents. Please note: Application or registration fees may apply, and vary depending on the program.",
    },
    {
      id: 4,
      Steps: "Step 4",
      heading: "Application Review",
      description:
        "Our admissions team will carefully review your application. This process may take a few weeks, and you might be contacted for additional information if needed.",
    },
    {
      id: 5,
      Steps: "Step 5",
      heading: "Decision Notification",
      description:
        "You'll receive an official decision via email or post. If accepted, you'll receive further instructions on enrollment confirmation and preparing for your first semester or year.",
    },
    {
      id: 6,
      Steps: "Step 6",
      heading: "Enrollment and Orientation",
      description:
        "Upon acceptance, follow the instructions to confirm your enrollment, which may include submitting fees and other relevant documents. Participate in our orientation program designed to ease your transition into our academic community.",
    },
    {
      id: 7,
      Steps: "Step 7",
      heading: "Start Your Journey",
      description:
        "Begin your educational journey with us. Attend classes, engage with faculty and peers, and take full advantage of the resources and opportunies available to you.",
    },
  ];
  return (
    <section className="flex flex-col items-center text-center px-4">
      <div className="w-full">
        <h2 className="font-bold text-[#003262] text-2xl md:text-3xl">
          Admission Process
        </h2>
        <p className="text-lg">
          Our streamlined and user-friendly process ensures you can focus on
          finding the perfect program.
        </p>
      </div>
      {admissionProcess.map((items, index) => (
        <div
          className="rounded-xl border-2 border-[#003262] mx-auto h-auto flex flex-col justify-center items-center w-full max-w-md mt-10 p-4"
          key={items.id}
        >
          <h3 className="font-bold text-2xl text-[#003262]">{items.Steps}</h3>
          <h2 className="font-serif font-bold text-2xl text-[#003262] md:text-3xl">
            {items.heading}
          </h2>
          <p className="mt-3">{items.description}</p>
          {index !== admissionProcess.length - 1 && (
            <div className="mt-6">
              <PiArrowFatLineDownFill size={45} />
            </div>
          )}
        </div>
      ))}

      <div className="">
        <h2 className="text-left font-bold text-xl mt-6 text-[#003262]">Need Assistance</h2>
        <p>
          If you have any questions or need assistance at any step of te
          admission process, pleased do not hesitate to contact our admission
          office here
        </p>
      </div>
    </section>
  );
};

export default AdmissionProcess;
