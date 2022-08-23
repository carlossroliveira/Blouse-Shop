// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';
import { STYLES_DEFAULT } from './stylesUtils';

export const ContainerSC = styled.section`
  background: rgb(144, 202, 249);
  background: linear-gradient(
    212deg,
    rgba(144, 202, 249, 1) 40%,
    rgba(56, 56, 56, 1) 90%
  );
  height: 100vh;
  padding: 2rem;
`;

export const DivMainSC = styled.div`
  height: calc(100vh - 4rem);

  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto;
  max-width: 70rem;

  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`;

export const DivOneSC = styled.div`
  ${STYLES_DEFAULT}

  padding: 10rem;

  background-color: ${({ theme }) => theme.background.secondary};
  background: linear-gradient(90deg, #f8f8f8 0%, #383838 5%);
`;

export const DivSecondSC = styled.div`
  border: 2px solid tomato;

  margin-top: 1rem;
  padding: 0 2rem;
`;

export const TitleSC = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
`;

export const DivTwoSC = styled.div`
  ${STYLES_DEFAULT}

  position: absolute;
  z-index: 1;
  right: 0;

  img {
    width: 55rem;
  }

  @media (max-width: 975px) {
    display: none;
  }
`;
