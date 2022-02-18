import styled from "styled-components";

export const SkillsWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const TextHolder = styled.div`
  writing-mode: vertical-lr;
  text-align: center;
  color: var(--lightBlue);
  @media screen and (max-width: 445px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export const SkillsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: blue;
`;
