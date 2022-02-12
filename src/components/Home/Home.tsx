import React from "react";

import Canvas from "../Canvas/Canvas";

import { TitleWrapper } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <>
      <TitleWrapper>
        <p>Hi, my name is</p>
        <h2>Tomasz Kraszewski.</h2>
        <h3>I build things for the web and more.</h3>
      </TitleWrapper>
      <Canvas />
    </>
  );
};

export default Home;
