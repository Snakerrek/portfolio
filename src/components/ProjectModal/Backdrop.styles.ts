import styled from "styled-components";
import { motion } from "framer-motion";

export const BackdropWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  background: rgba(12, 12, 12, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
