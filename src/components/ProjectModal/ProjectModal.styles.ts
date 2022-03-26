import styled from "styled-components";
import { motion } from "framer-motion";

type WrapperProps = {
  bgImage: any;
};

export const ProjectModalWrapper = styled(motion.div)<WrapperProps>`
  width: clamp(50%, 900px, 85%);
  min-height: 500px;
  margin-left: 5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${(p) => p.bgImage}) no-repeat center / cover;

  @media screen and (max-width: 600px) {
    margin-left: 0;
    min-height: 300px;
  }
`;

export const Content = styled(motion.div)`
  width: 100%;
  min-height: 500px;
  padding: 10px;
  border-radius: 12px;
  background: rgba(12, 12, 12, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    min-height: 300px;
  }
`;

export const Title = styled.div`
  color: white;
  width: 100%;
  height: 50px;
  font-size: var(--fontVeryBig);
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: var(--fontBig);
    height: 25px;
  }
`;

export const MainContent = styled.div`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubContent = styled.div`
  flex: 1 1 310px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    p {
      font-size: 16px;
    }
  }
`;
