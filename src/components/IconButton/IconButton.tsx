import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledIconButton } from './IconButton.styles';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export function IconButton({ icon, ...props }: IconButtonProps) {
  return <StyledIconButton {...props}>{icon}</StyledIconButton>;
}
