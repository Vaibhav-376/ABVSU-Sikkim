"use client";
import PageLinks from "@/components/common/pageLink";
import React from "react";
import img from "@/public/images/research.webp";
import Image from "next/image";

const ResearchPage = () => {
    return (
        <>
            <PageLinks
                title="Research"
                imageUrl="/images/pagelinks/terms.webp"
                items={[
                    { name: "Home", link: "/" },
                    { name: "Research", link: "/research" },
                ]}
            />
            <div className="container mx-auto py-8 px-5 text-justify flex flex-col gap-5 max-w-7xl">
                <h3 className="text-3xl font-bold"> Phd Programme</h3>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-2/3 flex flex-col gap-4">
                        <div className="eligibility">
                            <h3 className="text-3xl font-bold">Eligibility</h3>
                            <p>{`Master's Degree (with minimum 55% marks or equivalent for General and 50% marks for SC/ST and successful clearance of Entrance Test. Candidates with M. Phil. / NET / GATE / SLET / SET or equivalent and a Regular Teacher in a College / University will be exempted from Entrance Test.`}</p>
                        </div>
                        <div className="duration">
                            <h3 className="text-3xl font-bold">Duration</h3>
                            <h3 className="text-lg font-bold">Minimum 3 Years and Maximum 6 Years</h3>
                            <p>{`Extension beyond the above limits will be governed by the relevant clauses as stipulated in the Statute/Ordinance of the university.`}</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 relative my-auto">
                        <Image
                            src={img}
                            width={400}
                            height={250}
                            alt="Our Work"
                            className="w-full max-w-[400px] h-auto object-cover "
                        />
                    </div>
                </div>

                <div className="">
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold">
                            Our Schools
                        </h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 px-6">
                        {[
                            "Arts, Humanities and Social Science",
                            "Commerce and Management",
                            "Science",
                            "Computer Science and Information Technology",
                            "Engineering and Technology",
                            "Agriculture",
                            "Library and Information Sciences",
                            "Vocational Studies",
                            "Hotel Management",
                        ].map((school, index) => (
                            <li key={index} className="text-gray-700  transition">
                                {school}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="admission-process">
                    <h3 className="text-3xl font-bold">Admission Process</h3>
                    <p>{`Admission to Ph.D. & M.Phil. will be through a notification in Newspapers & website followed by a mandatory entrance examination.`}</p>
                </div>
            </div>
        </>
    );
};

export default ResearchPage;
