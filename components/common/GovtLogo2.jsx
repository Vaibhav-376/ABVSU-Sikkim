import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo3 from "@/public/images/logo/23.gif"
const GovtLogo = ({isWhite}) => {
  return (
    <Link href={"/"} className={`${isWhite?"text-white":"text-black"} `}>
      <Image
        src={logo3}
        alt={"logo"}
        width={80}
        height={100}
        objectFit="cover"
      />
    </Link>
  );
};

export default GovtLogo;
