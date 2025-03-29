"use client";
import NewsAndNotifications from "@/components/landing-page/NewsAndNotifications";
import CoursesList from "@/components/landing-page/ourCourses";
import { socialLinks } from "@/components/layout/Footer";
import Link from "next/link";
import BannerSlider from "@/components/common/BannersSlides";
import NoticeBoard from "@/components/landing-page/NoticeBoard";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-us/ContactForm";
import FaqsList from "@/components/faqs/FaqList";

export default function Home() {
  return (
    <>
      {/* -------------- Banner Section -------------------------- */}

      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 text-white z-20">
        {socialLinks?.map((item, i) => (
          <Link href={item.link} key={i} target="_blank">
            <div className="bg-white h-14 w-14 shadow-xl rounded-full flex items-center justify-center hover:bg-blue-100  transition">
              {item?.icon}
            </div>
          </Link>
        ))}
      </div>

      <section className="py-1">
        <BannerSlider />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-8 max-w-5xl text-center">
          <h3 className="text-3xl font-bold"> About ABVSU</h3>
          <p>
            {`Atal Bihari Vajpayee Skill University (ABVSU), Sikkim is a premier institution dedicated to skill development, vocational training, and industry-driven education. With a focus on practical learning and innovation, ABVSU aims to bridge the gap between academia and industry, equipping students with the expertise needed for career growth and entrepreneurship. Through cutting-edge programs, modern infrastructure, and strong industry collaborations, the university plays a key role in fostering a skilled workforce for the future.`}
          </p>

        </div>
      </section>

      <section className="py-16 bg-[#002E5B] text-white ">
        <NoticeBoard />
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4  md:px-8">
        <CoursesList />
      </section>

      {/* ---------------- news and notifications ------------------------ */}
      <section className="bg-[#002E5B] py-10 px-4 md:px-8" id="news">
        <NewsAndNotifications />
      </section>
      {/* ----------------- testimonials -------------------- */}
      {/* <section className="bg-green-50 py-10 px-4 md:px-8 " id="testimonial">
        <Testimonials />
      </section> */}

      {/* -------------------- our team------------------------ */}
      {/* <section className="px-4 md:px-8 py-20">
        <OurTeam />
      </section> */}

      {/* Contact Us */}
      {/* <section className=" py-10 px-4 md:px-8">
      <h3 className="text-3xl font-bold container mx-auto"> Contact Us</h3>

        <div className="container mx-auto flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 my-auto">
            <motion.img
              src="/images/contact.png"
              alt="About Image"
              className=" w-full h-96"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 100 }}

              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* --------------------------- Faqs ------------------------- */}
      
      <section>
        <FaqsList/>
      </section>

    </>
  );
}
