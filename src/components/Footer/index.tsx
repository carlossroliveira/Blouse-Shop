// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, ParagraphSC } from './footerStyles';

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <ContainerSC>
      <ParagraphSC>&copy; {currentYear} | Carlos Oliveira</ParagraphSC>
    </ContainerSC>
  );
};
