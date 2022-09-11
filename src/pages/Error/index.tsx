// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { ButtonLink } from '../../components/ButtonLink';
import { NamePage } from '../../components/NamePage';
import { SocialNetworks } from '../../components/SocialNetworks';
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
  DivSC,
  DivTwoSC,
  ParagraphSC,
  TitleSC,
} from './errorStyles';

export const Error = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <ContainerSC>
      <NamePage title="Error" />
      <DivOneSC>
        <img src={photo} alt="image error" />
      </DivOneSC>

      <DivTwoSC>
        <TitleSC>Esta página não existe!</TitleSC>

        <ParagraphSC>Clique no botão para volta</ParagraphSC>

        <ButtonLink text="Voltar" onClick={() => navigate(-1)} />

        <DivSC>
          <SocialNetworks />
        </DivSC>
      </DivTwoSC>
    </ContainerSC>
  );
};
