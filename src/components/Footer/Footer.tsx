import React from "react";

import { FooterWrapper } from "./Footer.styles";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <p>Created by Tomasz Kraszewski</p>
      <p>Copyright {currentYear} - All rights reserved</p>
      <div>
        <a href="/#">
          <BsFillArrowUpCircleFill />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
