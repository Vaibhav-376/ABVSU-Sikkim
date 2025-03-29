import React from "react";
import PageLinks from "@/components/common/pageLink";
import { lifeAtAbvsuData } from "@/data/lifeAtAbvsuData";

const LifeAtAvbsuPage = async ({ params }) => {
    const slug = await params?.slug;
    const pageData = lifeAtAbvsuData?.find((item) => item.slug === slug);

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
                    { name: pageData.name, link: `/about/${pageData.slug}` },
                ]}
            />
            <div className="">
                <div>{pageData?.content}</div>
            </div>
        </>
    );
};

export default LifeAtAvbsuPage;
