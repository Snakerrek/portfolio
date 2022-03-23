import React from "react";

import { FooterWrapper } from "./Footer.styles";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <p>Created by Tomasz Kraszewski</p>
      <p>Copyright {currentYear} - All rights reserved</p>
    </FooterWrapper>
  );
};

export default Footer;
