import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

interface ButtonProps {
  active: boolean;
}

export const FilterButton = styled.button<ButtonProps>`
  margin-top: 0.5rem;
  margin-right: 1rem;
  min-width: 5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  color: var(--lightBlue);
  border-radius: 1rem;
  border: 2px solid var(--lightBlue);
  font-weight: bold;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background: var(--lightBlue);
    color: white;
  `}
`;
