"use client";
import PageLinks from "@/components/common/pageLink";
import React from "react";
import img from "@/public/images/research.webp";
import Image from "next/image";
import { incubationData } from "../incubation-center/page";

const CenteralFaciltiesPage = () => {
    return (
        <>
            <PageLinks
                title="Central Facilities"
                imageUrl="/images/pagelinks/terms.webp"
                items={[
                    { name: "Home", link: "/" },
                    { name: "Central Facilities", link: "/central-facilities" },
                ]}
            />
            <div className="container mx-auto py-8 px-5 text-justify flex flex-col gap-5 max-w-7xl">
                <h3 className="text-3xl font-bold">University Central Facilities</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <p>
                        {`At Atal Bihari Vajpayee Skill University (ABVSU), we believe that world-class infrastructure is key to delivering a modern, skill-focused education. Our Central Facilities are designed to provide students and faculty with state-of-the-art resources, fostering an environment of innovation, creativity, and hands-on learning. These facilities reflect our commitment to a future-ready, practical education that equips students with the skills needed to succeed in a rapidly evolving world.`}
                    </p>
                </div>
                <ul className="space-y-1">
                    {incubationData?.map((item, index) => (
                        <li key={index} className="p-2 ">
                            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-gray-600 px-4">{item.description}</p>
                        </li>
                    ))}
                </ul>
                <p className="pt-10">
                    The Atal Bihari Vajpayee Skill University (ABVSU) Incubation Center is a hub for innovation and entrepreneurship, providing the support, resources, and mentorship needed to turn ideas into successful ventures. Our mission is to empower the next generation of leaders to tackle challenges and create new opportunities.
                </p>

                <p>
                    We invite students, researchers, and entrepreneurs to explore the potential of our Incubation Center and take the first step toward transforming their ideas into reality.
                </p>
                <p className="font-bold">
                    {`Let’s innovate, create, and lead the future—together.`}
                </p>

                <div className="flex flex-col">
                    <p className="font-bold">
                        Sincerely,
                    </p>
                    <p>
                        Atal Bihari Vajpayee Skill University (ABVSU)
                    </p>
                </div>
            </div>
        </>
    );
};

export default CenteralFaciltiesPage;
