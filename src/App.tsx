import React from "react";
import { GlobalStyle } from "./GlobalStyle";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// Data
import { navbarData } from "./Data";
import { homeSectionData } from "./Data";
import { aboutMeSectionData } from "./Data";
import { technologyNamesForFilter, projectsData } from "./Data";
import { skillsData } from "./Data";
import { contactData } from "./Data";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Navbar navbarData={navbarData} />
      <Home
        homeTextFirstLine={homeSectionData.homeTextFirstLine}
        homeTextSecondLine={homeSectionData.homeTextSecondLine}
        delay={homeSectionData.delay}
        FFEconfig={homeSectionData.FFEconfig}
      />
      <main>
        <a href="/#" id="about" className="navbarAnchor">
          {" "}
        </a>
        <About
          title={aboutMeSectionData.title}
          aboutMeText={aboutMeSectionData.aboutMeText}
          object3Dconfig={aboutMeSectionData.object3Dconfig}
        />
        <a href="/#" id="mySkills" className="navbarAnchor">
          {" "}
        </a>
        <Skills skillsData={skillsData} />
        <a href="/#" id="projects" className="navbarAnchor">
          {" "}
        </a>
        <Projects
          technologyNamesForFilter={technologyNamesForFilter}
          projectsData={projectsData}
        />
        <a href="/#" id="contact" className="navbarAnchor">
          {" "}
        </a>
        <Contact contactData={contactData} />
      </main>
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
