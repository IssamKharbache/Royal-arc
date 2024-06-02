"use client";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { Link as ScrollLink} from "react-scroll";

//nav links
const links = [
  {
    title: " Website Design",
    to: "websitedesign",
  },
  {
    title: "Graphic Design",
    to: "graphicDesign",
  },
  {
    title: "Video Editing",
    to: "videoEditing",
  },
  {
    title: "Shopify Stores",
    to: "shopifyStores",
  },
];
const NavBar = () => {
  //handling open menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  //

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50 ">
        <div>
          <Link  href="/" className="">
            <Image
              priority
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-full"
            />
          </Link>
        </div>
        <div className="cursor-pointer hidden xl:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 font-semibold to bg-neutral-400 bg-opacity-80">
          {links.map((link, idx) => {
            return (
              <ScrollLink
              key={idx}
                isDynamic={true}
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-45}
                duration={500}
                className="hover:text-gray-50 duration-300"
              >
                {link.title}
              </ScrollLink>
            );
          })}
          <ScrollLink
                isDynamic={true}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={100}
                duration={400}
                className="hover:text-gray-50 duration-300">
             Services
          </ScrollLink>

          <Link href="/pricing" className="hover:text-gray-50 duration-300">
            Pricing
          </Link>
        </div>
        {/* responsive menu */}
        <div className="flex xl:hidden">
          {isMenuOpen ? (
            //display menu and close button
            <div
              onClick={toggleDropdown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X  />
              <DropDownMenu isMenuOpen={isMenuOpen}   onClose={closeMenu} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropdown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
        {/* contact button */}
        <div className="hidden xl:flex">
          <Link
            className="inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-semibold focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
