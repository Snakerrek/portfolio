import React, { useState } from "react";

import {
  ContactFormWrapper,
  ContactFormForm,
  FormGroup,
  SubmitButton,
} from "./ContactForm.styles";

import IncorrectInput from "./IncorrectInput";

type Props = {};

const ContactForm = (props: Props): JSX.Element => {
  const [inputCorrectness, setInputCorrectness] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({ name: false, email: false, message: false });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <ContactFormWrapper>
      <ContactFormForm>
        <FormGroup>
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {!inputCorrectness.name && (
            <IncorrectInput message="Incorrect name" />
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">
            Your email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {!inputCorrectness.email && (
            <IncorrectInput message="Incorrect e-mail address" />
          )}
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          {!inputCorrectness.message && (
            <IncorrectInput message="Incorrect message" />
          )}
        </FormGroup>
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactFormForm>
    </ContactFormWrapper>
  );
};

export default ContactForm;
