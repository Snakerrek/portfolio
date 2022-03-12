import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 3rem;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 70%;
    background-color: var(--white);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
