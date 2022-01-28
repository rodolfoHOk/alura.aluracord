import styled from 'styled-components';

export const StyledIconButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 6px;
  background-color: #00000000;
  border-color: ${(p) => p.theme.colors.neutrals[500]};
  color: ${(p) => p.theme.colors.neutrals[100]};
  font-size: 18px;
  text-decoration: none;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(p) => p.theme.colors.neutrals[300]};
    color: ${(p) => p.theme.colors.primary[100]};
  }
`;
