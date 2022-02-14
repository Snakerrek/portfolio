import React from "react";

import Canvas from "../Canvas/Canvas";
import Letter from "./Letter";

import { TitleWrapper, HomeWrap } from "./Home.styles";
import { splitStringToArrayOfChars } from "../../helpers";

const Home: React.FC = () => {
  let delay = 500;

  return (
    <HomeWrap>
      <Canvas />
      <TitleWrapper>
        <div>
          {splitStringToArrayOfChars("Hi, I'm Tomasz").map((letter, index) => {
            delay += 100;
            return <Letter key={index} letter={letter} delay={delay} />;
          })}
        </div>
        <div>
          {splitStringToArrayOfChars("Front-end Developer").map(
            (letter, index) => {
              delay += 100;
              return <Letter key={index} letter={letter} delay={delay} />;
            }
          )}
        </div>
      </TitleWrapper>
    </HomeWrap>
  );
};

export default Home;
