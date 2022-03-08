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

import {
  homeSectionDataInterface,
  aboutMeSectionDataInterface,
  projectsDataInterface,
  skillsDataInterface,
} from "./interfaces";

export const homeSectionData: homeSectionDataInterface = {
  homeTextFirstLine: "Hi, I'm Tomasz",
  homeTextSecondLine: "Front-end Developer",
  delay: {
    startingValue: 500,
    incrementFactor: 100,
  },
  FFEconfig: {
    framesPerSecond: 60,
    cellSize: 20,
    lineWidth: 1.5,
    vr: 0.02,
    gradientColors: [
      { offset: 0.1, color: "#F92CB0" },
      { offset: 0.3, color: "#1E3BFE" },
      { offset: 0.5, color: "#3EDFFF" },
      { offset: 0.7, color: "#7DFDFC" },
      { offset: 0.9, color: "#FFFFFF" },
    ],
    sizeOfMouse: 25,
    lineLength: { min: 5, max: 60 },
    angleMultiplier: { x: 0.005, y: 0.005 },
    radiusClampValues: { min: -6, max: 6 },
  },
};

export const aboutMeSectionData: aboutMeSectionDataInterface = {
  title: "About me",
  aboutMeText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna sapien, mattis ac enim at, accumsan accumsan sem. Pellentesque vitae varius dolor. Curabitur lacinia metus nunc, a vulputate augue tempus non. Praesent vitae metus ac mi convallis hendrerit. Maecenas blandit ex eget lorem congue tempor vel at nulla. Suspendisse turpis dui, euismod ut sapien et, sodales sodales risus. Maecenas mattis, urna vitae suscipit scelerisque, eros leo consequat velit, sed rhoncus odio arcu eu massa. Aliquam eget suscipit eros. Praesent tincidunt consectetur vehicula. Nunc vitae nulla felis.",
  object3Dconfig: {
    scale: 0.035,
    modelPath: "/wraith.glb",
  },
};

export const skillsData: skillsDataInterface[] = [
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
  {
    skillName: "three-js",
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
