import React from "react";
// import PageLinks from "@/components/common/pageLink";

import { admissionData } from "@/data/admissionData";
import PageLinks from "@/components/common/pageLink";

const AdmissionDetailPage = async ({ params }) => {
  const slug = await params?.slug;
  const pageData = admissionData?.find((items) => items.slug === slug);

  return (
    <>
      <PageLinks
        title="About ABVSU "
        imageUrl="/images/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: pageData.name, link: `/admission/${pageData.slug}` },
        ]}
      />
      <div className="text-center py-20">{pageData.content}</div>
    </>
  );
};

export default AdmissionDetailPage;
