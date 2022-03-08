import React from "react";

import {
  ProjectCardWrapper,
  ProjectCardImg,
  ProjectTechnologyHolder,
} from "./ProjectCard.styles";

import TechnologyIcon from "./TechnologyIcon";

import { projectsDataInterface } from "../../interfaces";

const ProjectCard = ({
  projectImgPath,
  projectTitle,
  projectDescription,
  projectTechnology,
}: projectsDataInterface): JSX.Element => {
  const altText: string = `Background image for ${projectTitle} project.`;
  return (
    <ProjectCardWrapper>
      <h3>{projectTitle}</h3>
      <ProjectCardImg src={projectImgPath} alt={altText} />
      <ProjectTechnologyHolder>
        {projectTechnology.map((techIcon, id) => {
          return <TechnologyIcon key={id} techIcon={techIcon} />;
        })}
      </ProjectTechnologyHolder>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
