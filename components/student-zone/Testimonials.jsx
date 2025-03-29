import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Vinod Kumar",
      description:
        "Thanks to the placement training, I gained confidence and the skills needed to excel in interviews. It’s been a life-changing experience!",
      image: "https://via.placeholder.com/100" 
    },
    {
      id: 2,
      name: "Ankita Pathak",
      description:
        "The support from the T&P Cell throughout the recruitment process was incredible. It helped me secure my first job and set me on the right path.",
      image: "https://via.placeholder.com/100" 
    },
    {
      id: 3,
      name: "Nitika",
      description:
        "With the guidance and preparation I received, I was able to connect with top recruiters and start my professional journey on a high note.",
      image: "https://via.placeholder.com/100" 
    },
    {
      id: 4,
      name: "Kishan Gupta",
      description:
        "The Training & Placement Cell equipped me with the right skills and opportunities, leading to my dream job. I’m grateful for their constant support!",
      image: "https://via.placeholder.com/100" 
    }
  ];

  return (
    <div className="p-6 text-center">
        <h1 className="text-2xl -mt-8 mb-5">Testimonials</h1>
      <h2 className="text-3xl font-bold mb-6">
        Student <span className="text-[#003262]">Say</span> About <span className="text-[#003262]">ABVSU</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full mb-4" />
            </div>
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;