import styled from 'styled-components';

export const SmallButton = styled.button`
  background-color: ${(p) => p.theme.colors.primary[500]};
  border-color: ${(p) => p.theme.colors.primary[600]};
  color: ${(p) => p.theme.colors.neutrals['000']};
  text-decoration: none;
  overflow: hidden;
  border-radius: 1000px;
  padding: 1px 8px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    color: ${(p) => p.theme.colors.neutrals['000']};
    background-color: ${(p) => p.theme.colors.primary[700]};
  }
`;
