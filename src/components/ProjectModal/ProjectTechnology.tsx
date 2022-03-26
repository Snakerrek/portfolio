import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";

import { Technology } from "./ProjectTechnology.styles";

import { technologyNamesMap } from "../../Data";

type Props = {
  projectTechnology: { name: string; icon: IconType }[];
};

const ProjectTechnology = ({ projectTechnology }: Props): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Technology>
      {windowWidth > 600
        ? projectTechnology.map((tech, id) => (
            <p>
              <tech.icon key={id} />
              {technologyNamesMap.get(tech.name)}
            </p>
          ))
        : projectTechnology.map((tech, id) => (
            <p>
              <tech.icon key={id} />
            </p>
          ))}
    </Technology>
  );
};

export default ProjectTechnology;
