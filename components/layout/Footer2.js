// Footer.js
import React from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { CMP_TITLE } from "@/lib/constants";
import Logo from "../common/Logo";

export const socialLinks = [
    {
        icon: <FaFacebookF size={20} className="text-blue-600" />,
        link: "https://www.facebook.com",
    },
    {
        icon: <FaInstagram className="text-pink-500" size={20} />,
        link: "https://www.instagram.com",
    },
    {
        icon: <FaTwitter className="text-blue-400" size={20} />,
        link: "https://www.twitter.com",
    },
];

const quickLinks = [
    { name: "About", url: "/about/about-us" },
    { name: "Faqs", url: "/faqs" },
    { name: "Contact us", url: "/contact-us" },
    { name: "Gallery", url: "/gallery" },
    { name: "Apply for admission", url: "#" },
];

const helpfulLinks = [
    { name: "Courses", url: "/courses" },
    { name: "Certifications", url: "/certifications" },
    { name: "Student Login", url: "/login" },
    { name: "Exam Info", url: "/exam-info" },
];

const usefulLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms & Conditions", url: "/terms-conditions" },
    { name: "Support", url: "/support" },
    { name: "Sitemap", url: "/sitemap" },
];

const Footer2 = () => {
    return (
        <div className="bg-[#003262] text-white">
            {/* Links Row */}
            <div className="flex flex-wrap justify-center gap-4 border-b py-4 container mx-auto px-6 ">
                {quickLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className="text-white border-r-2 last:border-none pr-5 text-base font-normal mb-3"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="flex flex-col items-start">
                        <Logo />
                        <p className="text-sm mt-4 text-white">
                            <strong>{CMP_TITLE}</strong> empowers students through accessible, high-quality
                            education, research, and skill development, fostering innovation, inclusivity,
                            and academic excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="text-white hover:text-blue-600">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Helpful Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Helpful Links</h4>
                        <ul className="space-y-2">
                            {helpfulLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="text-white hover:text-blue-600">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-auto mt-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3505.0691578039155!2d77.26317737416439!3d28.537640938385884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce3273585d443%3A0xc7a7216cc048015!2sIGCSM%2C%2036B%2F1%2C%20Gali%20Number%201%2C%20near%20Kalkaji%20Depot%2C%20Govindpuri%2C%20New%20Delhi%2C%20Delhi%20110019!3m2!1d28.5373003!2d77.2670435!5e0!3m2!1sen!2sin!4v1740777640338!5m2!1sen!2sin"
                            className="h-[200px] w-auto border-0"
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 flex flex-col gap-4 items-start md:items-center text-sm text-gray-700">
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-white" />
                        <a href="mailto:skillscentres@igcsm.in" className="text-white hover:underline">
                            skillscentres@igcsm.in
                        </a>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                        <FaPhoneAlt className="text-white" />
                        <a href="tel:+919990617617" className="text-white hover:underline">
                            +91-9990-617-617
                        </a>
                        ,
                        <a href="tel:+918860094657" className="text-white hover:underline">
                            +91-8860-094-657
                        </a>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-white mt-1" />
                        <span className="text-white">
                            IGCSM, 36B/1, Gali Number 1, near Kalkaji Depot, Govindpuri,
                            New Delhi, Delhi 110019
                        </span>
                    </div>

                    <div className="flex gap-4 mt-4">
                        {socialLinks.map((item, i) => (
                            <Link href={item.link} key={i} target="_blank">
                                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-white shadow hover:bg-blue-100 transition-all">
                                    {item.icon}
                                </div>
                            </Link>
                        ))}
                    </div>


                </div>
            </div>


            <div className="py-3 theme-bg">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
                    <h4 className="text-white text-sm text-center md:text-start font-normal">
                        © 2025 {CMP_TITLE}. All rights reserved
                    </h4>
                    <div className="flex gap-5 mt-3 md:mt-0 justify-center md:justify-start">
                        <Link href="/privacy-policy" className="text-white text-sm hover:underline">
                            Privacy Policy
                        </Link>
                        <div className="h-5 bg-white opacity-25 w-0.5" />
                        <Link href="/terms-conditions" className="text-white text-sm hover:underline">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer2;
