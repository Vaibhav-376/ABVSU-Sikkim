"use client";
import React from "react";
import PageLinks from "@/components/common/pageLink";
import FaqsList from "@/components/faqs/FaqList";

const FaqPage = () => {

  return (
    <>
      <PageLinks
        title="FAQ"
        imageUrl="/images/pagelinks/faq.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "FAQ", link: "/faq" },
        ]}
      />
      <FaqsList/>
    </>
  );
};

export default FaqPage;
