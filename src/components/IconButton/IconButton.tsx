import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';
import { StyledIconButton } from './IconButton.styles';

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export function IconButton({ icon, ...props }) {
  return <StyledIconButton {...props}>{icon}</StyledIconButton>;
}
