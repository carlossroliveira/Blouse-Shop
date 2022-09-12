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

export const ParagraphSC = styled.p<{ Color: 'black' | 'white' }>`
  font-weight: 600;
  font-size: 20px;
  color: ${({ Color, theme }) => Color === 'black' && theme.color.secondary};
  color: ${({ Color, theme }) => Color === 'white' && theme.color.primary};
`;
