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

export const Tes = styled.div`
  position: absolute;
  /* z-index: 1; */
  img {
    width: 20rem;
  }
`;

export const DivMainSC = styled.div`
  height: calc(100vh - 4rem);

  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 70rem;
  margin: 0 auto;

  box-shadow: ${({ theme }) => theme.boxShadow.primary};
`;

export const DivOneSC = styled.div`
  ${STYLES_DEFAULT}

  background-color: ${({ theme }) => theme.color.primary};
`;

export const DivSecondSC = styled.div`
  padding: 10rem;
  background: red;
`;

export const DivTwoSC = styled.div`
  ${STYLES_DEFAULT}

  position: absolute;
  right: 0;

  transform: rotate(180deg);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 30rem 0 0 55rem;

  border-color: transparent transparent transparent #383838;

  @media (max-width: 975px) {
    display: none;
  }
`;
