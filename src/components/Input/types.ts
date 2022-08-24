/* eslint-disable no-unused-vars */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ChangeEvent, InputHTMLAttributes } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  text: string;
  value?: string;
  required?: boolean;
  variant: 'text' | 'password';
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}
