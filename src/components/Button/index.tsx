// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, ButtonSC } from './buttonStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  return (
    <ContainerSC>
      <ButtonSC role="button">{props.text}</ButtonSC>
    </ContainerSC>
  );
};
