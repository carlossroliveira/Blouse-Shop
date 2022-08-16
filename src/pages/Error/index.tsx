// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Images
// -------------------------------------------------
import photo from './OopsError.svg';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivOneSC,
  DivTwoSC,
  ParagraphSC,
  TitleSC,
} from './errorStyles';

export const Error = (): JSX.Element => {
  return (
    <ContainerSC>
      <DivOneSC>
        <img src={photo} alt="image error" />
      </DivOneSC>

      <DivTwoSC>
        <TitleSC>Esta página não existe!</TitleSC>
        <ParagraphSC>Clique no botão para volta</ParagraphSC>

        <button>Volta</button>
      </DivTwoSC>
    </ContainerSC>
  );
};
