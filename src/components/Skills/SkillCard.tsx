import React from "react";

import { Card, AdvancementTextContainer } from "./SkillCard.styles";

import { skillsDataInterface } from "../../interfaces";

const SkillCard = ({
  skillName,
  stageOfAdvancement,
  backgroundColors,
}: skillsDataInterface): JSX.Element => {
  return (
    <Card topColor={backgroundColors.top} bottomColor={backgroundColors.bottom}>
      <AdvancementTextContainer>
        <h3>
          <span>{stageOfAdvancement}</span>
        </h3>
      </AdvancementTextContainer>
      <img
        src={require(`../../assets/skills/${skillName}.webp`)}
        alt={`${skillName} logo`}
      ></img>
    </Card>
  );
};

export default SkillCard;
