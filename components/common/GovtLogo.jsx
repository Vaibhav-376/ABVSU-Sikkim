import Image from "next/image";
import React from "react";
import Link from "next/link";
const GovtLogo = ({isWhite,logo,height}) => {
  return (
    <Link href={"/"} className={`${isWhite?"text-white":"text-black"} `}>
      <Image
        src={logo}
        alt={"logo"}
        width={height || 85}
        height={100}
        objectFit="cover"
      />
    </Link>
  );
};

export default GovtLogo;
