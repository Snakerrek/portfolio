import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 800px;
  text-align: center;
  flex: 1 1 400px;
  margin: 5px;

  border: double 4px transparent;
  border-radius: 15px;
  background-image: linear-gradient(
    to right bottom,
    var(--lightBlue),
    var(--darkBlue)
  );
  background-origin: border-box;

  h3 {
    margin: 10px;
    color: var(--lightBlue);
  }
`;

export const ProjectCardImg = styled.img`
  width: 95%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const ProjectTechnologyHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  padding: 10px;
  font-size: var(--fontBig);
  color: var(--lightBlue);
`;
