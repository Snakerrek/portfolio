import React from "react";

import { ContactDataInterface } from "../../interfaces";

import { ContactLinksWrapper } from "./ContactLinks.styles";

import ContactLink from "./ContactLink";

type Props = {
  contactData: ContactDataInterface[];
};

const ContactLinks = ({ contactData }: Props): JSX.Element => {
  return (
    <ContactLinksWrapper>
      {contactData.map((link, index) => {
        return (
          <ContactLink
            key={index}
            icon={<link.icon />}
            text={link.text}
            link={link.link}
          />
        );
      })}
    </ContactLinksWrapper>
  );
};

export default ContactLinks;
