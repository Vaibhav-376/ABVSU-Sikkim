import { useState } from "react";
import Link from "next/link";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { NavMenu } from "@/data/navMenu";

export default function DesktopMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  return (
    <div className="hidden lg:flex space-x-6 justify-evenly">
      {NavMenu?.map((item,index) => (
        <div key={index} className="relative">
          {item.subItems ? (
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}

            >
              <Link
                href={item.href || "#"}
                className="text-white hover:text-white transition duration-300 flex flex-row gap-1 items-center"
              >
                {item.name}
                <FaCaretDown />
              </Link>

              {openDropdown === item.name && (
                <div className="absolute left-0 w-56 pt-4 z-50  text-sm">
                  <ul className="bg-white shadow-lg">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name} className="relative">
                        {subItem.subItems ? (
                          <div
                            className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-[#003463] hover:text-white"
                            onMouseEnter={() => setOpenSubDropdown(subItem.name)}
                            onMouseLeave={() => setOpenSubDropdown(null)}
                          >
                            {subItem.name}
                            <FaCaretRight />
                            {openSubDropdown === subItem.name && (
                              <div className="absolute left-full bottom-0 w-56 pl-2  z-50 text-xs">
                                <ul className="bg-white shadow-lg">
                                  {subItem.subItems.map((nestedItem) => (
                                    <li key={nestedItem.name}>
                                      <Link
                                        href={nestedItem.href}
                                        className="block px-4 py-2 text-black hover:bg-[#003463] hover:text-white"
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-black hover:bg-[#003463] hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
            </div>
          ) : (
            <Link href={item.href || "#"} className="text-white hover:text-white transition duration-300">
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
