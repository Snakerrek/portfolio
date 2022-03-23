import styled, { keyframes } from "styled-components";

const arrowAnimation = keyframes`
  0% {
    transform: scale3d(1,1,1);
  }

  50% {
    transform: scale3d(0.8,0.8,0.8);
  }

  100% {
    transform: scale3d(1,1,1);
  }
`;

export const FooterWrapper = styled.footer`
  position: relative;
  background: var(--black);
  text-align: center;

  p {
    font-size: var(--fontSmall);
    margin: 10px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  div {
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 3rem;
    animation: ${arrowAnimation} 2s ease infinite;
  }
`;
