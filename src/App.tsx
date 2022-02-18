import React from "react";
import { GlobalStyle } from "./GlobalStyle";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <main>
        <About />
        <Skills />
      </main>
      <GlobalStyle />
    </div>
  );
};

export default App;
