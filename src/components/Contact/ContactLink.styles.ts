import styled from "styled-components";

export const Link = styled.a`
  text-decoration: none;
  color: var(--white);
`;

export const ContactLinkWrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: var(--grey);
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  margin-bottom: 25px;
  transition: 300ms ease;
  border: solid 2px var(--grey);
  cursor: pointer;

  :hover {
    border: solid 2px var(--lightBlue);
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 0 1rem;

    & p {
      margin: 0 0 10px 0;
    }
  }
`;

export const Icon = styled.div`
  color: var(--white);
  background-color: var(--darkGrey);
  padding: 1.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    width: 2rem;
    font-size: 1.75rem;
  }

  @media screen and (max-width: 500px) {
    padding: 0.8rem;
    svg {
      width: 1.5rem;
      font-size: 1.25rem;
    }
  }
`;

export const Info = styled.div`
  & p {
    font-size: var(--fontMedium);
  }

  @media screen and (max-width: 500px) {
    & p {
      font-size: var(--fontSmall);
    }
  }
`;
