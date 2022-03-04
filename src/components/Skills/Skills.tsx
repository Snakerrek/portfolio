import React from "react";

import { SkillsHolder } from "./Skills.styles";

import SkillCard from "./SkillCard";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const skillsData: {
  skillName: string;
  backgroundColors: {
    top: string;
    bottom: string;
  };
}[] = [
  { skillName: "js", backgroundColors: { top: "#ffeb59", bottom: "#e5c10b" } },
  { skillName: "ts", backgroundColors: { top: "#205493", bottom: "#093061" } },
  {
    skillName: "react",
    backgroundColors: { top: "#181C20", bottom: "#000000" },
  },
  { skillName: "css", backgroundColors: { top: "#205493", bottom: "#093061" } },
  {
    skillName: "bootstrap",
    backgroundColors: { top: "#672079", bottom: "#472C73" },
  },
  {
    skillName: "html",
    backgroundColors: { top: "#F08129", bottom: "#E75726" },
  },
  {
    skillName: "c-sharp",
    backgroundColors: { top: "#672079", bottom: "#472C73" },
  },
  {
    skillName: "unity",
    backgroundColors: { top: "#181C20", bottom: "#000000" },
  },
  {
    skillName: "android",
    backgroundColors: { top: "#7fa013", bottom: "#526b00" },
  },
  {
    skillName: "styled-components",
    backgroundColors: { top: "#F2B462", bottom: "#DB7390" },
  },
];

const Skills = () => {
  return (
    <SectionWrapper
      title={"My skills"}
      children={
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
      }
    ></SectionWrapper>
  );
};

export default Skills;
