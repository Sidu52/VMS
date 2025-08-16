import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import RightIcons from "./RightIcons";

const Navbar = () => {
  return (
    <nav className="flex item-center gap-8 bg-pramaBlue px-6 py-3 z-navbar">
      <Logo />
      <Menu />
      <RightIcons />
    </nav>
  );
};

export default Navbar;
