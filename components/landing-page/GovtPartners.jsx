import Image from "next/image";
import React from "react";
import s5 from "@/public/images/govtTieUps/75th.png";
import aiu from "@/public/images/govtTieUps/aiu.png";
import bharatSkills from "@/public/images/govtTieUps/bharatSkills.png";
import digitalIndia from "@/public/images/govtTieUps/digitalIndia.png";
import g20 from "@/public/images/govtTieUps/g20.png";
import makeInIndia from "@/public/images/govtTieUps/makeInIndia.png";
import nsdc from "@/public/images/govtTieUps/nsdc.png";
import rsldc from "@/public/images/govtTieUps/rsldc.png";
import skillIndia from "@/public/images/govtTieUps/skillIndia.png";
import swachBharat from "@/public/images/govtTieUps/swachBhart.png";
import ugc from "@/public/images/govtTieUps/ugc.png";
import upsdm from "@/public/images/govtTieUps/upsdm.png";
import vocalLocal from "@/public/images/govtTieUps/vocalLocal.png";

const images = [
  { src: s5, alt: "Ecom" },
  { src: aiu, alt: "Amit" },
  { src: bharatSkills, alt: "And Innovation" },
  { src: digitalIndia, alt: "CWES" },
  { src: g20, alt: "GSS Security" },
  { src: makeInIndia, alt: "HCL" },
  { src: nsdc, alt: "JEMS" },
  { src: rsldc, alt: "Nike" },
  { src: skillIndia, alt: "OM Enterprise" },
  { src: swachBharat, alt: "Propshop" },
  { src: ugc, alt: "Woodland" },
  { src: upsdm, alt: "Raymond" },
  { src: vocalLocal, alt: "VRPN" },
];

const GovtPartners = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white container px-4 md:px-0 mx-auto py-10 max-w-7xl">
      <div className="container mx-auto px-3">
        <h2 className="font-bold text-2xl md:text-3xl text-left mb-12 text-transparent bg-clip-text bg-[#003262]">
          Our Goverment Tie-Ups
        </h2>

        <div className="relative max-w-7xl mx-auto">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div className="group overflow-hidden relative">
            <div className="flex animate-scroll-horizontal group-hover:animation-pause space-x-8 py-4">
              {[...images, ...images].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 bg-white rounded-lg shadow-lg shadow-[#003262] hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
                  style={{ width: "200px", height: "100px" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={120}
                    height={60}
                    className="object-contain h-full w-full  hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovtPartners;
