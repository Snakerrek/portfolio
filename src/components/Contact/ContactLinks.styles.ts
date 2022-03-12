import styled from "styled-components";

export const ContactLinksWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 30px;

  @media screen and (max-width: 1100px) {
    max-width: 600px;
    padding: 4rem 2rem 2rem 2rem;
  }
  @media screen and (max-width: 750px) {
    max-width: 100%;
  }
`;
