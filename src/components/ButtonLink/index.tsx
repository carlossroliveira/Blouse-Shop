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
      <LinkSC to={`${props.path}`} onClick={props.onClick}>
        {props.text}
      </LinkSC>
    </ContainerSC>
  );
};
