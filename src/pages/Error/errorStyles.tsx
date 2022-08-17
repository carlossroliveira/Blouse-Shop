// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';
import { STYLES_DEFAULT } from './stylesUtils';

export const ContainerSC = styled.section`
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivOneSC = styled.div`
  ${STYLES_DEFAULT}

  background-color: ${({ theme }) => theme.background.secondary};

  @media (max-width: 768px) {
    display: none;
  }

  img {
    width: 100%;
  }

  background-image: url('./assets/backgroundError.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 40px 100%;
`;

export const DivTwoSC = styled.div`
  ${STYLES_DEFAULT}

  background-color: ${({ theme }) => theme.background.primary};

  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TitleSC = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.tertiary};
`;

export const ParagraphSC = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.tertiary};
`;
