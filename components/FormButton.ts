import styled from 'styled-components';

export const FormButton = styled.button`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${(p) => p.theme.colors.primary[500]};
  border-color: ${(p) => p.theme.colors.primary[500]};
  color: ${(p) => p.theme.colors.neutrals['000']};
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background-color: ${(p) => p.theme.colors.primary[600]};
  }
`;
