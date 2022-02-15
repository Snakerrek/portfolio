import React from "react";

import { AboutWrapper, Content } from "./About.styles";

import AnimatedObject3D from "../AnimatedObject3D/AnimatedObject3D";

const About = () => {
  return (
    <AboutWrapper>
      <Content>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
          iaculis ante. Vivamus volutpat purus leo, malesuada pulvinar leo
          placerat eu. Sed consectetur ante sit amet neque malesuada aliquam.
          Mauris sagittis rhoncus justo, et aliquet ante tincidunt ut. Phasellus
          porta sodales feugiat. Cras mattis nulla sed sem porta, nec ultrices
          odio consequat. Etiam et tellus vitae risus bibendum sollicitudin nec
          tincidunt tortor. Cras faucibus orci vel nunc laoreet, in iaculis
          lacus scelerisque. Vivamus est dolor, euismod vel leo non, consectetur
          feugiat nisi. Quisque pharetra nibh urna, a pharetra tortor auctor
          non. Cras vitae bibendum sem. Nullam malesuada orci vel sapien
          hendrerit molestie. Integer interdum dui a dolor condimentum sodales.
          Curabitur ipsum lectus, pellentesque vel est in, laoreet tincidunt
          lectus. Duis ac lectus in nibh pharetra dapibus.
        </p>
      </Content>
      <AnimatedObject3D />
    </AboutWrapper>
  );
};

export default About;
