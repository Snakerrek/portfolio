import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 601px) {
    & {
      min-height: 100vh;
    }
  }
`;

export const TitleHolder = styled.div`
  writing-mode: horizontal-tb;
  color: var(--lightBlue);
`;
