import { transparentize } from 'polished';
import styled from 'styled-components';

export const SelectWrapper = styled.select`
  border-width: 1px;
  background-color: ${(p) => transparentize(0.3, p.theme.colors.neutrals[800])};
  color: ${(p) => p.theme.colors.neutrals[100]};
  border-color: ${(p) => p.theme.colors.neutrals[900]};
  font-size: 14px;
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  transition: 0.2s ease-in-out;
  border-style: solid;
  resize: none;
  width: 100%;
  display: block;
  outline: 0;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary[500]};
  }
`;
