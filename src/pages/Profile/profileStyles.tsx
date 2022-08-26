// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: 100px auto 100px;

  grid-template-areas:
    'styleOne'
    'styleTwo'
    'styleThree';

  background-color: tomato;
`;

export const DivHeader = styled.header`
  grid-area: styleOne;
  border: 4px solid blue;
`;

export const DivMain = styled.main`
  grid-area: styleTwo;
  border: 4px solid blue;
`;

export const DivFooter = styled.footer`
  grid-area: styleThree;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    position: initial;
  }
`;
