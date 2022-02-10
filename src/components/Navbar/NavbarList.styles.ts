import styled from "styled-components";
import { fadeIn } from "./NavbarAnimations.styles";

export const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  &:hover span {
    display: block;
    animation: ${fadeIn} 500ms ease forwards;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;
