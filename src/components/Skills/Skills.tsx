import React from "react";

import { SkillsHolder } from "./Skills.styles";

import SkillCard from "./SkillCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

import { skillsDataInterface } from "../../interfaces";

type Props = {
  skillsData: skillsDataInterface[];
};

const Skills = ({ skillsData }: Props): JSX.Element => {
  return (
    <SectionWrapper title={"My skills"}>
      <SkillsHolder>
        {skillsData.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              skillName={skill.skillName}
              backgroundColors={skill.backgroundColors}
            />
          );
        })}
      </SkillsHolder>
    </SectionWrapper>
  );
};

export default Skills;
