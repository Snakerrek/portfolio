import React, { useEffect } from "react";

import { FilterContainer, FilterButton } from "./ProjectFilter.style";

const technology: string[] = [
  "all",
  "html",
  "css",
  "js",
  "ts",
  "react",
  "bootstrap",
  "styled-components",
  "c-sharp",
  "unity",
  "android",
];

type Props = {
  projects: {
    projectTitle: string;
    projectDescription: string;
    projectTechnology: string[];
  }[];
  setFilteredProjects: React.Dispatch<
    React.SetStateAction<
      {
        projectTitle: string;
        projectDescription: string;
        projectTechnology: string[];
      }[]
    >
  >;
  activeTechnology: string;
  setActiveTechnology: React.Dispatch<React.SetStateAction<string>>;
};

const ProjectFilter = ({
  projects,
  setFilteredProjects,
  activeTechnology,
  setActiveTechnology,
}: Props) => {
  useEffect(() => {
    if (activeTechnology === "all") {
      setFilteredProjects(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.projectTechnology.includes(activeTechnology)
    );
    setFilteredProjects(filtered);
  }, [activeTechnology]);

  return (
    <FilterContainer>
      {technology.map((tech, id) => (
        <FilterButton
          key={id}
          active={activeTechnology === tech ? true : false}
          onClick={() => setActiveTechnology(tech)}
        >
          {tech}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default ProjectFilter;
