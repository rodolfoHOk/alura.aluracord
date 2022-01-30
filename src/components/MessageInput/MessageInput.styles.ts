import { transparentize } from 'polished';
import styled from 'styled-components';

export const MessageInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const TextInput = styled.textarea`
  border-width: 1px;
  background-color: ${(p) => transparentize(0.1, p.theme.colors.neutrals[800])};
  color: ${(p) => p.theme.colors.neutrals[200]};
  border-color: ${(p) => transparentize(0.1, p.theme.colors.neutrals[900])};
  font-size: 14px;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: inherit;
  transition: 0.2s ease-in-out;
  border-style: solid;
  resize: none;
  width: 100%;
  display: block;
  outline: 0;

  &:hover,
  &:focus {
    border-color: ${(p) => transparentize(0.1, p.theme.colors.primary[500])};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    gap: 48px;
  }
`;
