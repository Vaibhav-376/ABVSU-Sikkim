"use client";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";

const FaqsList = () => {
  const faqData = [
    {
      question: "What is ABVSU Sikkim?",
      answer:
        "ABVSU Sikkim is a premier university dedicated to providing quality education, research opportunities, and skill development for students across various disciplines.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "You can apply for admission through the university's official website by filling out the online application form and submitting the required documents before the deadline.",
    },
    {
      question: "What courses does the university offer?",
      answer:
        "ABVSU Sikkim offers a wide range of undergraduate, postgraduate, and doctoral programs in fields such as Science, Arts, Commerce, Engineering, and Management.",
    },
    {
      question: "How can I contact the university?",
      answer:
        "You can reach us via email or phone. Our campus is located at, Sikkim. Visit our contact page for more details.",
    },
    {
      question: "Does the university provide hostel facilities?",
      answer:
        "Yes, ABVSU Sikkim provides well-equipped hostel facilities for both boys and girls, ensuring a safe and comfortable stay for students.",
    },
    {
      question: "Are there any scholarship programs available?",
      answer:
        "Yes, the university offers various scholarships and financial aid programs for meritorious and deserving students. Check our website for eligibility and application details.",
    },
  ];


  return (
    <>
      <div className="container mx-auto mt-10 p-6 pb-20">
        <motion.h2
          className="w-full py-5 text-3xl text-black font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className=""
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 w-full md:w-[70vw] mx-auto">
            {faqData.map((faq, index) => (
              <Disclosure
                key={index}
                as="div"
                className="border-b border-gray-300"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between items-center w-full p-4 text-left text-md font-medium text-black focus:outline-none">
                      <span>{faq.question}</span>
                      {open ? (
                        <FaChevronUp className="h-6 w-6 text-gray-600" />
                      ) : (
                        <FaChevronDown className="h-6 w-6 text-gray-600" />
                      )}
                    </Disclosure.Button>

                    {/* Animate FAQ Answer Panel with Framer Motion */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: open ? 1 : 0,
                        height: open ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Disclosure.Panel className="p-4 text-gray-700 bg-gray-50">
                        {faq.answer}
                      </Disclosure.Panel>
                    </motion.div>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FaqsList;
