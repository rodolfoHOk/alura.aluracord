import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutButton = styled.button`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #00000000;
  border-color: ${(p) => p.theme.colors.neutrals[500]};
  color: ${(p) => p.theme.colors.neutrals['300']};
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
  position: relative;

  &:hover {
    background-color: ${(p) => p.theme.colors.neutrals[400]};
  }
`;
