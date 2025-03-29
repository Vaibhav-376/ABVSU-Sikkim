"use client"
import React, { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }
    setMessage("✅ Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-10 px-6  min-h-[400px] ">
      <h2 className="text-3xl font-bold theme-clr mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-700 max-w-5xl mx-auto mb-6">
        Stay ahead with the latest updates, news, and exclusive insights! 
        Get notified about upcoming events, courses, and important announcements.
        Subscribe today and never miss an update.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center gap-4"
      >
        <div className="relative">
          <FiMail className="absolute left-3 top-3 text-gray-500 text-lg" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:to-blue-100 focus:ring focus:ring-blue-200 outline-none w-80"
            required
          />
        </div>
        <button
          type="submit"
          className="theme-bg text-white px-6 py-2 flex items-center gap-2 rounded-md hover:shadow-md transition duration-300"
        >
          Subscribe <FiSend />
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}

      <p className="mt-6 text-gray-500 text-sm">
        © {currentYear} All Rights Reserved.
      </p>
    </section>
  );
};

export default Newsletter;
