import React, { useState } from "react";
import Link from "next/link";
import { NavMenu } from "@/data/navMenu";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DrawerData = ({ setIsOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);

  const handleDropdownClick = (itemName) => {
    setDropdownOpen(dropdownOpen === itemName ? null : itemName);
  };

  const handleSubDropdownClick = (subItemName) => {
    setSubDropdownOpen(subDropdownOpen === subItemName ? null : subItemName);
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {NavMenu?.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems ? (
                  <div>
                    <button
                      className={classNames(
                        "py-1 text-lg font-normal opacity-75  w-full text-left flex justify-between items-center",
                        item.current ? "text-black hover:opacity-100" : "hover:text-black hover:opacity-100"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownClick(item.name);
                      }}
                    >
                      {item.name}
                      <FaCaretDown />
                    </button>

                    {dropdownOpen === item.name && (
                      <div className="mt-2 bg-white shadow-lg rounded-lg z-10">
                        <ul>
                          {item.subItems?.map((subItem) => (
                            <li key={subItem.name} className="relative">
                              {subItem.subItems ? (
                                <div>
                                  <button
                                    className=" w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-between items-center"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleSubDropdownClick(subItem.name);
                                    }}
                                  >
                                    {subItem.name}
                                    <FaCaretRight />
                                  </button>

                                  {subDropdownOpen === subItem.name && (
                                    <div className="absolute left-32 top-10 mt-0  bg-white shadow-lg rounded-lg z-10 w-48">
                                      <ul>
                                        {subItem.subItems.map((nestedItem) => (
                                          <li key={nestedItem.name}>
                                            <Link
                                              href={nestedItem.href}
                                              className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                              onClick={() => {
                                                setIsOpen(false);
                                                setDropdownOpen(null);
                                                setSubDropdownOpen(null);
                                              }}
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
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setDropdownOpen(null);
                                  }}
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
                  <Link
                    href={item.href}
                    className={classNames(
                      "py-1 text-lg font-normal opacity-75 block",
                      item.current ? "text-black hover:opacity-100" : "hover:text-black hover:opacity-100"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerData;
