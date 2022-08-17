// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, LinkSC } from './buttonLinkStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ButtonLinkProps } from './types';

export const ButtonLink = (props: ButtonLinkProps) => {
  return (
    <ContainerSC>
      <LinkSC to={`${props.path}`}>{props.text}</LinkSC>
    </ContainerSC>
  );
};
