import React from "react";

import { Links, Link } from "./ProjectLinks.styles";

type Props = {
  githubLink: string;
  liveLink: string;
};

const ProjectButtons = ({ githubLink, liveLink }: Props): JSX.Element => {
  return (
    <Links>
      <a target="_blank" rel="noopener noreferrer" href={githubLink}>
        <Link linkType="Code">Code</Link>
      </a>
      {liveLink !== "" && (
        <a target="_blank" rel="noopener noreferrer" href={liveLink}>
          <Link linkType="Live">Live</Link>
        </a>
      )}
    </Links>
  );
};

export default ProjectButtons;
