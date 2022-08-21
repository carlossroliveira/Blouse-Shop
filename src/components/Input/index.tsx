// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC } from './inputStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------
/* import { InputProps } from './types'; */

export const Input = () => {
  return (
    <ContainerSC>
      {/* <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      /> */}

      <div className="text-field-filled">
        <input type="text" />
        <span>Name</span>
      </div>
    </ContainerSC>
  );
};
