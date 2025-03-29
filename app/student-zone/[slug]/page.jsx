import React from "react";
import { studentZone } from "@/data/studentZone";
import PageLinks from "@/components/common/pageLink";

const studentZonePage = async ({ params }) => {
  const slug = await params?.slug;
  const pageData = studentZone.find((item) => item.slug === slug); 

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
          { name: pageData.name, link: `/student-zone/${pageData.slug}` },
        ]}
      />
      <div className="">
        <div className="text-center py-20">{pageData?.content}</div>
      </div>
    </>
  );
};

export default studentZonePage;
