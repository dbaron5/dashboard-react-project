import { useState } from "react";
import NavLink from "./NavLink";
import customers from "../assets/icon/users.png";
import dashboard from "../assets/icon/home.png";
import signOut from "../assets/icon/logout.png";
import password from "../assets/icon/password.png";
import message from "../assets/icon/speechbubble.png";
import help from "../assets/icon/questionmark.png";
import settings from "../assets/icon/settings.png";
import reactNative from "../assets/icon/reactnative.png";
import menu from "../assets/icon/menu.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const menuWidth = isMenuOpen ? "w-80" : "w-30";

  const menuIconClass = isMenuOpen
    ? "duration-300 ease-in-out h-10 w-10"
    : "duration-300 ease-in-out h-10 w-10 transform rotate-90";

  const links = [
    { name: "Dashboard", icon: dashboard },
    { name: "Customers", icon: customers },
    { name: "Message", icon: message },
    { name: "Help", icon: help },
    { name: "Settings", icon: settings },
    { name: "Password", icon: password },
    { name: "Sign Out", icon: signOut },
  ];

  return (
    <nav className={`flex flex-col ${menuWidth} h-screen bg-lilac pl-3 gap-10`}>
      <div className="flex gap-2 pt-5">
        {isMenuOpen && (
          <>
            <img className="h-10 w-10" src={reactNative} alt="" />
            <h1 className="text-black text-2xl font-bold pr-10">
              React Native
            </h1>
          </>
        )}

        <img className={menuIconClass} src={menu} alt="" onClick={toggleMenu} />
      </div>
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <NavLink key={link.name} isMenuOpen={isMenuOpen} link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
