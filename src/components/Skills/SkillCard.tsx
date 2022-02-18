import React from "react";

import { Card } from "./SkillCard.styles";

interface Props {
  skillName: string;
  backgroundColors: {
    bottom: string;
    top: string;
  };
}

const SkillCard: React.FC<Props> = ({ skillName, backgroundColors }) => {
  return (
    <Card topColor={backgroundColors.top} bottomColor={backgroundColors.bottom}>
      <img
        src={require(`../../assets/skills/${skillName}.png`)}
        alt={`${skillName} logo`}
      ></img>
    </Card>
  );
};

export default SkillCard;
