// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineGlobal,
} from 'react-icons/ai';

// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  LinkOneSC,
  LinkThreeSC,
  LinkTwoSC,
  LiSC,
  UlSC,
} from './socialNetworksStyles';
import { SpanSC } from './stylesUtils';

export const SocialNetworks = () => {
  return (
    <ContainerSC>
      <UlSC>
        <LiSC>
          <LinkOneSC href="https://github.com/carlossroliveira" target="_blank">
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <AiFillGithub />
          </LinkOneSC>
        </LiSC>

        <LiSC>
          <LinkTwoSC
            href="https://www.linkedin.com/in/carlos-oliveira-ab93941a1/"
            target="_blank"
          >
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <AiOutlineLinkedin />
          </LinkTwoSC>
        </LiSC>

        <LiSC>
          <LinkThreeSC
            href="https://carlossroliveira.github.io/Portfolio/"
            target="_blank"
          >
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <SpanSC></SpanSC>
            <AiOutlineGlobal />
          </LinkThreeSC>
        </LiSC>
      </UlSC>
    </ContainerSC>
  );
};
