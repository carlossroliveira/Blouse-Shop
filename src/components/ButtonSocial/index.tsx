// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ButtonSC } from './buttonSocialStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ButtonSocialProps } from './types';

export const ButtonSocial = (props: ButtonSocialProps) => {
  return (
    <ButtonSC role="button">
      <>
        {props.icon}
        {props.text}
      </>
    </ButtonSC>
  );
};
