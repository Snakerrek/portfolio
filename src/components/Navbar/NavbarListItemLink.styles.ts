import styled from "styled-components";

export const NavbarListItemLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--white);
  min-width: 2rem;
  padding: 0 1.5rem;
  font-size: var(--fontBig);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 200ms ease;

  &:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--darkGrey);
    div {
      color: var(--lightBlue);
    }
  }

  span {
    display: none;
    opacity: 0;
    margin-left: 1rem;
    font-size: var(--fontMedium);
    font-family: "Work Sans", sans-serif;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const NavbarListItemIcon = styled.div`
  min-width: 32px;
  transition: 500ms ease;
`;
