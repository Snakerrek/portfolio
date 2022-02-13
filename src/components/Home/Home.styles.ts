import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: absolute;
  top: 250px;

  padding-left: 5rem;
  @media only screen and (max-width: 600px) {
    padding-bottom: 5rem;
    padding-left: 0;
  }

  p {
    margin: 0 1rem;
  }

  h2 {
    margin: 0 1rem 1rem 1rem;
    font-size: 2.75rem;

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
  h3 {
    margin: 1rem;
    font-size: 1.51rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`;

export const HomeWrap = styled.div`
  position: relative;
`;
