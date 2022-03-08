import React from "react";

import { Card } from "./SkillCard.styles";

import { skillsDataInterface } from "../../interfaces";

const SkillCard = ({
  skillName,
  backgroundColors,
}: skillsDataInterface): JSX.Element => {
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
