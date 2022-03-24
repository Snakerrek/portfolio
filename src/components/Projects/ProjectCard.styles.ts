import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 800px;
  text-align: center;
  flex: 1 1 400px;
  margin: 15px;
  transition: 0.3s ease;

  border: double 4px transparent;
  border-radius: 15px;
  background-image: linear-gradient(
    to bottom,
    rgba(69, 253, 245, 0.7),
    rgba(12, 12, 12, 0.1) 45%
  );
  background-origin: border-box;

  h3 {
    margin: 10px;
    color: var(--white);
  }

  &:hover {
    cursor: pointer;
    transform: scale3d(1.03, 1.03, 1.03);
  }
`;

export const ProjectCardImg = styled.img`
  width: 95%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
  aspect-ratio: 16/9;
`;

export const ProjectTechnologyHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  padding: 10px;
  font-size: var(--fontBig);
  color: var(--white);

  & svg:hover {
    color: var(--lightBlue);
    cursor: pointer;
  }
`;
