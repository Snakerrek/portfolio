import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectCardWrapper = styled(motion.div)`
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 700px;
  text-align: center;
  flex: 1 1 400px;
  margin: 15px;

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
    transition: 0.3s ease;
    color: var(--lightBlue);
    cursor: pointer;
  }
`;
