import styled from "styled-components";

interface Props {
  topColor: string;
  bottomColor: string;
}

export const Card = styled.div<Props>`
  background: linear-gradient(${(p) => p.topColor}, ${(p) => p.bottomColor});
  flex: 1 1 auto;
  width: 300px;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 150px;
    width: 50%;
    height: auto;
  }
  @media screen and (max-width: 1125px) {
    & {
      width: 200px;
      height: 200px;
    }
  }
  @media screen and (max-width: 825px) {
    & {
      width: 150px;
      height: 150px;
    }
    img {
      max-width: 100px;
    }
  }
  @media screen and (max-width: 445px) {
    & {
      width: 100px;
      height: 100px;
    }
    img {
      max-width: 80px;
    }
  }
`;
