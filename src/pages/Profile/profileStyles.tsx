// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  height: 100vh; ///  pend
  display: grid;
  grid-template-columns: auto;
  grid-auto-rows: 100px auto 100px;

  grid-template-areas:
    'styleOne'
    'styleTwo'
    'styleThree';

  background-color: ${({ theme }) => theme.background.secondary};
`;

export const HeaderSC = styled.header`
  grid-area: styleOne;

  display: flex;
  padding: 1rem 3rem;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid;
`;

export const NavSC = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 1rem;
    }
  }
`;

export const ButtonSC = styled.button<{ disabled?: boolean }>`
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  transition: filter 0.1s;
  background-color: transparent;
  color: ${({ theme }) => theme.color.secondary};

  &:hover {
    filter: brightness(0.1);
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

export const DivMain = styled.main`
  grid-area: styleTwo;
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
