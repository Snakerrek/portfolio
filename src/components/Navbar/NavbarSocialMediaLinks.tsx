import React from "react";

import { NavbarListItem } from "./NavbarListItem.styles";
import { NavbarListItemLink } from "./NavbarListItemLink.styles";
import { NavbarListItemIcon } from "./NavbarListItemLink.styles";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const NavbarSocialMediaLinks: React.FC = () => {
  return (
    <NavbarListItem delayID={5}>
      <NavbarListItemLink href="/#">
        <NavbarListItemIcon>
          <FaLinkedinIn />
        </NavbarListItemIcon>
      </NavbarListItemLink>
      <NavbarListItemLink href="/#">
        <NavbarListItemIcon>
          <FaGithub />
        </NavbarListItemIcon>
      </NavbarListItemLink>
    </NavbarListItem>
  );
};

export default NavbarSocialMediaLinks;
