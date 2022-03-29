import React from "react";

import { Wrapper, TitleHolder } from "./SectionWrapper.styles";

import { ScrollDownLeft, ScrollDownRight } from "./ScrollDown.styles";

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
  scrollDown: boolean;
  background?: string;
};

const SectionWrapper = ({ title, children, scrollDown, background }: Props) => {
  return (
    <Wrapper background={background}>
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
