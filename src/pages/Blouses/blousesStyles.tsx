// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  border: 5px solid blue;
  height: 100vh;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  li {
    width: 25rem;
  }

  img {
    width: 20rem;
  }
`;
