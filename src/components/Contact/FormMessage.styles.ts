import styled from "styled-components";

type Props = {
  color: string;
};

export const MessageParagraph = styled.p<Props>`
  color: ${(p) => p.color};
  margin: 2px;
  margin-left: 5px;
`;
