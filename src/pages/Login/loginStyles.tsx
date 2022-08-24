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

  padding: 6rem 7rem;

  border: 2px solid ${({ theme }) => theme.background.tertiary};

  background-color: ${({ theme }) => theme.background.secondary};
  background: linear-gradient(90deg, #f8f8f8 0%, #383838 5%);

  @media (max-width: 975px) {
    padding: 0 2rem;
    justify-content: center;
  }
`;

export const DivSecondSC = styled.div`
  z-index: 2;
  padding: 0 2rem;
`;

export const TitleSC = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 3.5rem;
  color: ${({ theme }) => theme.color.primary};
`;

export const DivSocialSC = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: space-evenly;
`;

export const DivTwoSC = styled.div`
  ${STYLES_DEFAULT}

  position: absolute;
  right: 2px;
  top: 2px;

  @media (max-width: 975px) {
    display: none;
  }
`;

export const ImgSC = styled.img`
  width: 55rem;
`;
