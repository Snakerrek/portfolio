import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  width: 100%;
  padding: 20px 20px 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;

  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;
