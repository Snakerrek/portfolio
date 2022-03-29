import React from "react";

import { Links, Link } from "./ProjectLinks.styles";
import { isOnMobile } from "../../helpers";

type Props = {
  githubLink: string;
  liveLink: string;
};

const ProjectButtons = ({ githubLink, liveLink }: Props): JSX.Element => {
  if (isOnMobile()) {
    return (
      <Links>
        <a href={githubLink}>
          <Link linkType="Code">Code</Link>
        </a>
        {liveLink !== "" && (
          <a href={liveLink}>
            <Link linkType="Live">Live</Link>
          </a>
        )}
      </Links>
    );
  } else {
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
  }
};

export default ProjectButtons;
