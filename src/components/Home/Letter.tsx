import React, { useState } from "react";

import { LetterContainer } from "./Letter.styles";

type Props = { letter: string; delay: number };

const Letter = ({ letter, delay }: Props): JSX.Element => {
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
      delay={delay + "ms"}
    >
      {letter === " " ? (
        <span className="whiteSpace"> </span>
      ) : (
        <span className={animationGoing ? "letterAnimation" : ""}>
          {letter}
        </span>
      )}
    </LetterContainer>
  );
};

export default Letter;
