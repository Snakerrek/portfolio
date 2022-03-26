import React from "react";

import { BackdropWrapper } from "./Backdrop.styles";

type Props = {
  children: JSX.Element | JSX.Element[];
  onClick: any;
};

const Backdrop = ({ children, onClick }: Props): JSX.Element => {
  return (
    <BackdropWrapper
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </BackdropWrapper>
  );
};

export default Backdrop;
