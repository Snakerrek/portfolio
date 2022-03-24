import React from "react";

import {
  ProjectCardWrapper,
  ProjectCardImg,
  ProjectTechnologyHolder,
} from "./ProjectCard.styles";

import { projectsDataInterface } from "../../interfaces";

type Props = {
  project: projectsDataInterface;
  setActiveTechnology: React.Dispatch<React.SetStateAction<string>>;
};

const ProjectCard = ({ project, setActiveTechnology }: Props): JSX.Element => {
  const altText: string = `Background image for ${project.projectTitle} project.`;
  return (
    <ProjectCardWrapper>
      <h3>{project.projectTitle}</h3>
      <div>
        <ProjectCardImg
          src={require(`../../assets/projects/${project.projectImgPath}.png`)}
          alt={altText}
        />
      </div>
      <ProjectTechnologyHolder>
        {project.projectTechnology.map((tech, id) => {
          return (
            <tech.icon
              key={id}
              onClick={() => setActiveTechnology(tech.name)}
            />
          );
        })}
      </ProjectTechnologyHolder>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
