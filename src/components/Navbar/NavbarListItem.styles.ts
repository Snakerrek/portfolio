import styled from "styled-components";
import { slideToRight, slideUp } from "./NavbarAnimations.styles";

interface NavbarListItemProps {
  delayID: number;
}

export const NavbarListItem = styled.li<NavbarListItemProps>`
  width: 100%;
  opacity: 0;

  &:last-child {
    margin-top: auto;
  }
  @media only screen and (min-width: 600px) {
    animation: ${slideToRight} 1000ms ${({ delayID }) => delayID * 300 + "ms"}
      ease forwards;
  }
  @media only screen and (max-width: 600px) {
    animation: ${slideUp} 1000ms ${({ delayID }) => delayID * 300 + "ms"} ease
      forwards;
  }
`;
