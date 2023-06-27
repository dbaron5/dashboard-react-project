// import React, { useState } from "React";
import NavLink from "./NavLink";
import customers from "../assets/icon/users.png";
import dashboard from "../assets/icon/home.png";
import signOut from "../assets/icon/logout.png";
import password from "../assets/icon/password.png";
import message from "../assets/icon/speechbubble.png";
import help from "../assets/icon/questionmark.png";
import settings from "../assets/icon/settings.png";
import reactnative from "../assets/icon/reactnative.png";
import menu from "../assets/icon/menu.png";

const Nav = () => {
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
    <nav className="flex flex-col w-80 h-screen bg-lilac pl-3 gap-10">
      <div className="flex justify-around py-5">
        <img className="h-10 w-10 mr-2" src={reactnative} alt="" />
        <h1 className="text-black text-2xl pr-10">React Native</h1>
        <img className="h-10 w-10 mr-2" src={menu} alt="" />
      </div>
      <div className="flex flex-col gap5">
        {links.map((link) => (
          <NavLink link={link} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
