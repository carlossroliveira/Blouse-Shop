// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ButtonHTMLAttributes } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface ButtonLinkProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  path?: string;
}
