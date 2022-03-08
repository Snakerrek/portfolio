import React, { useState } from "react";

import { TextHolder, ContentWrapper } from "./About.styles";

import AnimatedObject3D from "../AnimatedObject3D/AnimatedObject3D";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

import { aboutMeSectionDataInterface } from "../../interfaces";

const getCanvasSize = () => {
  if (window.innerWidth < 400) return 300;
  else if (window.innerWidth < 500) return 380;
  else if (window.innerWidth < 600) return 450;
  else if (window.innerWidth < 750) return 350;
  else if (window.innerWidth < 1000) return 600;
  else return 700;
};

const About = ({
  title,
  aboutMeText,
  object3Dconfig,
}: aboutMeSectionDataInterface): JSX.Element => {
  const [canvasSize, setCanvasSize] = useState(getCanvasSize());

  window.addEventListener("resize", function () {
    setCanvasSize(getCanvasSize());
  });

  return (
    <SectionWrapper
      title={title}
      children={
        <ContentWrapper>
          <TextHolder>
            <p>{aboutMeText}</p>
          </TextHolder>
          <AnimatedObject3D
            modelPath={object3Dconfig.modelPath}
            canvasSize={{ x: canvasSize, y: canvasSize }}
            modelScale={{
              x: object3Dconfig.scale,
              y: object3Dconfig.scale,
              z: object3Dconfig.scale,
            }}
          />
        </ContentWrapper>
      }
    ></SectionWrapper>
  );
};

export default About;
