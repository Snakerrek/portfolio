import styled from "styled-components";

export const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  a {
    text-decoration: none;
  }
`;

type LinkProps = {
  linkType: string;
};

export const Link = styled.div<LinkProps>`
  background-color: initial;
  background-image: ${(p) =>
    p.linkType === "Code"
      ? "linear-gradient(-180deg, #00d775, #00bd68)"
      : "linear-gradient(-180deg, #ff7e31, #e62c03)"};
  border-top-left-radius: ${(p) => (p.linkType === "Code" ? "6px" : "0")};
  border-top-right-radius: ${(p) => (p.linkType === "Code" ? "6px" : "0")};
  border-bottom-left-radius: ${(p) => (p.linkType === "Live" ? "6px" : "0")};
  border-bottom-right-radius: ${(p) => (p.linkType === "Live" ? "6px" : "0")};
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  border: 0;
  :hover {
    background: ${(p) => (p.linkType === "Code" ? "#00bd68" : "#f93e18")};
  }
`;
