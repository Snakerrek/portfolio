import React from "react";

import { NavbarListItem } from "./NavbarListItem.styles";
import { NavbarListItemLink } from "./NavbarListItemLink.styles";
import { NavbarListItemIcon } from "./NavbarListItemLink.styles";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const NavbarSocialMediaLinks = (): JSX.Element => {
  return (
    <NavbarListItem delayID={5}>
      <NavbarListItemLink href="https://www.linkedin.com/in/tomaszkraszewski">
        <NavbarListItemIcon>
          <FaLinkedinIn />
        </NavbarListItemIcon>
      </NavbarListItemLink>
      <NavbarListItemLink href="https://github.com/Snakerrek">
        <NavbarListItemIcon>
          <FaGithub />
        </NavbarListItemIcon>
      </NavbarListItemLink>
    </NavbarListItem>
  );
};

export default NavbarSocialMediaLinks;
