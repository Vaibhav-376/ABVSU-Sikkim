"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import Drawer from "./Drawer";
import DrawerData from "./DrawerData";
import Logo from "@/components/common/Logo";
import GovtLogo from "@/components/common/GovtLogo";
import TypingEffect from "@/components/common/TypingEffect";
import DesktopMenu from "./DesktopMenu";
import logo1 from "@/public/images/logo/UGC_logo.png"
import logo2 from "@/public/images/logo/aui_logo.png"
import logo3 from "@/public/images/logo/rightLogo.png"
import { NavTop } from "@/data/navMenu";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isNavTopVisible, setIsNavTopVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavTopVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href, subItems) =>
    pathname === href || (subItems && subItems.some((subItem) => pathname === subItem.href));

  return (
    <Disclosure as="nav" className="bg-white">
      <div
        className={`theme-bg navtop overflow-hidden transition-all duration-300 ${isNavTopVisible ? "max-h-16 opacity-100 py-2" : "max-h-0 opacity-0 py-0 "
          }`}
      >
        <div className="flex flex-col md:flex-row justify-between container mx-auto">
          <div className="flex flex-wrap flex-row gap-5 md:gap-10  items-center px-8 w-full md:w-2/3">
            {NavTop?.map((item, i) => (
              <Link key={i} className="text-white hover:text-blue-400" href={item?.link}>
                {item?.title}
              </Link>
            ))}
          </div>
          <Link href={"#"} className="text-white hidden md:flex hover:text-blue-400 px-3" >Apply For Online Admission</Link>
        </div>
      </div>

      <div className="text-black font-bold text-2xl md:text-4xl text-center py-2 h-24 flex flex-row justify-between px-3 md:px-8 items-center italic">
        <div className="flex flex-row gap-3 ">
          <Logo />
          <div className="w-[100px] md:w-[350px] my-auto">
            <TypingEffect text={"ATAL BIHARI VAJPAYEE SKILL UNIVERSITY, SIKKIM"} />
          </div>
        </div>
        <div className="flex gap-2 text-black w-1/3 justify-end ">
          <div className="flex gap-3 items-center">
            <GovtLogo logo={logo3} height={140} />
            <GovtLogo logo={logo1} />
            <GovtLogo logo={logo2} />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="px-4 theme-bg lg:px-2">
        <div className="relative flex h-14 items-center  justify-center">
          {/* Desktop Navigation */}
          <DesktopMenu />

          {/* Mobile Menu Icon */}
          <div className="lg:hidden w-full flex justify-end">
            <FiMenu className="text-white text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
          </div>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="bg-red-400 lg:hidden">
              <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <DrawerData setIsOpen={setIsOpen} />
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
