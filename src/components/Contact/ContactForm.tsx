import React, { useState } from "react";
import emailjs from "emailjs-com";

import {
  validateEmail,
  validateName,
  validateMessage,
  incrementUserSentMails,
  canUserSendMail,
} from "../../helpers";

import {
  ContactFormWrapper,
  ContactFormForm,
  FormGroup,
  SubmitButton,
} from "./ContactForm.styles";

import FormMessage from "./FormMessage";

type Props = {};

const ContactForm = (props: Props): JSX.Element => {
  const [inputCorrectness, setInputCorrectness] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({ name: true, email: true, message: true });

  const [mailStatus, setMailStatus] = useState<{
    canSend: boolean;
    sent: boolean;
  }>({ canSend: canUserSendMail(), sent: false });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const validateForm = () => {
    const nameCorrectness = validateName(name);
    const emailCorrectness = validateEmail(email);
    const messageCorrectness = validateMessage(message);
    setInputCorrectness({
      name: nameCorrectness,
      email: emailCorrectness,
      message: messageCorrectness,
    });
    return nameCorrectness && emailCorrectness && messageCorrectness;
  };

  const sendEmail = (e: any) => {
    console.log("email sent");
    emailjs
      .sendForm(
        "portfolio",
        "portfolio-template",
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    incrementUserSentMails();
    setMailStatus((prevState) => ({ ...prevState, sent: true }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validateForm();
    if (validateForm()) {
      sendEmail(e);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("email not sent");
    }
  };
  return (
    <ContactFormWrapper>
      <ContactFormForm onSubmit={handleSubmit}>
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
            <FormMessage message="Incorrect name" color={"red"} />
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
            <FormMessage message="Incorrect e-mail address" color={"red"} />
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
            <FormMessage message="Incorrect message" color={"red"} />
          )}
        </FormGroup>
        {mailStatus.canSend ? (
          mailStatus.sent ? (
            <FormMessage message={"Message sent!"} color={"green"} />
          ) : (
            <SubmitButton type="submit">Send</SubmitButton>
          )
        ) : (
          <FormMessage message={"You can't send more e-mails"} color={"red"} />
        )}
      </ContactFormForm>
    </ContactFormWrapper>
  );
};

export default ContactForm;
