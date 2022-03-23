import React from "react";

import { contactDataInterface } from "../../interfaces";

import SectionWrapper from "../SectionWrapper/SectionWrapper";

import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import ContactCanvas from "../ContactCanvas/ContactCanvas";
import Map from "../Map/Map";

import { ContactWrapper } from "./Contact.styles";

type Props = {
  contactData: contactDataInterface;
};

const Contact = ({ contactData }: Props): JSX.Element => {
  return (
    <SectionWrapper title={"Contact me"} scrollDown={false}>
      <ContactCanvas
        backgroundCanvasConfig={contactData.backgroundCanvasConfig}
      />
      <ContactWrapper>
        <ContactLinks contactData={contactData.links} />
        <ContactForm />
      </ContactWrapper>
      <Map />
    </SectionWrapper>
  );
};

export default Contact;
