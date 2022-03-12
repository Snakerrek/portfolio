import React from "react";

import { Wrapper, TitleHolder } from "./SectionWrapper.styles";

import { ScrollDownLeft, ScrollDownRight } from "./ScrollDown.styles";

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
      <ScrollDownLeft>Scroll down</ScrollDownLeft>
      <ScrollDownRight>Scroll down</ScrollDownRight>
    </Wrapper>
  );
};

export default SectionWrapper;
