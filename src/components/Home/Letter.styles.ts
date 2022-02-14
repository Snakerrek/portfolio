import styled, { keyframes } from "styled-components";

export const letterAnimation = keyframes`
  from {
    opacity: 1;
  }
   50% {
    transform: scaleY(0.6);
    color: var(--lightBlue);
   }
   60% {
    transform: scaleY(1.3);
   }
   65% {
    transform: scaleY(0.7);
   }
   75% {
    transform: scaleY(1.2);
   }
   80% {
    transform: scaleY(0.8);
   }
   90% {
    transform: scaleY(1.1);
   }
   100% {
    transform: scaleY(1);
   }
`;

export const initialLetterAnimation = keyframes`
   0% {
     opacity: 0;
   }
   50% {
    transform: scaleY(0.6);
    color: var(--lightBlue);
   }
   60% {
    transform: scaleY(1.3);
   }
   65% {
    transform: scaleY(0.7);
   }
   75% {
    transform: scaleY(1.2);
   }
   80% {
    transform: scaleY(0.8);
   }
   90% {
    transform: scaleY(1.1);
   }
   100% {
    transform: scaleY(1);
    opacity: 1;
   }
`;

interface Props {
  delay: string;
}

export const LetterContainer = styled.div<Props>`
  display: inline-block;

  .letterAnimation {
    animation: ${letterAnimation} 1s ease forwards;
  }

  .whiteSpace {
    width: 1.25rem;
    height: 2.5rem;
  }

  span {
    opacity: 0;
    animation: ${initialLetterAnimation} 1s ${(p) => p.delay} ease forwards;
    font-size: 4rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    display: inline-block;
  }
  @media only screen and (max-width: 850px) {
    span {
      font-size: 3rem;
      font-weight: 900;
    }
    .whiteSpace {
      width: 1rem;
      height: 2rem;
    }
  }

  @media only screen and (max-width: 700px) {
    span {
      font-size: 2.5rem;
      font-weight: 900;
    }
    .whiteSpace {
      width: 0.8rem;
      height: 1.5rem;
    }
  }
  @media only screen and (max-width: 500px) {
    span {
      font-size: 1.8rem;
      font-weight: 900;
      .whiteSpace {
        width: 0.6rem;
        height: 1rem;
      }
    }
  }
  @media only screen and (max-width: 380px) {
    span {
      font-size: 1.5rem;
      font-weight: 900;
      .whiteSpace {
        width: 0.5rem;
        height: 0.8rem;
      }
    }
  }
`;
