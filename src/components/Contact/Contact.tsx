import React from "react";

import { ContactDataInterface } from "../../interfaces";

import SectionWrapper from "../SectionWrapper/SectionWrapper";

import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import Map from "../Map/Map";

import { ContactWrapper } from "./Contact.styles";

type Props = {
  contactData: ContactDataInterface[];
};

const Contact = ({ contactData }: Props): JSX.Element => {
  return (
    <SectionWrapper title={"Contact me"} scrollDown={false}>
      <ContactWrapper>
        <ContactLinks contactData={contactData} />
        <ContactForm />
      </ContactWrapper>
      <Map />
    </SectionWrapper>
  );
};

export default Contact;
