import React from "react";

import { MessageParagraph } from "./FormMessage.styles";

type Props = {
  message: string;
  color: string;
};

const IncorrectInput = ({ message, color }: Props): JSX.Element => {
  return (
    <>
      <MessageParagraph color={color}>{message}</MessageParagraph>
    </>
  );
};

export default IncorrectInput;
