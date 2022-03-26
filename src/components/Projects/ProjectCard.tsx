import React, { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import { AnimatePresence } from "framer-motion";

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
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  const altText: string = `Background image for ${project.projectTitle} project.`;
  return (
    <ProjectCardWrapper
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => (modalOpen ? handleClose() : handleOpen())}
    >
      <h3>{project.projectTitle}</h3>
      <div>
        <ProjectCardImg
          src={require(`../../assets/projects/${project.projectImgPath}.webp`)}
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
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <ProjectModal project={project} handleClose={handleClose} />
        )}
      </AnimatePresence>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
