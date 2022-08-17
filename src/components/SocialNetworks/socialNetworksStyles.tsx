// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

import { SpanSC, STYLES_DEFAULT } from './stylesUtils';

export const ContainerSC = styled.section``;

export const UlSC = styled.ul`
  display: flex;
`;

export const LiSC = styled.li`
  list-style: none;
`;

export const LinkOneSC = styled.a`
  ${STYLES_DEFAULT}

  &:hover {
    color: ${({ theme }) => theme.color.quinary};
  }
  &:hover ${SpanSC} {
    background: ${({ theme }) => theme.color.quinary};
  }
`;

export const LinkTwoSC = styled.a`
  ${STYLES_DEFAULT}

  &:hover {
    color: ${({ theme }) => theme.color.tertiary};
  }
  &:hover ${SpanSC} {
    background: ${({ theme }) => theme.color.tertiary};
  }
`;

export const LinkThreeSC = styled.a`
  ${STYLES_DEFAULT}

  &:hover {
    color: ${({ theme }) => theme.color.quaternary};
  }
  &:hover ${SpanSC} {
    background: ${({ theme }) => theme.color.quaternary};
  }
`;
