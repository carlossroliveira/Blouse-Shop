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

  background-color: tomato;
`;

export const DivTwoSC = styled.div`
  ${STYLES_DEFAULT}

  background-color: violet;
`;
