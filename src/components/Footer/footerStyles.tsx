// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  position: absolute;
  right: 8rem;
`;

export const ParagraphSC = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
  font-size: 20px;
`;
