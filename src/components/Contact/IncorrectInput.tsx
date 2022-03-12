import React from "react";

import { IncorrectInputParagraph } from "./Incorrectinput.styles";

type Props = {
  message: string;
};

const IncorrectInput = ({ message }: Props): JSX.Element => {
  return (
    <>
      <IncorrectInputParagraph>{message}</IncorrectInputParagraph>
    </>
  );
};

export default IncorrectInput;
