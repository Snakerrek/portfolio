import React, { useState } from "react";

import { TextHolder, ContentWrapper } from "./About.styles";

import AnimatedObject3D from "../AnimatedObject3D/AnimatedObject3D";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const getCanvasSize = () => {
  if (window.innerWidth < 400) return 300;
  else if (window.innerWidth < 500) return 380;
  else if (window.innerWidth < 600) return 450;
  else if (window.innerWidth < 750) return 350;
  else return 500;
};

const About = () => {
  const [canvasSize, setCanvasSize] = useState(getCanvasSize());

  window.addEventListener("resize", function () {
    setCanvasSize(getCanvasSize());
  });

  return (
    <SectionWrapper
      title={"About me"}
      children={
        <ContentWrapper>
          <TextHolder>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
              iaculis ante. Vivamus volutpat purus leo, malesuada pulvinar leo
              placerat eu. Sed consectetur ante sit amet neque malesuada
              aliquam. Mauris sagittis rhoncus justo, et aliquet ante tincidunt
              ut. Phasellus porta sodales feugiat. Cras mattis nulla sed sem
              porta, nec ultrices odio consequat. Etiam et tellus vitae risus
              bibendum sollicitudin nec tincidunt tortor. Cras faucibus orci vel
              nunc laoreet, in iaculis lacus scelerisque. Vivamus est dolor,
              euismod vel leo non, consectetur feugiat nisi. Quisque pharetra
              nibh urna, a pharetra tortor auctor non. Cras vitae bibendum sem.
              Nullam malesuada orci vel sapien hendrerit molestie. Integer
              interdum dui a dolor condimentum sodales. Curabitur ipsum lectus,
              pellentesque vel est in, laoreet tincidunt lectus. Duis ac lectus
              in nibh pharetra dapibus.
            </p>
          </TextHolder>
          <AnimatedObject3D
            modelPath={"/wraith.glb"}
            canvasSize={{ x: canvasSize, y: canvasSize }}
            modelScale={{ x: 0.035, y: 0.035, z: 0.035 }}
          />
        </ContentWrapper>
      }
    ></SectionWrapper>
  );
};

export default About;
