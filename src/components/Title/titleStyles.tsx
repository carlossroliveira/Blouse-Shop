// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section``;

export const TitleSC = styled.h1`
  color: #0000;
  overflow: hidden;
  transition: 0.3s;
  font-size: 2.5rem;
  line-height: 1.2em;
  text-shadow: 0 0 #383838, 0 1.2em #383838;

  &:hover {
    text-shadow: 0 -1.2em #383838, 0 0 #383838;
  }
`;
