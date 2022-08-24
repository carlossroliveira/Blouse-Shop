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
  text: string;
  value?: string;
  required?: boolean;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
