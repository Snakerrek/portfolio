import React from "react";

import { NavbarLogoContainer } from "./NavbarLogo.styles";
import { NavbarListItemLink } from "./NavbarListItemLink.styles";
import { NavbarListItemIcon } from "./NavbarListItemLink.styles";

import { HiArrowsExpand } from "react-icons/hi";

const NavbarLogo = (): JSX.Element => {
  return (
    <NavbarLogoContainer>
      <NavbarListItemLink href="/#">
        <NavbarListItemIcon>
          <HiArrowsExpand />
        </NavbarListItemIcon>
        <span>Kraszewski</span>
      </NavbarListItemLink>
    </NavbarLogoContainer>
  );
};

export default NavbarLogo;
