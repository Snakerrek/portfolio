import React, { useState, useEffect } from "react";

import NavbarLogo from "./NavbarLogo";

import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { BsGearWideConnected } from "react-icons/bs";
import { FaLaptopCode, FaUserAlt } from "react-icons/fa";

import { NavigationBar } from "./Navbar.styles";
import { NavbarList } from "./NavbarList.styles";
import { NavbarListItem } from "./NavbarListItem.styles";
import { NavbarListItemLink } from "./NavbarListItemLink.styles";
import { NavbarListItemIcon } from "./NavbarListItemLink.styles";
import NavbarSocialMediaLinks from "./NavbarSocialMediaLinks";

let listItems: { delayID: number; icon: React.ReactNode; text: string }[] = [
  { delayID: 1, icon: <FaUserAlt />, text: "About" },
  { delayID: 2, icon: <BsGearWideConnected />, text: "My Skills" },
  { delayID: 3, icon: <FaLaptopCode />, text: "Projects" },
  { delayID: 4, icon: <MdOutlineConnectWithoutContact />, text: "Contact" },
];

const Navbar = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavigationBar>
      <NavbarList>
        {windowWidth > 600 && <NavbarLogo />}
        {listItems.map((item) => (
          <NavbarListItem delayID={item.delayID} key={item.delayID}>
            <NavbarListItemLink href="/#">
              <NavbarListItemIcon>{item.icon}</NavbarListItemIcon>
              {item.text && windowWidth > 600 ? <span>{item.text}</span> : null}
            </NavbarListItemLink>
          </NavbarListItem>
        ))}
        {windowWidth > 600 && <NavbarSocialMediaLinks />}
      </NavbarList>
    </NavigationBar>
  );
};

export default Navbar;
