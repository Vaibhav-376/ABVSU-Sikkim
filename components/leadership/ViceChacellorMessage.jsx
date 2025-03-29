import { TITLE_FULL } from "@/lib/constants";
import React from "react";

const ViceChancellorMessage = () => {
  return (
    <div className="md:flex md:items-start mt-10 md:mx-10 mx-5 py-10">
      <div className="md:w-1/4 w-full flex justify-center md:justify-start mb-5 md:mb-0">
        <img
          src="/images/user.png"
          alt="Vice Chancellor"
          className="w-72 h-72 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      <div className="md:w-3/4 w-full  text-justify">
        <div className="text-2xl">
          <h2 className="font-semibold">
            "Learning is the Key that Unlocks the Door to Changing the World." 
            <span className="font-bold text-[#003262]"> - Dr.(Prof.) Swami Prasad Sinha</span>
          </h2>
        </div>
        <p className="mt-4">
          I am thrilled and honoured to extend my heartfelt greetings as the
          Vice-Chancellor of Atal Bihari Vajpayee Skill University (ABVSU). As
          we embark on this exciting journey of knowledge, innovation, and
          growth, I am filled with a profound sense of responsibility and
          enthusiasm.
        </p>
        <p className="mt-4">
          ABVSU represents a new dawn in the realm of technical education, and I
          am humbled to be a part of this esteemed institution. Our university’s
          foundation rests on the principles of academic excellence, research
          prowess, and a commitment to nurturing well-rounded individuals who
          will shape the future.
        </p>
        <p className="mt-4">
          To all our students, I offer my warmest welcome. Your presence on our
          campus adds vibrancy and diversity to our academic community. I urge
          you to be passionate about your studies, embrace curiosity, and
          challenge conventional boundaries. At {TITLE_FULL}, we aim to empower you with the knowledge, skills, and
          values that will enable you to make meaningful contributions to
          society.
        </p>
        <p className="mt-4">
          To our distinguished faculty members, I express my deep appreciation
          for your dedication and expertise. Your guidance and mentorship are
          crucial in shaping the next generation of thought leaders and
          innovators. Let us collectively inspire a love for learning, instill a
          spirit of inquiry, and foster an environment of collaboration and
          inclusivity.
        </p>
        <p className="mt-4">
          Our staff members form the backbone of the university, ensuring that
          our administrative and support systems function smoothly. I extend my
          gratitude for your tireless efforts and commitment to creating a
          conducive environment for all stakeholders. ABVSU will be a hub of
          research and innovation, fostering a culture that encourages original
          thinking and problem-solving.
        </p>
        <p className="mt-4">
          In our pursuit of academic excellence, we shall remain steadfast in
          upholding ethical principles and values. Integrity, honesty, and
          accountability will be the pillars upon which our university stands
          tall.
        </p>
        <p className="mt-4">
          As Vice-Chancellor, my vision is to see {TITLE_FULL} as a beacon of learning, transforming lives and
          contributing positively to society. I am committed to creating an
          environment that nurtures creativity, empowers dreams, and provides
          the tools for success.
        </p>
        <p className="mt-4">
          I am excited to witness the journey of each one of you as you unfold
          your potential and chase your dreams at Atal Bihari Vajpayee Skill
          University.
        </p>
        <p className="mt-4">Wishing you all a rewarding and enriching academic year!</p>
        <div className="mt-4 font-bold text-[#003262]">
          <p>With Warm Regards,</p>
          <p>Dr. (Prof.) Swami Prasad Sinha</p>
          <p>Vice-Chancellor</p>
          <p>{TITLE_FULL}</p>
        </div>
      </div>
    </div>
  );
};

export default ViceChancellorMessage;