import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiStyledcomponents,
  SiThreedotjs,
  SiCsharp,
  SiUnity,
  SiAndroid,
} from "react-icons/si";

import { MdPlace, MdMail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { BsGearWideConnected } from "react-icons/bs";
import { FaLaptopCode, FaUserAlt } from "react-icons/fa";

import {
  navbarDataInterface,
  homeSectionDataInterface,
  aboutMeSectionDataInterface,
  projectsDataInterface,
  skillsDataInterface,
  contactDataInterface,
} from "./interfaces";

const currentYear = new Date().getFullYear();
const gradientColorsArray = [
  "#F92CB0",
  "#1E3BFE",
  "#3EDFFF",
  "#7DFDFC",
  "#FFFFFF",
];

export const navbarData: navbarDataInterface[] = [
  { delayID: 1, icon: FaUserAlt, text: "About", link: "#about" },
  {
    delayID: 2,
    icon: BsGearWideConnected,
    text: "My Skills",
    link: "#mySkills",
  },
  { delayID: 3, icon: FaLaptopCode, text: "Projects", link: "#projects" },
  {
    delayID: 4,
    icon: MdOutlineConnectWithoutContact,
    text: "Contact",
    link: "#contact",
  },
];

export const homeSectionData: homeSectionDataInterface = {
  homeTextFirstLine: "Hi, I'm Tomasz",
  homeTextSecondLine: "Front-end Developer",
  delay: {
    startingValue: 500,
    incrementFactor: 100,
  },
  FFEconfig: {
    framesPerSecond: 60,
    cellSize: Math.random() * (22 - 18) + 18,
    lineWidth: Math.random() * (1.5 - 1) + 1,
    vr: Math.random() * (0.0225 - 0.0175) + 0.0175,
    gradientColors: [
      {
        offset: 0.1,
        color: gradientColorsArray[Math.floor(Math.random() * 4)],
      },
      {
        offset: 0.3,
        color: gradientColorsArray[Math.floor(Math.random() * 4)],
      },
      {
        offset: 0.5,
        color: gradientColorsArray[Math.floor(Math.random() * 4)],
      },
      {
        offset: 0.7,
        color: gradientColorsArray[Math.floor(Math.random() * 4)],
      },
      {
        offset: 0.9,
        color: gradientColorsArray[Math.floor(Math.random() * 4)],
      },
    ],
    sizeOfMouse: 25,
    lineLength: { min: 5, max: 60 },
    angleMultiplier: {
      x: Math.random() * (0.01 - 0.004) + 0.004,
      y: Math.random() * (0.01 - 0.004) + 0.004,
    },
    radiusClampValues: { min: -6, max: 6 },
  },
};

export const aboutMeSectionData: aboutMeSectionDataInterface = {
  title: "About me",
  aboutMeText: [
    `I'm ${
      currentYear - 1999
    } years old Computer Science student at Politechnika Częstochowska. `,
    `I started my adventure with programming by creating games using the unity engine, then I tried my hand at creating websites and web applications. In a short time I discovered that this is something I'm truly fascinated with. Every day I try to become better than the day before.`,
    `Programming is my biggest passion, but not the only one, I love to spend my free time reading books and playing games (especially fantasy/sci-fi genres are close to my heart).`,
  ],
  object3Dconfig: {
    scale: 0.035,
    modelPath: "/wraith.glb",
  },
};

export const skillsData: skillsDataInterface[] = [
  {
    skillName: "js",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#ffeb59", bottom: "#e5c10b" },
  },
  {
    skillName: "ts",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#205493", bottom: "#093061" },
  },
  {
    skillName: "react",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#181C20", bottom: "#000000" },
  },
  {
    skillName: "css",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#205493", bottom: "#093061" },
  },
  {
    skillName: "bootstrap",
    stageOfAdvancement: "Basic knowledge",
    backgroundColors: { top: "#672079", bottom: "#472C73" },
  },
  {
    skillName: "html",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#F08129", bottom: "#E75726" },
  },
  {
    skillName: "c-sharp",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#672079", bottom: "#472C73" },
  },
  {
    skillName: "unity",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#181C20", bottom: "#000000" },
  },
  {
    skillName: "android",
    stageOfAdvancement: "Basic knowledge",
    backgroundColors: { top: "#7fa013", bottom: "#526b00" },
  },
  {
    skillName: "styled-components",
    stageOfAdvancement: "Basic knowledge",
    backgroundColors: { top: "#F2B462", bottom: "#DB7390" },
  },
  {
    skillName: "three-js",
    stageOfAdvancement: "Basic knowledge",
    backgroundColors: { top: "#ffeb59", bottom: "#e5c10b" },
  },
];

export const technologyNamesForFilter: string[] = [
  "all",
  "html",
  "css",
  "js",
  "ts",
  "react",
  "bootstrap",
  "styled-components",
  "three-js",
  "c-sharp",
  "unity",
  "android",
];

export const projectsData: projectsDataInterface[] = [
  {
    projectImgPath: "portfolio-website",
    projectLiveLink: "",
    projectGitHubLink: "",
    projectTitle: "Portfolio website",
    projectDescription: "",
    projectTechnology: [
      "html",
      "css",
      "ts",
      "react",
      "styled-components",
      "three-js",
    ],
    projectTechnologyIcons: [
      SiHtml5,
      SiCss3,
      SiTypescript,
      SiReact,
      SiStyledcomponents,
      SiThreedotjs,
    ],
  },
  {
    projectImgPath: "project-tracker",
    projectLiveLink: "https://snakerrek.github.io/project-tracker/",
    projectGitHubLink: "https://github.com/Snakerrek/project-tracker",
    projectTitle: "Project tracker",
    projectDescription:
      "Single-page react application that helps you track progress of your projects.",
    projectTechnology: ["html", "css", "js", "react", "styled-components"],
    projectTechnologyIcons: [
      SiHtml5,
      SiCss3,
      SiJavascript,
      SiReact,
      SiStyledcomponents,
    ],
  },
  {
    projectImgPath: "coffee-lovers",
    projectLiveLink: "https://snakerrek.github.io/coffee-website/",
    projectGitHubLink: "https://github.com/Snakerrek/coffee-website",
    projectTitle: "Coffee lovers",
    projectDescription: "Single-page website for coffee lovers.",
    projectTechnology: ["html", "css", "js", "bootstrap"],
    projectTechnologyIcons: [SiHtml5, SiCss3, SiJavascript, SiBootstrap],
  },
  {
    projectImgPath: "stacja-diagnostyczna",
    projectLiveLink: "http://www.stacja.zsnr1-klobuck.edu.pl/",
    projectGitHubLink: "https://github.com/Snakerrek/stacja-diagnostyczna",
    projectTitle: "Stacja diagnostyczna",
    projectDescription:
      "A commercial application for vehicle inspection station.",
    projectTechnology: ["html", "css", "js"],
    projectTechnologyIcons: [SiHtml5, SiCss3, SiJavascript],
  },
  {
    projectImgPath: "word-counter",
    projectLiveLink: "https://snakerrek.github.io/Word-Counter/",
    projectGitHubLink: "https://github.com/Snakerrek/Word-Counter",
    projectTitle: "Word counter",
    projectDescription:
      "The application breaks down the given text into characters, words, sentences and paragraphs. Gives also approximate time of read.",
    projectTechnology: ["html", "css", "js"],
    projectTechnologyIcons: [SiHtml5, SiCss3, SiJavascript],
  },
  {
    projectImgPath: "password-generator",
    projectLiveLink: "https://snakerrek.github.io/password-generator/",
    projectGitHubLink: "https://github.com/Snakerrek/password-generator",
    projectTitle: "Password generator",
    projectDescription:
      "The application generates passwords according to the parameters set by the user and can also check the password strength.",
    projectTechnology: ["html", "css", "js"],
    projectTechnologyIcons: [SiHtml5, SiCss3, SiJavascript],
  },
  {
    projectImgPath: "project-umbra",
    projectLiveLink: "",
    projectGitHubLink: "https://github.com/Snakerrek/Project-Umbra",
    projectTitle: "Project Umbra",
    projectDescription:
      "2D space shooter with random world generation, enemies and much more.",
    projectTechnology: ["c-sharp", "unity"],
    projectTechnologyIcons: [SiCsharp, SiUnity],
  },
  {
    projectImgPath: "flappit",
    projectLiveLink:
      "https://play.google.com/store/apps/details?id=com.Snakerrek.Flappit&gl=PL",
    projectGitHubLink: "https://github.com/Snakerrek/Flappit-Android",
    projectTitle: "Flappit",
    projectDescription:
      "Android game made in C# with Unity engine, simple arcade game based on original Flappy Bird.",
    projectTechnology: ["c-sharp", "unity", "android"],
    projectTechnologyIcons: [SiCsharp, SiUnity, SiAndroid],
  },
  {
    projectImgPath: "spinning-shapes",
    projectLiveLink:
      "https://play.google.com/store/apps/details?id=com.Snakerrek.SpinningShapes",
    projectGitHubLink: "https://github.com/Snakerrek/Spinning-Shapes",
    projectTitle: "Spinning Shapes",
    projectDescription: "Super Hexagon clone for Android.",
    projectTechnology: ["c-sharp", "unity", "android"],
    projectTechnologyIcons: [SiCsharp, SiUnity, SiAndroid],
  },
  {
    projectImgPath: "voxel-world-generator",
    projectLiveLink: "",
    projectGitHubLink: "https://github.com/Snakerrek/Voxel-World-Generator",
    projectTitle: "Voxel world generator",
    projectDescription:
      "Unity application that generates random voxel worlds (built with cube blocks).",
    projectTechnology: ["c-sharp", "unity"],
    projectTechnologyIcons: [SiCsharp, SiUnity],
  },
];

export const contactData: contactDataInterface = {
  links: [
    {
      icon: MdMail,
      text: "tomasz.kraszewski1999@gmail.com",
      link: "mailto:tomasz.kraszewski1999@gmail.com",
    },
    {
      icon: FaLinkedinIn,
      text: "linkedin.com/in/tomaszkraszewski",
      link: "https://www.linkedin.com/in/tomaszkraszewski",
    },
    {
      icon: FaGithub,
      text: "github.com/Snakerrek",
      link: "https://github.com/Snakerrek",
    },
    {
      icon: MdPlace,
      text: "Częstochowa, Poland",
      link: "",
    },
  ],
  backgroundCanvasConfig: {
    particleDensity: 20,
    particleSize: { min: 3, max: 10 },
    particleColor: "#1C11A4",
    lineColor: "28,32,255",
    lineWidth: 2,
  },
};
