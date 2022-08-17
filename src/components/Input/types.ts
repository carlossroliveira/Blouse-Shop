/* eslint-disable no-unused-vars */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ChangeEvent } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface InputProps {
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
