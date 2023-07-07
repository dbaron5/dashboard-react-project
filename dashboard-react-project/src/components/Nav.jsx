/* eslint-disable react/prop-types */
import { useState } from "react";
import NavLink from "./Navbar/NavLink";
import reactNative from "../assets/icon/reactnative.png";
import menu from "../assets/icon/menu.png";

const Nav = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const menuWidth = isMenuOpen ? "w-80" : "w-16";

  const menuIconClass = isMenuOpen
    ? "duration-300 ease-in-out h-10 w-10"
    : "duration-300 ease-in-out h-10 w-10 transform rotate-90";

  return (
    <nav className={`flex flex-col ${menuWidth} h-screen bg-lilac pl-3 gap-10`}>
      <div className="flex gap-2 pt-5">
        {isMenuOpen && (
          <>
            <img className="h-10 w-10" src={reactNative} alt="" />
            <h1 className="text-white text-2xl font-bold pr-10">
              React Native
            </h1>
          </>
        )}

        <img className={menuIconClass} src={menu} alt="" onClick={toggleMenu} />
      </div>
      <div className="flex flex-col gap-5 text-white">
        {links.map((link) => (
          <NavLink key={link.name} isMenuOpen={isMenuOpen} link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
