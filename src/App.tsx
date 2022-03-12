import React from "react";
import { GlobalStyle } from "./GlobalStyle";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

// Data
import { homeSectionData } from "./Data";
import { aboutMeSectionData } from "./Data";
import { technologyNamesForFilter, projectsData } from "./Data";
import { skillsData } from "./Data";
import { contactData } from "./Data";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar />
      <Home
        homeTextFirstLine={homeSectionData.homeTextFirstLine}
        homeTextSecondLine={homeSectionData.homeTextSecondLine}
        delay={homeSectionData.delay}
        FFEconfig={homeSectionData.FFEconfig}
      />
      <main>
        <About
          title={aboutMeSectionData.title}
          aboutMeText={aboutMeSectionData.aboutMeText}
          object3Dconfig={aboutMeSectionData.object3Dconfig}
        />
        <Skills skillsData={skillsData} />
        <Projects
          technologyNamesForFilter={technologyNamesForFilter}
          projectsData={projectsData}
        />
        <Contact contactData={contactData} />
      </main>
      <GlobalStyle />
    </div>
  );
};

export default App;
