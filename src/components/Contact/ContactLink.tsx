import React from "react";

import { ContactLinkWrapper, Icon, Info, Link } from "./ContactLink.styles";

type Props = {
  icon: any;
  text: string;
  link: string;
};

const ContactLink = ({ icon, text, link }: Props): JSX.Element => {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={link}>
      <ContactLinkWrapper>
        <Icon>{icon}</Icon>
        <Info>
          <p>{text}</p>
        </Info>
      </ContactLinkWrapper>
    </Link>
  );
};

export default ContactLink;
