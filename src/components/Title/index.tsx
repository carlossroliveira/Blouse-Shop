// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, TitleSC } from './titleStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ITitleProps } from './types';

export const Title = (props: ITitleProps) => {
  return (
    <ContainerSC>
      <TitleSC>{props.title}</TitleSC>
    </ContainerSC>
  );
};
