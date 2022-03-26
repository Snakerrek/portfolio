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

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
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
        initial={{ opacity: 0, y: 60, scale: 0.5 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 300 },
        }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
        bgImage={require(`../../assets/projects/${project.projectImgPath}.webp`)}
      >
        <Content
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
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
