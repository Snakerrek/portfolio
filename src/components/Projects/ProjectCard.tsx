import React from "react";

import {
  ProjectCardWrapper,
  ProjectCardImg,
  ProjectTechnologyHolder,
} from "./ProjectCard.styles";

import { projectsDataInterface } from "../../interfaces";

const ProjectCard = ({
  projectImgPath,
  projectTitle,
  projectDescription,
  projectTechnology,
  projectTechnologyIcons,
}: projectsDataInterface): JSX.Element => {
  const altText: string = `Background image for ${projectTitle} project.`;
  return (
    <ProjectCardWrapper>
      <h3>{projectTitle}</h3>
      <div>
        <ProjectCardImg
          src={require(`../../assets/projects/${projectImgPath}.png`)}
          alt={altText}
        />
      </div>
      <ProjectTechnologyHolder>
        {projectTechnologyIcons.map((TechIcon, id) => {
          return <TechIcon key={id} />;
        })}
      </ProjectTechnologyHolder>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
