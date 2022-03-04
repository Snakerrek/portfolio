import React from "react";

import { Wrapper, TitleHolder } from "./SectionWrapper.styles";

type Props = {
  title: string;
  children: JSX.Element;
};

const SectionWrapper = ({ title, children }: Props) => {
  return (
    <Wrapper>
      <TitleHolder>
        <h2>{title}</h2>
      </TitleHolder>
      {children}
    </Wrapper>
  );
};

export default SectionWrapper;
