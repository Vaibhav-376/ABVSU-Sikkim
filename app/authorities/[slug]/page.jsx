import React from "react";
import PageLinks from "@/components/common/pageLink";
import { AuthoritiesData } from "@/data/authoritiesData";

const AuthoritiesDetailPage = async ({ params }) => {
  const slug = await params?.slug;
  const pageData = AuthoritiesData?.find((items) => items.slug === slug);

  return (
    <>
      <PageLinks
        title="About ABVSU "
        imageUrl="/images/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: pageData.name, link: `/authorities/${pageData.slug}` },
        ]}
      />
      <div className="">{pageData.content}</div>
    </>
  );
};

export default AuthoritiesDetailPage;
