import React from "react";

const HtmlContent = ({ content, className = "" }) => {
  return (
    <div className={`${className} !text-inherit`}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default HtmlContent;
