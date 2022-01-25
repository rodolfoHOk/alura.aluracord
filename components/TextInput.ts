import styled from 'styled-components';

export const TextInput = styled.input`
  border-width: 1px;
  background-color: ${(p) => p.theme.colors.neutrals[800]};
  color: ${(p) => p.theme.colors.neutrals[200]};
  border-color: ${(p) => p.theme.colors.neutrals[900]};
  font-size: 14px;
  border-radius: 6px;
  margin-bottom: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-family: inherit;
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
