import styled from "styled-components";

export const AboutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 600px;
  width: 400px;
  padding: 1rem;
  flex: 1 1 auto;
  h2 {
    color: var(--lightBlue);
  }
`;
