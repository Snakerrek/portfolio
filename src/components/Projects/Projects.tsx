import React, { useState } from "react";

import { ProjectsWrapper } from "./Projects.styles";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const projectsData: {
  projectTitle: string;
  projectDescription: string;
  projectTechnology: string[];
}[] = [
  {
    projectTitle: "Project 1",
    projectDescription: "Some kind of description",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectTitle: "Project 2",
    projectDescription: "Some kind of description 2",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectTitle: "Project 3",
    projectDescription: "Some kind of description 3",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectTitle: "Project 1",
    projectDescription: "Some kind of description",
    projectTechnology: ["html", "css"],
  },
  {
    projectTitle: "Project 2",
    projectDescription: "Some kind of description 2",
    projectTechnology: ["js", "html"],
  },
  {
    projectTitle: "Project 3",
    projectDescription: "Some kind of description 3",
    projectTechnology: ["js", "css"],
  },
  {
    projectTitle: "Project 1",
    projectDescription: "Some kind of description",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectTitle: "Project 2",
    projectDescription: "Some kind of description 2",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectTitle: "Project 3",
    projectDescription: "Some kind of description 3",
    projectTechnology: ["js", "html", "css"],
  },
];

const Projects = () => {
  const projects = projectsData;
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeTechnology, setActiveTechnology] = useState("all");

  return (
    <SectionWrapper title={"My projects"}>
      <>
        <ProjectFilter
          projects={projects}
          setFilteredProjects={setFilteredProjects}
          activeTechnology={activeTechnology}
          setActiveTechnology={setActiveTechnology}
        />
        <ProjectsWrapper>
          {filteredProjects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </ProjectsWrapper>
      </>
    </SectionWrapper>
  );
};

export default Projects;
