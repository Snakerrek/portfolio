import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const TextHolder = styled.div`
  max-width: 600px;
  width: 400px;
  padding: 1rem;
  flex: 1 1 auto;
  h2 {
    color: var(--lightBlue);
  }
  @media screen and (max-width: 650px) {
    & {
      width: 300px;
    }
    p {
      font-size: var(--fontMedium);
    }
  }
`;
