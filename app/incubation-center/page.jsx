"use client";
import PageLinks from "@/components/common/pageLink";
import React from "react";

export const incubationData = [
    {
        "title": "Collaboration with Industry and Government",
        "description": "The AVBSU Incubation Center thrives on strategic partnerships with industry leaders, government bodies, and academic institutions. These collaborations provide incubatees with access to resources, funding opportunities, and market insights, ensuring a strong foundation for success."
    },
    {
        "title": "Technology-Enabled Learning and Innovation",
        "description": "Staying at the forefront of technological advancements, the Incubation Center integrates cutting-edge tools like AI, IoT, blockchain, and emerging digital platforms to drive innovation and real-world applications."
    },
    {
        "title": "Skills-Led Entrepreneurship",
        "description": "With a skills-driven approach, the center focuses on hands-on training in technical, business, and entrepreneurial competencies, empowering students and startups to thrive in the competitive global market."
    },
    {
        "title": "Mentorship and Guidance",
        "description": "Our expert mentors—comprising industry professionals, successful entrepreneurs, and academic leaders—provide personalized guidance on everything from business model development to market expansion, ensuring sustainable growth for startups."
    },
    {
        "title": "Funding and Investment Opportunities",
        "description": "Through venture capital networks, angel investors, and corporate collaborations, we help promising startups secure funding, bridging the gap between innovation and financial backing to scale their ideas effectively."
    },
    {
        "title": "Global Exposure",
        "description": "The Incubation Center connects incubatees with international markets, industry conferences, and cross-border collaborations, ensuring their ventures are globally competitive and impactful."
    }
]


const ResearchPage = () => {
    return (
        <>
            <PageLinks
                title="Research"
                imageUrl="/images/pagelinks/terms.webp"
                items={[
                    { name: "Incubation Center", link: "/" },
                    { name: "Incubation Center", link: "/incubation-center" },
                ]}
            />

            <div className="container mx-auto py-8 px-5 text-justify flex flex-col gap-5">
                <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
                    <h3 className="text-3xl font-bold">AVBSU Incubation Center</h3>
                    <p>{`At AVBSU, we are committed to fostering a culture of innovation, entrepreneurship, and technological advancement. The AVBSU Incubation Center is designed to nurture aspiring entrepreneurs and innovators, providing them with the necessary resources, mentorship, and industry connections to turn ideas into impactful solutions.`}
                    </p>
                    <p>{`Through a dynamic ecosystem of expert guidance, state-of-the-art facilities, and networking opportunities, the center empowers students and researchers to develop groundbreaking startups and contribute to India’s economic growth. By bridging the gap between academia and industry, we strive to create future leaders and change-makers who will drive technological and business transformation on a global scale.`}
                    </p>
                    <h3 className="text-3xl font-bold pt-10">Our Vision</h3>
                    <p>{`The Incubation Center at AVBSU is more than just a space—it is a dynamic hub for innovation, creativity, and entrepreneurship. Our vision is to nurture groundbreaking ideas and equip aspiring entrepreneurs with the skills and resources needed to shape the future.
                    `}
                    </p>
                    <p>{`
                    By blending academic excellence with real-world applications, we empower students, faculty, and innovators to develop cutting-edge solutions and successful business ventures. With access to mentorship, state-of-the-art infrastructure, and industry collaborations, we strive to transform visionary ideas into impactful enterprises, driving progress and sustainable growth.
                    `}</p>

                    <h3 className="text-3xl font-bold pt-10">Key Features of the University Incubation Center</h3>
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
            </div>

        </>
    );
};

export default ResearchPage;
