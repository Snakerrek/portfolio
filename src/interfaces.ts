export interface navbarDataInterface {
  delayID: number;
  icon: IconType;
  text: string;
  link: string;
}

export interface homeSectionDataInterface {
  homeTextFirstLine: string;
  homeTextSecondLine: string;
  delay: {
    startingValue: number;
    incrementFactor: number;
  };
  FFEconfig: FFEconfigInterface;
}

export interface FFEconfigInterface {
  framesPerSecond: number;
  cellSize: number; // >10 for best performance
  lineWidth: number;
  vr: number; // velocity of how fast radius changes
  gradientColors: { offset: number; color: string }[]; // example [{0.1, "#ff5c33"}, {0.2, "#ff66b3"}]
  sizeOfMouse: number; // something between 10-50 for best result
  lineLength: { min: number; max: number };
  angleMultiplier: { x: number; y: number };
  radiusClampValues: { min: number; max: number };
}

export interface aboutMeSectionDataInterface {
  title: string;
  aboutMeText: string[];
  object3Dconfig: {
    scale: number;
    scalingValue: number;
    modelPath: string;
  };
}

export interface skillsDataInterface {
  skillName: string;
  stageOfAdvancement: string;
  backgroundColors: {
    top: string;
    bottom: string;
  };
}

import { IconType } from "react-icons";
export interface projectsDataInterface {
  projectImgPath: string;
  projectLiveLink: string;
  projectGitHubLink: string;
  projectTitle: string;
  projectDescription: string;
  projectTechnology: { name: string; icon: IconType }[];
}

export interface projectFilterInterface {
  technologyNamesForFilter: string[];
  projects: projectsDataInterface[];
  setFilteredProjects: React.Dispatch<
    React.SetStateAction<projectsDataInterface[]>
  >;
  activeTechnology: string;
  setActiveTechnology: React.Dispatch<React.SetStateAction<string>>;
}

export interface contactDataInterface {
  links: contactDataLinkInterface[];
  backgroundCanvasConfig: backgroundCanvasConfigInterface;
}
export interface contactDataLinkInterface {
  icon: IconType;
  text: string;
  link: string;
}
export interface backgroundCanvasConfigInterface {
  particleDensity: number;
  particleSize: { min: number; max: number }; // best 3-10
  particleColor: string; // hexadecimal
  lineColor: string; // rgb must be written like "28,32,255"
  lineWidth: number; // best 2
}
