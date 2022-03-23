import styled from "styled-components";

export const TitleWrapper = styled.div`
  position: absolute;
  top: 250px;

  padding-left: 7rem;
  @media only screen and (max-width: 600px) {
    padding-top: 7rem;
    padding-left: 2rem;
  }
`;

export const HomeWrap = styled.div`
  position: relative;
`;

export const PatternInfo = styled.div`
  position: absolute;
  bottom: 20px;
  right: 10px;
  width: 300px;
  background: rgba(0, 0, 0, 0.85);
  text-align: center;
  border-radius: 15px;
  @media screen and (max-width: 600px) {
    width: 200px;
    p {
      font-size: var(--fontExtraSmall);
    }
  }
`;
