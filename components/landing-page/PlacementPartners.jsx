import Image from "next/image";
import React from "react";
import ecom from "@/public/images/placement-partner/Ecom.png";
import amit from "@/public/images/placement-partner/amit.png";
import andInnovation from "@/public/images/placement-partner/andInnovation.png";
import cwes from "@/public/images/placement-partner/cwes.png";
import gss from "@/public/images/placement-partner/gssSecurity.png";
import hcl from "@/public/images/placement-partner/hcl.png";
import jems from "@/public/images/placement-partner/jems.png";
import nike from "@/public/images/placement-partner/nike.png";
import omEnterpirise from "@/public/images/placement-partner/omEnterprise.png";
import propshop from "@/public/images/placement-partner/propshop.png";
import woodland from "@/public/images/placement-partner/woodland.png";
import raymond from "@/public/images/placement-partner/raymond.png";
import vrpn from "@/public/images/placement-partner/vrpn.png";
import siyaram from "@/public/images/placement-partner/siyaram.png";

const images = [
  { src: ecom, alt: "Ecom" },
  { src: amit, alt: "Amit" },
  { src: andInnovation, alt: "And Innovation" },
  { src: cwes, alt: "CWES" },
  { src: gss, alt: "GSS Security" },
  { src: hcl, alt: "HCL" },
  { src: jems, alt: "JEMS" },
  { src: nike, alt: "Nike" },
  { src: omEnterpirise, alt: "OM Enterprise" },
  { src: propshop, alt: "Propshop" },
  { src: woodland, alt: "Woodland" },
  { src: raymond, alt: "Raymond" },
  { src: vrpn, alt: "VRPN" },
  { src: siyaram, alt: "Siyaram" },
];

const PlacementPartners = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-3">
        <h2 className="font-bold text-2xl md:text-3xl text-left mb-12 text-transparent bg-clip-text bg-[#003262]">
          Our Placement Partners
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
                  style={{ width: '200px', height: '100px' }}
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

export default PlacementPartners;