// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, ParagraphSC } from './footerStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IFooterProps } from './types';

export const Footer = (props: IFooterProps) => {
  const currentYear: number = new Date().getFullYear();

  return (
    <ContainerSC>
      <ParagraphSC Color={props.color}>
        &copy; {currentYear} | Carlos Oliveira
      </ParagraphSC>
    </ContainerSC>
  );
};
