import styled, { keyframes } from "styled-components";

const ScrollDownAnimation = keyframes`
  0% {
    transform: translateY(0px)
  }

  50% {
    transform: translateY(-50px)
  }

  100% {
    transform: translateY(0px)
  }
`;

export const ScrollDownLeft = styled.p`
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 1rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  animation: ${ScrollDownAnimation} 2s ease infinite;
`;

export const ScrollDownRight = styled.p`
  z-index: 1;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  animation: ${ScrollDownAnimation} 2s infinite;
`;
