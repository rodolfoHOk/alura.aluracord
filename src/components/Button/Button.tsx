import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'normal' | 'large';
  variant?: 'normal' | 'transparent';
  label: ReactNode;
}

export function Button({ label, size, variant, ...props }: ButtonProps) {
  return (
    <StyledButton size={size} variant={variant} {...props}>
      {label}
    </StyledButton>
  );
}
