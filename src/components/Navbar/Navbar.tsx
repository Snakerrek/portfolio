import React, { useState, useEffect } from "react";

import NavbarLogo from "./NavbarLogo";

import { NavigationBar } from "./Navbar.styles";
import { NavbarList } from "./NavbarList.styles";
import { NavbarListItem } from "./NavbarListItem.styles";
import {
  NavbarListItemLink,
  NavbarListItemIcon,
} from "./NavbarListItemLink.styles";

import NavbarSocialMediaLinks from "./NavbarSocialMediaLinks";

import { navbarDataInterface } from "../../interfaces";
import { isOnMobile } from "../../helpers";

type Props = {
  navbarData: navbarDataInterface[];
};

const Navbar = ({ navbarData }: Props): JSX.Element => {
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
        {windowWidth > 600 && !isOnMobile() && <NavbarLogo />}
        {navbarData.map((navbarItem) => (
          <NavbarListItem delayID={navbarItem.delayID} key={navbarItem.delayID}>
            <NavbarListItemLink href={navbarItem.link}>
              <NavbarListItemIcon>{<navbarItem.icon />}</NavbarListItemIcon>
              {navbarItem.text && windowWidth > 600 ? (
                <span>{navbarItem.text}</span>
              ) : null}
            </NavbarListItemLink>
          </NavbarListItem>
        ))}
        {windowWidth > 600 && !isOnMobile() && <NavbarSocialMediaLinks />}
      </NavbarList>
    </NavigationBar>
  );
};

export default Navbar;
