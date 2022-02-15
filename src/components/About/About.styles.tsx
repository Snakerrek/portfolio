import styled from "styled-components";

export const AboutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 800px;
  min-width: 300px;
  padding: 1rem;
  h2 {
    color: var(--lightBlue);
  }
`;
