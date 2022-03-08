import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  text-align: center;
  background: var(--grey);

  h3 {
    margin: 10px;
  }
`;

export const ProjectCardImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const ProjectTechnologyHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
`;
