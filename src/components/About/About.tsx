import React from "react";

import { AboutWrapper, Content } from "./About.styles";

type Props = {};

const About = (props: Props) => {
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
          lectus. Duis ac lectus in nibh pharetra dapibus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Integer et tellus pretium, malesuada ligula fringilla, lobortis lacus.
          Donec gravida, justo non sagittis blandit, ligula leo posuere velit,
          maximus pharetra dolor elit sed mi. Phasellus vel dolor tristique,
          ornare orci sollicitudin, vestibulum nunc. Donec sit amet convallis
          sem, nec blandit massa. Quisque vulputate purus sed tellus ullamcorper
          consectetur. Sed auctor varius accumsan. Sed quis sem at magna auctor
          sodales. Aliquam at porta purus. Vivamus porta luctus nisi, ac
          vulputate dolor congue quis. Aliquam eu pellentesque leo.
        </p>
      </Content>
      <Content>
        <img
          src="https://content.techgig.com/photo/77087595/Guide-How-to-build-career-as-a-programmer-without-college-degree.jpg"
          alt="tempIMG"
          width="100%"
          height="auto"
        ></img>
      </Content>
    </AboutWrapper>
  );
};

export default About;
