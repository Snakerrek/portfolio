import styled, { keyframes } from "styled-components";

type Props = {
  background?: string;
};

const transform = keyframes`
    0%,
  100% { border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%; } 
   20% { border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%; } 
   40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%; } 
   60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%; } 
   80% { border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%; } 
`;

const movement_one = keyframes`
    0%,
  100% { transform: none; }
   50% { transform: translate(50%, 20%) rotateY(10deg) scale(1.2); }
`;

const movement_two = keyframes`
    0%,
  500% { transform: none; }
   50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.2);}
`;

export const Wrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: ${(p) => p.background};
  overflow: hidden;

  .shape-blob {
    background: #3988e3;
    height: 200px;
    width: 200px;
    border-radius: 30% 50% 20% 40%;
    animation: ${transform} 15s ease-in-out infinite both alternate,
      ${movement_one} 30s ease-in-out infinite both;
    opacity: 0.7;
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .shape-blob.one {
    height: 500px;
    width: 500px;
    left: -200px;
    top: -150px;
    transform: rotate(-180deg);
    animation: ${transform} 20s ease-in-out infinite both alternate,
      ${movement_two} 40s ease-in-out infinite both;
  }

  .shape-blob.two {
    height: 350px;
    width: 350px;
    left: 500px;
    top: -150px;
    transform: rotate(-180deg);
    animation: ${transform} 20s ease-in-out infinite both alternate,
      ${movement_two} 40s ease-in-out infinite both;
  }

  @media screen and (min-width: 601px) {
    & {
      min-height: 100vh;
    }
  }
`;

export const TitleHolder = styled.div`
  writing-mode: horizontal-tb;
  color: var(--lightBlue);
  z-index: 10;
`;
