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
    <ButtonSC onClick={props.onClick} role="button">
      <>
        {props.icon}
        {props.text}
      </>
    </ButtonSC>
  );
};
