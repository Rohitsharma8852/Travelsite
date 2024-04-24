import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md ">
       
        <div className="container mx-auto py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 md:pt-[10px] md:pb-4 font-bold text-2xl lg:pl-10 pl-5">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src="https://travel-tcj.netlify.app/assets/logo-i-nSxaLW.png" alt="" className="h-16" />
              </Link>
            </div>
            <div className="hidden md:block mr-10">
              <ul className="flex items-center gap-6">
                <li className="py-4 hover:text-[#5f9f9d] text-[19px]">
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4 hover:text-[#5f9f9d] text-[19px]">
                  <NavLink to="/blogs" activeClassName="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4 hover:text-[#579694] text-[19px]">
                  <NavLink to="/best-places" activeClassName="active">
                      Gallery
                  </NavLink>
                </li>
                <li className="py-4 hover:text-[#5f9f9d] text-[19px]">
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li className="py-4 hover:text-[#5f9f9d] text-[19px]">
                  <NavLink to="/service" activeClassName="active">
                     Service
                  </NavLink>
                </li>
                <li className="group relative cursor-pointer hover:text-[#5f9f9d] text-[19px]">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;