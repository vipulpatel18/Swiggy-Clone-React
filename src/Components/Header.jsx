import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { TbBriefcase2 } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline, IoCartOutline } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const nav_links = [
  {
    svg: <TbBriefcase2 />,
    name: "Swiggy Corporate",
  },
  {
    svg: <CiSearch />,
    name: "Search",
  },
  {
    svg: <BiSolidOffer />,
    name: "Offers",
  },
  {
    svg: <IoHelpBuoyOutline />,
    name: "Help",
  },
  {
    svg: <MdOutlineAssignmentInd />,
    name: "Sign In",
  },
  {
    svg: <IoCartOutline />,
    name: "Cart",
  },
];

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  return (
    <header className="bg-white shadow-lg w-full h-fit sticky top-0 z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center gap-4">
          <a className="-m-1.5 p-1.5">
            <img
              className="h-12 w-auto cursor-pointer"
              src="img/swiggy-1.svg"
              alt=""
            />
          </a>
          <div>
            <span
              className="font-bold text-[16px] hover:text-[#ff5200] cursor-pointer border-b border-b-black hover:border-b-[#ff5200] "
              onClick={() => {
                setSideBar(!sideBar);
              }}
            >
              Other
            </span>
            <FaAngleDown
              className="inline text-[20px] ms-2 text-[#ff5200] cursor-pointer"
              onClick={() => {
                setSideBar(!sideBar);
              }}
            />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => {
              setMobileNav(!mobileNav);
            }}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {nav_links.map((d, i) => {
            return (
              <div key={i} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900 text-[16.20px]  hover:text-[#ff5200] "
                  aria-expanded="false"
                >
                  {d.svg}
                  {d.name}
                </button>
              </div>
            );
          })}
        </div>
      </nav>
      <div
        className={`w-full bg-[rgba(0,0,0,0.5)] z-10 duration-[700ms] fixed ${
          sideBar ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        onClick={() => {
          setSideBar(false);
        }}
      >
        <Sideslow sideBar={sideBar} />
      </div>

      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 duration-[700ms] sm:ring-gray-900/10 ${
            mobileNav ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <div className="flex items-center justify-between ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="img/swiggy-1.svg" alt="" />
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileNav(!mobileNav);
              }}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {nav_links.map((d, i) => {
                  return (
                    <a
                      href="#"
                      key={i}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {d.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Sideslow({ sideBar }) {
  return (
    <div
      className={`absolute-left-8 duration-500 top-full z-10 w-screen max-w-md overflow-hidden h-screen bg-white shadow-lg ring-1 ring-gray-900/5`}
    >
      <div
        className="p-4"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="h-screen w-full ">
          <div className="w-full max-w-md bg-white  p-6 relative">
            <button className=" top-4 left-4 mb-9 text-gray-500 hover:text-gray-700">
              <FaTimes size={20} />
            </button>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Search for area, street name.."
                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:shadow-lg"
              />
            </div>

            <div className="border border-gray-300 rounded flex items-center group p-4 hover:bg-gray-50 cursor-pointer">
              <FaMapMarkerAlt className="text-gray-500 mr-3" />
              <div>
                <p className="text-gray-700 font-medium group-hover:text-[#ff5200]">
                  Get current location
                </p>
                <p className="text-sm text-gray-500">Using GPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
