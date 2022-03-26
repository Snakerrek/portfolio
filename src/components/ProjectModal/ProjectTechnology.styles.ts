import styled from "styled-components";

export const Technology = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 600px) {
    flex-direction: row;
  }

  p {
    margin: 0;
    font-size: var(--fontBig);
    @media screen and (max-width: 400px) {
      font-size: var(--fontSmall);
    }
  }
  p svg {
    vertical-align: middle;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 0 10px 10px 0;
  }
`;
