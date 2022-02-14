import React, { useState } from "react";

import { LetterContainer } from "./Letter.styles";

type Props = { letter: string; delay: number };

const Letter = (props: Props) => {
  const [animationGoing, setAnimationGoing] = useState<boolean>(false);

  const handleAnimationOnMouseEnter = () => {
    setAnimationGoing(true);
    setTimeout(() => {
      setAnimationGoing(false);
    }, 1000);
  };
  return (
    <LetterContainer
      onMouseEnter={handleAnimationOnMouseEnter}
      delay={props.delay + "ms"}
    >
      {props.letter === " " ? (
        <span className="whiteSpace"> </span>
      ) : (
        <span className={animationGoing ? "letterAnimation" : ""}>
          {props.letter}
        </span>
      )}
    </LetterContainer>
  );
};

export default Letter;
