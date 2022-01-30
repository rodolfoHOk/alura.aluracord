import styled from 'styled-components';
import { transparentize } from 'polished';

type StyledButtonProps = {
  size?: 'small' | 'normal' | 'large';
  variant?: 'normal' | 'transparent';
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${(p) => (p.size === 'small' ? '1px 8px' : '8px 12px')};
  background-color: ${(p) =>
    p.variant === 'transparent'
      ? '#00000000'
      : transparentize(0.1, p.theme.colors.primary[500])};
  border-color: ${(p) => p.theme.colors.primary[500]};
  color: ${(p) =>
    p.variant === 'transparent'
      ? p.theme.colors.neutrals[100]
      : p.theme.colors.neutrals['000']};
  text-decoration: none;
  overflow: hidden;
  width: ${(p) =>
    p.size === 'small' || p.variant === 'transparent'
      ? 'nome'
      : p.size === 'large'
      ? '50px'
      : '100%'};
  height: ${(p) => (p.size === 'large' ? '50px' : 'none')};
  min-width: ${(p) => (p.size === 'large' ? '50px' : 'auto')};
  min-height: ${(p) => (p.size === 'large' ? '50px' : 'auto')};
  border-radius: ${(p) =>
    p.size === 'small' || p.size === 'large' ? '1000px' : '6px'};
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background-color: ${(p) =>
      p.variant === 'transparent'
        ? p.theme.colors.neutrals[400]
        : p.theme.colors.primary[600]};
    color: ${(p) =>
      p.variant === 'transparent'
        ? p.theme.colors.primary[100]
        : p.theme.colors.neutrals['000']};
  }
`;
