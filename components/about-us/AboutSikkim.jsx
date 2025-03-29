"use client";
import React from "react";
import Image from "next/image";
import aboutImg from "@/public/images/about-sikkim/about.webp";
import cultureImg from "@/public/images/about-sikkim/culture.jpg";
import foodImg from "@/public/images/about-sikkim/food.webp";
import natureImg from "@/public/images/about-sikkim/tourism.jpg";
import HtmlContent from "../common/HtmlContent";

const sikkimSections = [
  {
    title: "A Land of Rich Culture and Natural Beauty",
    image: aboutImg,
    description: `
      <p style="margin-bottom: 1rem;">
        Sikkim, nestled in the Eastern Himalayas, is a land of breathtaking landscapes, rolling mountains, and a rich cultural heritage. Home to diverse ethnic communities like the Lepchas, Bhutias, and Nepalis, Sikkim embraces a harmonious blend of traditions, languages, and festivals.
      </p>
    
      <p style="margin-bottom: 1rem;">
        The state's scenic beauty is highlighted by the majestic Kanchenjunga, lush valleys, serene monasteries, and cascading waterfalls. Sikkim is renowned for its vibrant Buddhist culture, colorful prayer flags, and spiritual centers like Rumtek Monastery and Pemayangtse Monastery.
      </p>
    
      <p style="margin-bottom: 1rem;">
        Despite being one of India’s smallest states, Sikkim is known for its commitment to organic farming, sustainable tourism, and conservation of biodiversity. With its pristine nature, rich traditions, and warm hospitality, Sikkim offers an unforgettable experience to visitors.
      </p>
    `,
  },
  {
    title: "Culture and Traditions",
    image: cultureImg,
    description: `
    <div style="line-height: 1.8;">
      <p style="margin-bottom: 1rem;">
        Sikkim’s cultural fabric is a beautiful blend of its indigenous communities, including <strong>Lepchas, Bhutias, and Nepalis</strong>. Each group has preserved its unique traditions, contributing to the state's vibrant heritage.
      </p>
  
      <p style="margin-bottom: 1rem;">
        <strong>Dance and music</strong> are integral to Sikkimese culture. Traditional performances like <em>Cham (mask dance), Maruni, and Tamang Selo</em> are deeply rooted in spirituality and folklore. Instruments like the <strong>Dhyangro (drum), Tungna (string instrument), and Flute</strong> accompany these dances, creating an enchanting atmosphere.
      </p>
  
      <p style="margin-bottom: 1rem;">
        Festivals in Sikkim are grand celebrations of spirituality and joy. Some of the most prominent ones include:
      </p>
  
      <ul style="margin-left: 20px; list-style-type: disc;">
        <li style="margin-bottom: 0.5rem;"><strong>Losar</strong> - The Tibetan New Year celebrated with traditional feasts and performances.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Pang Lhabsol</strong> - A festival dedicated to the guardian deity of Kanchenjunga.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Dasain & Tihar</strong> - Major Hindu festivals celebrated with prayers, lights, and feasts.</li>
      </ul>
  
      <p style="margin-top: 1rem;">
        Traditional attire such as the <strong>Bakhu, Kho, and Daura Suruwal</strong> reflect the diverse craftsmanship of Sikkim’s communities. Women adorn exquisite jewelry, while men wear traditional sashes, preserving their rich heritage.
      </p>
    </div>
  `,
  },
  {
    title: "Culinary Delights",
    image: foodImg,
    description: `
    <div style="line-height: 1.8;">
      <p style="margin-bottom: 1rem;">
        Sikkim’s cuisine is a unique fusion of Tibetan, Nepalese, and Bhutia flavors, featuring fresh organic ingredients and simple cooking techniques.
      </p>
  
      <p style="margin-bottom: 1rem;">
        The use of <strong>fermented foods</strong> like gundruk (fermented leafy greens) and chhurpi (fermented cheese) adds distinct flavors to the cuisine. Rice, noodles, and dumplings are staple foods in Sikkimese households.
      </p>
  
      <h4 style="margin-top: 1rem; font-weight: bold;">
        Popular Dishes of Sikkim:
      </h4>
      <ul style="margin-left: 20px; list-style-type: disc;">
        <li style="margin-bottom: 0.5rem;"><strong>Momos</strong> - Steamed dumplings filled with meat or vegetables, served with spicy chutney.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Thukpa</strong> - A hearty noodle soup with vegetables and meat, perfect for cold weather.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Phagshapa</strong> - A spicy pork dish cooked with radish and dried chilies.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Sel Roti</strong> - A traditional Nepalese rice doughnut enjoyed during festivals.</li>
      </ul>
  
      <p style="margin-top: 1rem;">
        Sikkim’s culinary scene is a perfect blend of taste and health, emphasizing organic and locally sourced ingredients.
      </p>
    </div>
  `,
  },
  {
    title: "Diversity and Natural Beauty",
    image: natureImg,
    description: `
  <div style="line-height: 1.8;">
    <p style="margin-bottom: 1rem;">
      Sikkim is blessed with <strong>stunning biodiversity</strong>, offering an abundance of forests, valleys, rivers, and high-altitude lakes. The state is a paradise for nature enthusiasts and adventure seekers alike.
    </p>

    <p style="margin-bottom: 1rem;">
      Some of the notable natural reserves include:
    </p>

    <ul style="margin-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 0.5rem;"><strong>Khangchendzonga National Park</strong> - A UNESCO World Heritage Site home to rare species like the Red Panda and Snow Leopard.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Fambong Lho Wildlife Sanctuary</strong> - A haven for diverse bird species and rich flora.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Kyongnosla Alpine Sanctuary</strong> - Known for its breathtaking views and medicinal plants.</li>
    </ul>

    <h4 style="margin-top: 1rem; font-weight: bold;">
      Must-Visit Tourist Attractions:
    </h4>
    <p style="margin-bottom: 1rem;">
      Sikkim is home to some of the most picturesque and culturally significant sites in India.
    </p>

    <ul style="margin-left: 20px; list-style-type: disc;">
      <li style="margin-bottom: 0.5rem;"><strong>Tsomgo Lake</strong> - A stunning glacial lake surrounded by mountains.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Rumtek Monastery</strong> - One of the most significant Buddhist monasteries in India.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Yumthang Valley</strong> - Known as the Valley of Flowers, famous for its rhododendron blooms.</li>
      <li style="margin-bottom: 0.5rem;"><strong>Gurudongmar Lake</strong> - One of the highest lakes in the world, revered by Buddhists and Hindus.</li>
    </ul>

    <p style="margin-top: 1rem;">
      With its mix of <strong>natural wonders, adventure, and cultural heritage</strong>, Sikkim is a dream destination for travelers.
    </p>
  </div>
`,
  },
];

const AboutSikkim = () => {
  return (
    <div className="flex flex-col gap-6 py-10">
      {sikkimSections.map((section, index) => (
        <div
          key={index}
          className={` py-10 ${
            index % 2 === 0
              ? "bg-white text-black"
              : "theme-bg w-100vw text-white"
          }`}
        >
          <h3 className="container mx-auto py-3 px-5 text-3xl font-bold">{section.title}</h3>
          <div className="flex  container mx-auto px-5 ">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-2/3 text-justify">
                <HtmlContent
                  content={section.description}
                  className={index % 2 === 0 ? "text-black" : "text-white"}
                />
              </div>

              <div className="w-full md:w-1/3">
                <Image
                  src={section.image}
                  width={400}
                  height={250}
                  alt={section.title}
                  className="w-full max-h-[400px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSikkim;
