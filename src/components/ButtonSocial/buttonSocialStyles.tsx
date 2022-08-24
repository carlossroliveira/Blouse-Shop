// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ButtonSC = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  border-width: 0;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  font-weight: 600;

  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    transform: translateY(2px);
  }

  svg {
    margin-right: 10px;
  }
`;
