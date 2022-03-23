import styled from "styled-components";

type Props = {
  mapImage: any;
};

export const MapWrapper = styled.div<Props>`
  background: url(${(p) => p.mapImage}) no-repeat center / cover;
  min-height: 400px;
  position: relative;
  width: 100%;
  filter: grayscale(100);
  transition: 0.5s ease;

  &:hover {
    filter: grayscale(0);
  }
`;

export const MapCard = styled.div`
  position: absolute;
  right: 2%;
  bottom: 5%;
  padding: 5px;
  background: var(--grey);
  width: 100%;
  max-width: 250px;
  border-radius: 12px;
  text-align: center;
  border: solid 2px var(--grey);
  transition: 300ms ease;

  &:hover {
    border: solid 2px var(--lightBlue);
  }
`;

export const CardHeading = styled.h3`
  color: var(--lightBlue);
  font-size: 1.7rem;
  margin: 10px;
  color: var(--white);
`;

export const PText = styled.p`
  color: var(--lightBlue);
  margin: 2px;

  &:last-child {
    margin-top: 10px;
    font-size: var(--fontExtraSmall);
    color: var(--white);
  }
`;
