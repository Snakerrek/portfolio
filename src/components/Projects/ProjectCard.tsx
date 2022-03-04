import React from "react";

import {
  ProjectCardWrapper,
  ProjectCardImg,
  ProjectTechnologyHolder,
} from "./ProjectCard.styles";

import TechnologyIcon from "./TechnologyIcon";

type Props = {
  project: {
    projectTitle: string;
    projectDescription: string;
    projectTechnology: string[];
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <ProjectCardWrapper>
      <h3>{project.projectTitle}</h3>
      <ProjectCardImg
        src="https://cdn.pixabay.com/photo/2020/03/26/10/58/norway-4970080_960_720.jpg"
        alt=""
      />
      <ProjectTechnologyHolder>
        {project.projectTechnology.map((techIcon, id) => {
          return <TechnologyIcon key={id} techIcon={techIcon} />;
        })}
      </ProjectTechnologyHolder>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
