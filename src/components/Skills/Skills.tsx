import React from "react";

import { SkillsWrapper, SkillsHolder, TextHolder } from "./Skills.styles";

import SkillCard from "./SkillCard";

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
    <SkillsWrapper>
      <TextHolder>
        <h2>My skills</h2>
      </TextHolder>
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
      {/* <h2>My skills</h2> */}
    </SkillsWrapper>
  );
};

export default Skills;
