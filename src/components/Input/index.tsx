// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import {
  ContainerSC,
  DivGroupSC,
  InputSC,
  LabelSC,
  SpanOneSC,
  SpanTwoSC,
} from './inputStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { InputProps } from './types';

export const Input = (props: InputProps) => {
  return (
    <ContainerSC>
      <DivGroupSC>
        <InputSC
          required
          type="text"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <SpanOneSC></SpanOneSC>
        <SpanTwoSC></SpanTwoSC>
        <LabelSC>{props.text}</LabelSC>
      </DivGroupSC>
    </ContainerSC>
  );
};
