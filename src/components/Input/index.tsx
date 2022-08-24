// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
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
  const [type, setType] = useState<string>('password');
  const [icon, setIcon] = useState<boolean>(false);

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
      setIcon(true);
    } else {
      setType('password');
      setIcon(false);
    }
  };

  const renderInput = () => {
    return props.variant === 'text' ? (
      <InputSC
        required
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    ) : (
      <>
        <InputSC
          required
          type={type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />

        <span onClick={handleToggle}>
          {icon ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </>
    );
  };

  return (
    <ContainerSC>
      <DivGroupSC>
        {renderInput()}
        <SpanOneSC></SpanOneSC>
        <SpanTwoSC></SpanTwoSC>
        <LabelSC>{props.text}</LabelSC>
      </DivGroupSC>
    </ContainerSC>
  );
};
