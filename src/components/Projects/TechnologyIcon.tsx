import React from "react";

import { TechnologyIconImg } from "./TechnologyIcon.styles";

type Props = { techIcon: string };

const TechnologyIcon = ({ techIcon }: Props) => {
  return (
    <TechnologyIconImg
      src={require(`../../assets/skills/${techIcon}.png`)}
      alt={`${techIcon} logo`}
    />
  );
};

export default TechnologyIcon;
