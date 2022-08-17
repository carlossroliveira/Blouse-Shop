// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerSC = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkSC = styled(Link)`
  margin-top: 1rem;
  font-size: 1.5rem;
  padding: 1rem 3rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.fontFamily.fontDefault};

  overflow: hidden;
  position: relative;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.color.tertiary};

  &:hover {
    box-shadow: 1px 1px 25px 10px ${({ theme }) => theme.background.tertiary};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, #9294f866, transparent);
    transition: all 650ms;
  }

  &:hover:before {
    left: 100%;
  }
`;
