import React from "react";
import { IconType } from "react-icons";

import { Technology } from "./ProjectTechnology.styles";

import { technologyNamesMap } from "../../Data";

type Props = {
  projectTechnology: { name: string; icon: IconType }[];
};

const ProjectTechnology = ({ projectTechnology }: Props): JSX.Element => {
  return (
    <Technology>
      {projectTechnology.map((tech, id) => (
        <p>
          <tech.icon key={id} />
          {technologyNamesMap.get(tech.name)}
        </p>
      ))}
    </Technology>
  );
};

export default ProjectTechnology;
