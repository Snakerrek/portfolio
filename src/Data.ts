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
  "c-sharp",
  "unity",
  "android",
];

export const projectsData: projectsDataInterface[] = [
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 1",
    projectDescription: "Some kind of description",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 2",
    projectDescription: "Some kind of description 2",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 3",
    projectDescription: "Some kind of description 3",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 1",
    projectDescription: "Some kind of description",
    projectTechnology: ["html", "css"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 2",
    projectDescription: "Some kind of description 2",
    projectTechnology: ["js", "html"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 3",
    projectDescription: "Some kind of description 3",
    projectTechnology: ["js", "css"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 1",
    projectDescription: "Some kind of description",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 2",
    projectDescription: "Some kind of description 2",
    projectTechnology: ["js", "html", "css"],
  },
  {
    projectImgPath:
      "https://www.casper.com.tr/uploads/2021/02/excalibur-wallpaper-06.jpg",
    projectTitle: "Project 3",
    projectDescription: "Some kind of description 3",
    projectTechnology: ["js", "html", "css"],
  },
];
