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
  SiNodedotjs,
  SiMongodb
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
  homeTextSecondLine: "Full-stack Developer",
  delay: {
    startingValue: 500,
    incrementFactor: 100,
  },
  FFEconfig: {
    framesPerSecond: 60,
    cellSize: Math.random() * (20 - 18) + 18,
    lineWidth: Math.random() * (1 - 0.75) + 0.75,
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
    `I’m a Full-stack developer at ISO Gruppe, where I work on applications with reservation systems for clients such as Legoland, YelloSun, and various travel agencies. `,
    `I hold an engineering degree and am currently pursuing a master’s degree in Computer Science at WSB Merito.`,
    `I started my adventure with programming by creating games using the unity engine, then I tried my hand at creating websites and web applications. In a short time, I discovered that this is something I'm truly fascinated with. Every day I try to become better than the day before.`,
    `Programming is my biggest passion, but not the only one, I love to spend my free time reading books and playing games (especially fantasy/sci-fi genres are close to my heart).`,
  ],
  object3Dconfig: {
    scale: 0.4,
    scalingValue: -0.0005,
    modelPath: "/me.glb",
  },
};

export const skillsData: skillsDataInterface[] = [
  {
    skillName: "react",
    stageOfAdvancement: "Expert knowledge",
    backgroundColors: { top: "#181C20", bottom: "#000000" },
  },
  {
    skillName: "ts",
    stageOfAdvancement: "Expert knowledge",
    backgroundColors: { top: "#205493", bottom: "#093061" },
  },
  {
    skillName: "js",
    stageOfAdvancement: "Expert knowledge",
    backgroundColors: { top: "#ffeb59", bottom: "#e5c10b" },
  },
  {
    skillName: "java",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#F08129", bottom: "#E75726" },
  },
  {
    skillName: "spring",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#7fa013", bottom: "#526b00" },
  },
  {
    skillName: "html",
    stageOfAdvancement: "Expert knowledge",
    backgroundColors: { top: "#F08129", bottom: "#E75726" },
  },
  {
    skillName: "css",
    stageOfAdvancement: "Expert knowledge",
    backgroundColors: { top: "#205493", bottom: "#093061" },
  },
  {
    skillName: "bootstrap",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#672079", bottom: "#472C73" },
  },
  {
    skillName: "nodejs",
    stageOfAdvancement: "Basic knowledge",
    backgroundColors: { top: "#7fa013", bottom: "#526b00" },
  },
  {
    skillName: "unity",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#181C20", bottom: "#000000" },
  },
  {
    skillName: "c-sharp",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#672079", bottom: "#472C73" },
  },
  {
    skillName: "mongodb",
    stageOfAdvancement: "Basic knowledge",
    backgroundColors: { top: "#7fa013", bottom: "#526b00" },
  },
  {
    skillName: "git",
    stageOfAdvancement: "Good knowledge",
    backgroundColors: { top: "#F08129", bottom: "#E75726" },
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
    projectImgPath: "book-app",
    projectLiveLink: "",
    projectGitHubLink: "https://github.com/Snakerrek/book-app",
    projectTitle: "Book App",
    projectDescription: `This application is similar to Goodreads, essentially functioning as a social platform for book readers. 
    I developed it as part of my engineering thesis. It was built using React, TypeScript, Node.js, and MongoDB.`,
    projectTechnology: [
      { name: "html", icon: SiHtml5 },
      { name: "css", icon: SiCss3 },
      { name: "ts", icon: SiTypescript },
      { name: "react", icon: SiReact },
      { name: "styled-components", icon: SiStyledcomponents },
      { name: "nodejs", icon: SiNodedotjs },
      { name: "mongodb", icon: SiMongodb },
    ],
  },
  {
    projectImgPath: "portfolio-website",
    projectLiveLink: "#",
    projectGitHubLink: "https://github.com/Snakerrek/portfolio",
    projectTitle: "Portfolio website",
    projectDescription: `This is the page you are currently on. 
    It was created using HTML, CSS, React, Typescript, Styled Components, and Three.js. 
    The homepage and contact page were created using HTML Canvas. 
    The 3D object is rendered using Three.js library. 
    Part of the animation was done using pure CSS and part using Framer-motion library. 
    E-mail contact is realized through EmailJS API.`,
    projectTechnology: [
      { name: "html", icon: SiHtml5 },
      { name: "css", icon: SiCss3 },
      { name: "ts", icon: SiTypescript },
      { name: "react", icon: SiReact },
      { name: "styled-components", icon: SiStyledcomponents },
      { name: "three-js", icon: SiThreedotjs },
    ],
  },
  {
    projectImgPath: "project-tracker",
    projectLiveLink: "https://snakerrek.github.io/project-tracker/",
    projectGitHubLink: "https://github.com/Snakerrek/project-tracker",
    projectTitle: "Project tracker",
    projectDescription: `A single-page application that helps you 
    track the progress of your projects. It's written in React with the usage of HTML, CSS,
    Javascript, and Styled Components. It features adding multiple projects, and
    freely switching between them. Users can personalize every project by setting: Title, description, 
    and background image. You can measure time spent on particular projects, as well as manage tasks 
    that you have to perform. All data that is necessary is stored in local storage.`,
    projectTechnology: [
      { name: "html", icon: SiHtml5 },
      { name: "css", icon: SiCss3 },
      { name: "js", icon: SiJavascript },
      { name: "react", icon: SiReact },
      { name: "styled-components", icon: SiStyledcomponents },
    ],
  },
  {
    projectImgPath: "coffee-lovers",
    projectLiveLink: "https://snakerrek.github.io/coffee-website/",
    projectGitHubLink: "https://github.com/Snakerrek/coffee-website",
    projectTitle: "Coffee lovers",
    projectDescription: `A website that could be a landing page 
    for a coffee brand. It is written with the usage of HTML, CSS, 
    JS, and Bootstrap. It implements a mechanism that allows users 
    to manage their brewing recipes on the page. All data is stored 
    in local storage.`,
    projectTechnology: [
      { name: "html", icon: SiHtml5 },
      { name: "css", icon: SiCss3 },
      { name: "js", icon: SiJavascript },
      { name: "bootstrap", icon: SiBootstrap },
    ],
  },
  {
    projectImgPath: "stacja-diagnostyczna",
    projectLiveLink: "http://www.stacja.zsnr1-klobuck.edu.pl/",
    projectGitHubLink: "https://github.com/Snakerrek/stacja-diagnostyczna",
    projectTitle: "Stacja diagnostyczna",
    projectDescription: `A commercial website for vehicle inspection station. 
      The purpose of this site was to present the station, 
      its employees, and the services it offers. 
      It is written with the usage of HTML, CSS, JS.`,
    projectTechnology: [
      { name: "html", icon: SiHtml5 },
      { name: "css", icon: SiCss3 },
      { name: "js", icon: SiJavascript },
    ],
  },
  {
    projectImgPath: "word-counter",
    projectLiveLink: "https://snakerrek.github.io/Word-Counter/",
    projectGitHubLink: "https://github.com/Snakerrek/Word-Counter",
    projectTitle: "Word counter",
    projectDescription: `This application allows the user to write or paste in the text,
     then it is going to break down the given text into characters, words, sentences, 
     and paragraphs. It also gives the approximate time that it will take to read the 
     text with average reading speed. Application is written with the usage of 
     HTML, CSS and Javascript.`,
    projectTechnology: [
      { name: "html", icon: SiHtml5 },
      { name: "css", icon: SiCss3 },
      { name: "js", icon: SiJavascript },
    ],
  },
  {
    projectImgPath: "password-generator",
    projectLiveLink: "https://snakerrek.github.io/password-generator/",
    projectGitHubLink: "https://github.com/Snakerrek/password-generator",
    projectTitle: "Password generator",
    projectDescription: `This application offers two functionalities. The first is to generate 
    a password taking into account your preferences such as the number of characters, the presence 
    of capital letters, numbers, and symbols. The second is to check the strength of the password, 
    it evaluates the password on a scale from 0 to 5 based on the content of the password 
    (capital letters, symbols, length, numbers). It also calculates the approximate time needed 
    to break the password using the brute-force method.`,
    projectTechnology: [
      { name: "html", icon: SiHtml5 },
      { name: "css", icon: SiCss3 },
      { name: "js", icon: SiJavascript },
    ],
  },
  {
    projectImgPath: "project-umbra",
    projectLiveLink: "",
    projectGitHubLink: "https://github.com/Snakerrek/Project-Umbra",
    projectTitle: "Project Umbra",
    projectDescription: `2D space shooter where you play as a ufo and you fight enemies. 
    It was made with the usage of Unity engine and C#. It features a randomly generated 
    world space (chunk system), it generates only around the user. 
    The player is able to use super skills, shoot, destroy enemies and collect loot. 
    There is implemented spawn system that randomly spawns enemies and space obstacles. 
    Implemented are things such as health and currency systems. 
    All player files are managed through save/load system with binary formatted files.`,
    projectTechnology: [
      { name: "c-sharp", icon: SiCsharp },
      { name: "unity", icon: SiUnity },
    ],
  },
  {
    projectImgPath: "flappit",
    projectLiveLink:
      "https://play.google.com/store/apps/details?id=com.Snakerrek.Flappit&gl=PL",
    projectGitHubLink: "https://github.com/Snakerrek/Flappit-Android",
    projectTitle: "Flappit",
    projectDescription: `An android game made in C# on Unity engine, 
    a simple arcade game based on the original Flappy Bird. 
    It has the highest score system implemented and a progression system, 
    3 different levels that are unlocked during the game. It is released on Google Play store`,
    projectTechnology: [
      { name: "c-sharp", icon: SiCsharp },
      { name: "unity", icon: SiUnity },
      { name: "android", icon: SiAndroid },
    ],
  },
  {
    projectImgPath: "spinning-shapes",
    projectLiveLink:
      "https://play.google.com/store/apps/details?id=com.Snakerrek.SpinningShapes",
    projectGitHubLink: "https://github.com/Snakerrek/Spinning-Shapes",
    projectTitle: "Spinning Shapes",
    projectDescription: `An android game made in C# on Unity engine, 
    a simple clone of Super Hexagon. It has the highest score system implemented. 
    It is released on Google Play store`,
    projectTechnology: [
      { name: "c-sharp", icon: SiCsharp },
      { name: "unity", icon: SiUnity },
      { name: "android", icon: SiAndroid },
    ],
  },
  {
    projectImgPath: "voxel-world-generator",
    projectLiveLink: "",
    projectGitHubLink: "https://github.com/Snakerrek/Voxel-World-Generator",
    projectTitle: "Voxel world generator",
    projectDescription: `Unity application that generates random voxel worlds (built from cube blocks).
     Generates worlds from different blocks based on given parameters, additionally generated terrains
      are diverse (mountains, deserts, and meadows). Can generate structures such as rivers, lakes, 
      and caves.`,
    projectTechnology: [
      { name: "c-sharp", icon: SiCsharp },
      { name: "unity", icon: SiUnity },
    ],
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
      link: "https://www.google.com/maps/place/Cz%C4%99stochowa/@50.8092997,19.052732,12z/data=!3m1!4b1!4m5!3m4!1s0x4710b5c54e2ca8af:0x854f0d4d1a178236!8m2!3d50.8118195!4d19.1203094",
    },
  ],
  backgroundCanvasConfig: {
    particleDensity: 15,
    particleSize: { min: 3, max: 10 },
    particleColor: "#1C11A4",
    lineColor: "28,32,255",
    lineWidth: 2,
  },
};

export const technologyNamesMap = new Map();

technologyNamesMap.set("js", "Javascript");
technologyNamesMap.set("ts", "Typescript");
technologyNamesMap.set("react", "React");
technologyNamesMap.set("styled-components", "Styled-components");
technologyNamesMap.set("html", "HTML");
technologyNamesMap.set("css", "CSS");
technologyNamesMap.set("bootstrap", "Boostrap");
technologyNamesMap.set("c-sharp", "C#");
technologyNamesMap.set("unity", "Unity");
technologyNamesMap.set("android", "Android");
technologyNamesMap.set("three-js", "Three.js");
technologyNamesMap.set("java", "Java");
technologyNamesMap.set("spring", "Spring");
technologyNamesMap.set("nodejs", "NodeJS");
technologyNamesMap.set("mongodb", "MongoDB");
