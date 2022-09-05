// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  position: absolute;
  right: 8rem;

  @media (max-width: 975px) {
    margin-top: 3rem;
    margin-right: -1rem;
  }
`;

export const ParagraphSC = styled.p`
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 600;
  font-size: 20px;
`;
