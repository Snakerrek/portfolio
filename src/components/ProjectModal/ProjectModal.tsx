import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ProjectLinks from "./ProjectLinks";
import ProjectTechnology from "./ProjectTechnology";
import {
  ProjectModalWrapper,
  Content,
  Title,
  MainContent,
  SubContent,
} from "./ProjectModal.styles";
import { projectsDataInterface } from "../../interfaces";

const showModal = {
  hidden: { opacity: 0, y: 60, scale: 0.5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.6 } },
};

type Props = {
  project: projectsDataInterface;
  handleClose: () => void;
};

const ProjectModal = ({ project, handleClose }: Props): JSX.Element => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <ProjectModalWrapper
        onClick={(e) => e.stopPropagation()}
        variants={showModal}
        initial="hidden"
        animate="visible"
        exit="exit"
        bgImage={require(`../../assets/projects/${project.projectImgPath}.webp`)}
      >
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        >
          <Title>{project.projectTitle}</Title>
          <MainContent>
            <SubContent>
              <p>{project.projectDescription}</p>
            </SubContent>
            <SubContent>
              <ProjectTechnology
                projectTechnology={project.projectTechnology}
              />
            </SubContent>
          </MainContent>
          <ProjectLinks
            githubLink={project.projectGitHubLink}
            liveLink={project.projectLiveLink}
          />
        </Content>
      </ProjectModalWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default ProjectModal;
