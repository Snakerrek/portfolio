import styled from "styled-components";
import { NavigationBar } from "./Navbar.styles";

export const NavbarLogoContainer = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--white);
  background: var(--grey);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;

  svg {
    transform: rotate(0deg);
    transition: transform 500ms;
  }

  a span {
    font-size: var(--fontExtraSmall);
    margin: 0;
  }

  ${NavigationBar}:hover & svg {
    transform: rotate(-180deg);
  }
`;
