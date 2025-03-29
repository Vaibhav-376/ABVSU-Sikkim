// Footer.js
import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import Link from "next/link";
import { CMP_TITLE } from "@/lib/constants";
import Logo from "../common/Logo";

export const socialLinks = [
  {
    icon: <FaFacebookF size={20} className="text-blue-600" />,
    link: "https://www.facebook.com",
    width: 10,
  },
  {
    icon: <FaInstagram className="text-pink-500" size={20} />,
    link: "https://www.instagram.com",
    width: 14,
  },
  {
    icon: <FaTwitter className="text-blue-400" size={20} />,
    link: "https://www.twitter.com",
    width: 14,
  },
];

const footerLinks = [
  { name: "About", url: "/about/about-us" },
  { name: "Faqs", url: "/faqs" },
  { name: "Contact us", url: "/contact-us" },
  { name: "Gallery", url: "/gallery" },
  { name: "Apply for admission", url: "#" },
];

const Footer = () => {
  return (
    <div className=" bg-gray-50">
      <div className="flex flex-row flex-wrap gap-4 w-full border-b pt-2 container mx-auto px-6 justify-center ">
        {footerLinks?.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className="text-black border-r-2 pr-5 text-base font-normal mb-3 space-links"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <div className="flex flex-col gap-3 justify-center items-center">
          <Logo />

          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="text-md font-medium  text-center w-full md:w-2/3 ">
              <strong> {CMP_TITLE} </strong> empowers students through accessible, high-quality education, research, and skill development, fostering innovation, inclusivity, and academic excellence.
            </h3>
            <div className="flex flex-row gap-3 text-sm ">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <a
                  href="mailto:skillscentres@igcsm.in"
                  className="text-blue-600 hover:theme-clr"
                >
                  skillscentres@igcsm.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <a
                  href="tel:+919990617617"
                  className="text-blue-600 hover:theme-clr"
                >
                  +91-9990-617-617
                </a>
                ,
                <a
                  href="tel:+918860094657"
                  className="text-blue-600 hover:theme-clr"
                >
                  +91-8860-094-657
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>
                  IGCSM, 36B/1, Gali Number 1, near Kalkaji Depot, Govindpuri,
                  New Delhi, Delhi 110019
                </span>
              </div>
            </div>

            <div className="flex gap-4 text-black">
              {socialLinks?.map((item, i) => (
                <Link href={item.link} key={i} target="">
                  <div className=" h-12 w-12  rounded-full flex items-center justify-center hover:theme-clr">
                    {item?.icon}
                  </div>
                </Link>
              ))}
            </div>

            <div className="w-1/2 py-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3505.0691578039155!2d77.26317737416439!3d28.537640938385884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce3273585d443%3A0xc7a7216cc048015!2sIGCSM%2C%2036B%2F1%2C%20Gali%20Number%201%2C%20near%20Kalkaji%20Depot%2C%20Govindpuri%2C%20New%20Delhi%2C%20Delhi%20110019!3m2!1d28.5373003!2d77.2670435!5e0!3m2!1sen!2sin!4v1740777640338!5m2!1sen!2sin"
                className="h-[200px] w-full border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="py-3 theme-bg  ">
        <div className="container mx-auto md:flex items-center justify-between  px-4 sm:px-6 lg:px-8  ">

          <h4 className="text-white text-sm text-center md:text-start font-normal">
            @2025.{CMP_TITLE}. All rights reserved
          </h4>
          <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
            <h4 className="text-white text-sm font-normal">
              <Link href="/privacy-policy" target="">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-white opacity-25 w-0.5"></div>
            <h4 className="text-white text-sm font-normal">
              <Link href="/terms-conditions" target="">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
