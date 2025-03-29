import React from "react";
import PageLinks from "@/components/common/pageLink";
import { InformationCenterData } from "@/data/InformationCenterData";

const LeadershipDetailPage = async ({ params }) => {
    const slug = await params?.slug;
    const pageData = InformationCenterData?.find((item) => item.slug === slug);

    if (!pageData) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-red-500">Page Not Found</h2>
            </div>
        );
    }

    return (
        <>
            <PageLinks
                title={pageData.name}
                imageUrl="/images/pagelinks/team.webp"
                items={[
                    { name: "Home", link: "/" },
                    { name: pageData.name, link: `/leadership/${pageData.slug}` },
                ]}
            />
            <div className="">
                <div className="text-center">{pageData?.content}</div>
            </div>
        </>
    );
};

export default LeadershipDetailPage;
