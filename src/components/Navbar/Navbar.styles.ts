import styled from "styled-components";

export const NavigationBar = styled.nav`
  position: fixed;
  background-color: var(--grey);
  transition: 200ms ease;
  z-index: 100;

  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    &:hover {
      width: 11rem;
    }
  }
  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
`;
