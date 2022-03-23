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
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.5s ease;

  /* &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: black;
  } */

  &:hover {
    transform: scale3d(0.95, 0.95, 0.95);
    border: solid 5px white;
  }

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

export const AdvancementTextContainer = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0px;
  transition: 0.5s;
  text-align: center;

  h3 {
    cursor: default;
    font-size: 1.5rem;
    margin: 0 0 5px 0;
  }

  h3 span {
    transition: 0.5s ease 0.25s;
  }

  ${Card}:hover & {
    opacity: 1;
    h3 span {
      font-size: 1.35rem;
      color: var(--white);
      text-shadow: 0 0 10px black, 0 0 20px var(--white), 0 0 40px var(--white),
        0 0 60px var(--white), 0 0 90px var(--white);
    }
    @media screen and (max-width: 1150px) {
      h3 span {
        font-size: 2vw;
        color: var(--white);
        text-shadow: 0 0 10px black, 0 0 15px var(--white),
          0 0 25px var(--white), 0 0 40px var(--white), 0 0 60px var(--white);
      }
    }
  }

  @media screen and (max-width: 1150px) {
    h3 {
      font-size: 2vw;
    }
  }
  /* @media screen and (max-width: 600px) {
    h3 {
      font-size: 3vw;
    }
  } */
`;
