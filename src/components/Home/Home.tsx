import React from "react";

import HomeCanvas from "../HomeCanvas/HomeCanvas";
import Letter from "./Letter";

import { TitleWrapper, HomeWrap, PatternInfo } from "./Home.styles";
import { splitStringToArrayOfChars } from "../../helpers";
import { homeSectionDataInterface } from "../../interfaces";

const Home = ({
  homeTextFirstLine,
  homeTextSecondLine,
  delay,
  FFEconfig,
}: homeSectionDataInterface): JSX.Element => {
  let d = delay.startingValue;

  return (
    <HomeWrap>
      <HomeCanvas FFEconfig={FFEconfig} />
      <TitleWrapper>
        <div>
          {splitStringToArrayOfChars(homeTextFirstLine).map((letter, index) => {
            d += delay.incrementFactor;
            return <Letter key={index} letter={letter} delay={d} />;
          })}
        </div>
        <div>
          {splitStringToArrayOfChars(homeTextSecondLine).map(
            (letter, index) => {
              d += delay.incrementFactor;
              return <Letter key={index} letter={letter} delay={d} />;
            }
          )}
        </div>
      </TitleWrapper>
      <PatternInfo>
        <p>This pattern will be different every time you visit this page :)</p>
      </PatternInfo>
    </HomeWrap>
  );
};

export default Home;
