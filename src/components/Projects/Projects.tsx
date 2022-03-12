import React, { useState } from "react";

import { ProjectsWrapper } from "./Projects.styles";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

import { projectsDataInterface } from "../../interfaces";

type Props = {
  technologyNamesForFilter: string[];
  projectsData: projectsDataInterface[];
};

const Projects = ({
  technologyNamesForFilter,
  projectsData,
}: Props): JSX.Element => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeTechnology, setActiveTechnology] = useState("all");

  return (
    <SectionWrapper title={"My projects"} scrollDown={true}>
      <>
        <ProjectFilter
          projects={projectsData}
          setFilteredProjects={setFilteredProjects}
          activeTechnology={activeTechnology}
          setActiveTechnology={setActiveTechnology}
          technologyNamesForFilter={technologyNamesForFilter}
        />
        <ProjectsWrapper>
          {filteredProjects.map((project, id) => {
            return <ProjectCard key={id} {...project} />;
          })}
        </ProjectsWrapper>
      </>
    </SectionWrapper>
  );
};

export default Projects;
