import React from "react";

import { Wrapper, TitleHolder } from "./SectionWrapper.styles";

import { ScrollDownLeft, ScrollDownRight } from "./ScrollDown.styles";

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
  scrollDown: boolean;
};

const SectionWrapper = ({ title, children, scrollDown }: Props) => {
  return (
    <Wrapper>
      <TitleHolder>
        <h2>{title}</h2>
      </TitleHolder>
      {children}
      {scrollDown && (
        <>
          <ScrollDownLeft>Scroll down</ScrollDownLeft>
          <ScrollDownRight>Scroll down</ScrollDownRight>
        </>
      )}
    </Wrapper>
  );
};

export default SectionWrapper;
