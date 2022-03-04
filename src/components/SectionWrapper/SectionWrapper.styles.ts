import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 601px) {
    & {
      flex-direction: row;
      min-height: 100vh;
    }
  }
`;

export const TitleHolder = styled.div`
  writing-mode: vertical-lr;
  text-align: center;
  color: var(--lightBlue);
  @media screen and (max-width: 600px) {
    & {
      writing-mode: horizontal-tb;
    }
  }
`;
