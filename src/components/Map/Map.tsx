import React from "react";

import mapImage from "../../assets/map-image.png";
import { MapWrapper, MapCard, CardHeading, PText } from "./Map.styles";

const Map = (): JSX.Element => {
  return (
    <MapWrapper mapImage={mapImage}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps/place/Cz%C4%99stochowa/@50.8092997,19.052732,12z/data=!3m1!4b1!4m5!3m4!1s0x4710b5c54e2ca8af:0x854f0d4d1a178236!8m2!3d50.8118195!4d19.1203094"
      >
        <MapCard>
          <CardHeading>I'm here</CardHeading>
          <PText>Tomasz Kraszewski</PText>
          <PText>Częstochowa, Polska</PText>
          <PText>Click to open in Google Maps</PText>
        </MapCard>
      </a>
    </MapWrapper>
  );
};

export default Map;
