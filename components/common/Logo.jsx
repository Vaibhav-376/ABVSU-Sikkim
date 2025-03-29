import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo1 from "@/public/images/logo/abvsu-logo1.png"
const Logo = ({isWhite}) => {
  return (
    <Link href={"/"} className={`${isWhite?"text-white":"text-black"} `}>
      <Image
        src={logo1}
        alt={"logo"}
        width={110}
        height={100}
        objectFit="cover"
      />
    </Link>
  );
};

export default Logo;
