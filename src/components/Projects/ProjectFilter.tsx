import React, { useEffect } from "react";

import { FilterContainer, FilterButton } from "./ProjectFilter.style";

import { projectFilterInterface } from "../../interfaces";

const ProjectFilter = ({
  technologyNamesForFilter,
  projects,
  setFilteredProjects,
  activeTechnology,
  setActiveTechnology,
}: projectFilterInterface): JSX.Element => {
  useEffect(() => {
    if (activeTechnology === "all") {
      setFilteredProjects(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.projectTechnology.includes(activeTechnology)
    );
    setFilteredProjects(filtered);
  }, [projects, activeTechnology, setFilteredProjects]);

  return (
    <FilterContainer>
      {technologyNamesForFilter.map((tech, id) => (
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
