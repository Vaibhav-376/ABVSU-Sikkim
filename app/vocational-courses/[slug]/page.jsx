import React from "react";
import PageLinks from "@/components/common/pageLink";
import { vocationalData } from "@/data/vocationalData";

const VocationalDetailPage = async ({ params }) => {
  const slug = await params?.slug;
  const pageData = vocationalData?.find((item) => item.slug === slug); 

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
        title={pageData.name} // Use dynamic title
        imageUrl="/images/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: pageData.name, link: `/vocational-courses/${pageData.slug}` },
        ]}
      />
      <div className="">
        <div>{pageData?.content}</div>
      </div>
    </>
  );
};

export default VocationalDetailPage;
